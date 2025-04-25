import { skills } from "@/data/Data";

  export default function SkillsPage() {
    return (
      <section className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-center">Skills</h1>
  
        <div className="space-y-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-2xl font-semibold capitalize mb-4">{category}:</h2>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  