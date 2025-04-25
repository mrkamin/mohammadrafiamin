// app/page.tsx
'use client';

import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto  px-4 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
      {/* Hero Image */}
      <div className="w-full md:w-1/2">
        <Image
          src="/hero.png" // Put your image in /public/hero.png
          alt="Mohammad Rafi Amin"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg object-cover"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Mohammad Rafi Amin</span>
        </h1>
        <h2 className="text-xl md:text-2xl mb-4 text-gray-700 dark:text-gray-300">
          <Typewriter
            words={[
              'Full-Stack Developer',
              'React & Next.js Expert',
              'Freelancer',
              'Mentor',
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
          I build modern, scalable apps using React, Next.js, Node.js, and more. Focused on performance,
          accessibility, and clean UI.
        </p>
        <a
          href="/resume"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}
