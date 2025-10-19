// app/layout.tsx - Root layout (Bootstrap imports here)
import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import ParticlesBackground from '@/components/ParticlesBackground';

export const metadata: Metadata = {
  title: 'Manas Gandotra - Full-stack Developer',
  description: 'I build fast, clean, recruiter-friendly web apps.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Devicon CDN for tech skill icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        {/* Prevent flash of wrong theme - runs before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const saved = localStorage.getItem('theme');
                const theme = saved || 'dark';
                document.documentElement.setAttribute('data-bs-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body>
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}
