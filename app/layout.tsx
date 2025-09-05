// app/layout.tsx - Root layout (Bootstrap imports here)
import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

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
    <html lang="en" data-bs-theme="light">
      <body className="bg-body text-body">{children}</body>
    </html>
  );
}
