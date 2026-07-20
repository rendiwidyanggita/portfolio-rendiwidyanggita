import Image from "next/image";
import Link from "next/link";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";

export const metadata = {
  title: "All Projects - Rendi Widya Anggita",
  description: "A collection of my technical work spanning fullstack development, QA testing, and system design.",
};

export default function Projects() {
  const allProjects = projectsData as Project[];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      {/* Header Section */}
      <header className="mb-16 md:mb-24 mt-8 md:mt-16 text-center md:text-left">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6 tracking-tight">
          All Projects
        </h1>
        <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
          A collection of my technical work spanning fullstack development, QA testing, and system design.
        </p>
      </header>

      {/* Project Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {allProjects.map((project) => (
          <article
            key={project.slug}
            className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col group"
          >
            <Link href={`/projects/${project.slug}`} className="block relative w-full aspect-video overflow-hidden">
              <Image
                alt={project.title}
                src={project.hero_image}
                fill
                sizes="(max-w-7xl) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <div className="p-6 md:p-8 flex-grow flex flex-col">
              <Link href={`/projects/${project.slug}`} className="inline-block">
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </Link>
              <p className="font-body text-on-surface-variant text-base mb-6 flex-grow leading-relaxed">
                {project.executive_summary}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech_stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-surface-container rounded-full font-label text-sm text-on-surface-variant"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
