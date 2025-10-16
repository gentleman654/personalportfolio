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
    <html lang="en" data-bs-theme="dark">
      <body>
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}
