// app/contact/page.tsx
import Link from 'next/link';

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
        I&apos;m currently open to new freelance opportunities and collaborations. Let&apos;s connect!
      </p>
      <div className="flex flex-col gap-4 text-lg">
        <Link href="mailto:mohammadrafiamin.dev@gmail.com" className="hover:underline text-blue-600">
          📧 mohammadrafiamin.dev@gmail.com
        </Link>
        <Link href="https://www.linkedin.com/in/mohammad-rafi-amin-63b4319b/" target="_blank" className="hover:underline text-blue-600">
          💼 LinkedIn
        </Link>
        <Link href="https://github.com/mrkamin" target="_blank" className="hover:underline text-blue-600">
          🐙 GitHub
        </Link>
        <Link href="https://twitter.com/Mohamma63974237" target="_blank" className="hover:underline text-blue-600">
          🐦 Twitter
        </Link>
      </div>
    </section>
  );
}
