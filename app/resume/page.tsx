// app/resume/page.tsx
import Link from 'next/link';

export default function ResumePage() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">My Resume</h1>
      <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
        Download my latest resume to learn more about my experience and skills.
      </p>
      <Link
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        📄 Download Resume
      </Link>
    </section>
  );
}
