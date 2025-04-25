// app/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Mohammad Rafi Amin | Portfolio',
  description: 'Full-stack Developer Portfolio built with Next.js',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <Navbar />
        <main className="min-h-screen px-4 md:px-12 lg:px-24 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
