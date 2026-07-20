import Image from "next/image";
import Link from "next/link";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";
import HomeHero from "@/components/HomeHero";

export default function Home() {
  const featuredProjects = (projectsData as Project[]).filter(
    (project) => project.featured
  );

  const tools = [
    { name: "Antigravity", icon: "rocket_launch", rotation: "-rotate-12", color: "text-[#9966FF]" },
    { name: "Codex", icon: "code_blocks", rotation: "-rotate-6", color: "text-[#3B82F6]" },
    { name: "Stitch", icon: "polyline", rotation: "rotate-0", color: "text-[#F24E1E]" },
    { name: "Kiro CLI", icon: "terminal", rotation: "rotate-6", color: "text-[#10B981]" },
    { name: "Gemini", icon: "auto_awesome", rotation: "rotate-12", color: "text-[#8B5CF6]" },
    { name: "Claude AI", icon: "psychology", rotation: "rotate-[18deg]", color: "text-[#F59E0B]" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-6 space-y-32">
      {/* SECTION 1: HERO */}
      <HomeHero />

      {/* SECTION 2: FEATURED PROJECTS */}
      <section className="space-y-12 scroll-mt-28" id="projects">
        <div className="flex justify-between items-end">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-primary hover:text-primary-dim font-label font-medium inline-flex items-center gap-1 group hidden sm:flex transition-colors"
          >
            View All Projects
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-outline-variant/20 flex flex-col h-full group"
            >
              <div className="w-full aspect-video overflow-hidden relative">
                <Image
                  alt={project.title}
                  src={project.hero_image}
                  fill
                  sizes="(max-w-7xl) 100vw, (max-w-5xl) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-headline font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">
                  {project.executive_summary}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech_stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs font-label rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="sm:hidden text-center mt-6">
          <Link
            href="/projects"
            className="inline-block text-primary font-label font-medium hover:underline"
          >
            View All Projects →
          </Link>
        </div>
      </section>

      {/* SECTION 3: TECH STACK & SKILLS */}
      <section className="space-y-12 bg-surface-container-lowest p-8 md:p-12 rounded-3xl shadow-sm border border-outline-variant/10">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface">
            Tech Stack &amp; Skills
          </h2>
          <p className="text-on-surface-variant text-base">
            A comprehensive toolkit spanning frontend elegance, backend robustness, and quality assurance.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2">
          {/* Category 1 */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-4">
              <span className="material-symbols-outlined text-primary text-2xl">code</span>
              <h3 className="text-lg font-headline font-semibold text-on-surface">
                Web Development
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "React.js",
                "Next.js",
                "Laravel",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-surface rounded-lg text-sm font-label text-on-surface-variant shadow-sm border border-outline-variant/10 flex items-center gap-2 hover:border-primary/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {/* Category 2 */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-4">
              <span className="material-symbols-outlined text-primary text-2xl">database</span>
              <h3 className="text-lg font-headline font-semibold text-on-surface">
                Database &amp; Tools
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {["MySQL", "Git", "GitHub", "Trello"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-surface rounded-lg text-sm font-label text-on-surface-variant shadow-sm border border-outline-variant/10 flex items-center gap-2 hover:border-primary/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TOOLS & AI */}
      <section className="space-y-12 py-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface">
            Tools &amp; AI
          </h2>
          <p className="text-on-surface-variant text-base">
            The tools I reach for when designing and building digital products.
          </p>
        </div>
        <div className="relative flex justify-center items-center pt-24 pb-12 overflow-visible">
          <div className="flex -space-x-4 md:-space-x-8 items-end">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className={`relative w-20 h-20 md:w-32 md:h-32 bg-white rounded-2xl shadow-lg border border-outline-variant/20 flex items-center justify-center ${tool.rotation} hover:-translate-y-4 hover:z-50 transition-all duration-300 group cursor-default`}
              >
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                  <div className="bg-on-surface text-white text-xs font-bold px-3 py-1.5 rounded-lg relative whitespace-nowrap shadow-xl">
                    {tool.name}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-on-surface rotate-45"></div>
                  </div>
                </div>
                <span className={`material-symbols-outlined text-4xl ${tool.color}`}>
                  {tool.icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
