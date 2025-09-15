// types/emscripten.d.ts
declare module "/wasm/*.js" {
  const ModuleFactory: (opts?: any) => Promise<any>;
  export default ModuleFactory;
}
