// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-800 text-center py-6 mt-12 text-sm text-gray-600 dark:text-gray-300">
      <div className="flex flex-col items-center gap-2">
        <p>
          &copy; {currentYear} Mohammad Rafi Amin. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/mrkamin" target="_blank" className="hover:underline">
            GitHub
          </Link>
          <Link href="https://twitter.com/Mohamma63974237" target="_blank" className="hover:underline">
            Twitter
          </Link>
          <Link href="https://www.linkedin.com/in/mohammad-rafi-amin-63b4319b/" target="_blank" className="hover:underline">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
