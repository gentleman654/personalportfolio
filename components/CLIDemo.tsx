"use client";

import { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";

export default function CLIDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const term = new Terminal({ cols: 80, rows: 24, convertEol: true });
    term.open(containerRef.current);
    term.writeln("Welcome to my C++ CLI (WASM) demo");
    term.writeln("--------------------------------------------------");

    let instance: any;
    let inputBuffer: string[] = [];

    (async () => {
      // Load the Emscripten module from /public/wasm at runtime (not via bundler)
      const moduleUrl = new URL("/wasm/ms5.js", window.location.origin).toString();

      let ModuleFactory: any;
      try {
        // ES module build: -s MODULARIZE=1 -s EXPORT_ES6=1
        // @ts-ignore
        const mod = await import(/* webpackIgnore: true */ moduleUrl);
        ModuleFactory = mod?.default ?? mod?.Module ?? mod;
      } catch {
        // Fallback for non-ES builds: load via script tag, global Module
        await new Promise<void>((resolve, reject) => {
          const s = document.createElement("script");
          s.src = moduleUrl;
          s.async = true;
          s.onload = () => resolve();
          s.onerror = () => reject(new Error("Failed to load /wasm/ms5.js"));
          document.head.appendChild(s);
        });
        ModuleFactory = (globalThis as any).Module;
      }

      if (!ModuleFactory) {
        term.writeln("Failed to initialize WASM Module.");
        return;
      }

      instance = await ModuleFactory({
        locateFile: (path: string) => `/wasm/${path}`,
      });

      // hook stdin/stdout
      instance.FS.init(
        () => {
          if (inputBuffer.length === 0) return null; // no input yet
          const char = inputBuffer.shift()!;
          return char.charCodeAt(0);
        },
        (c: number) => term.write(String.fromCharCode(c)), // stdout
        (c: number) => term.write(String.fromCharCode(c))  // stderr
      );

      // run your C++ main()
      instance.callMain([]);
    })();

    // capture keyboard input
    term.onKey(({ key, domEvent }) => {
      if (domEvent.key === "Enter") {
        inputBuffer.push("\n");
        term.write("\r\n");
      } else if (domEvent.key === "Backspace") {
        inputBuffer.push("\b");
        term.write("\b \b");
      } else if (domEvent.key.length === 1) {
        inputBuffer.push(key);
        term.write(key);
      }
    });

    return () => {
      term.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: 420, background: "black" }}
      className="rounded"
    />
  );
}