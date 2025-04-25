import { projects } from "@/data/Data";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
    return (
      <section className="max-w-6xl mx-auto  px-4">
        <h1 className="text-4xl font-bold mb-10 text-center">Projects</h1>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href={project.link} target="_blank" className="text-blue-600 hover:underline">
                    Live Demo
                  </Link>
                  <Link href={project.github} target="_blank" className="text-blue-600 hover:underline">
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }