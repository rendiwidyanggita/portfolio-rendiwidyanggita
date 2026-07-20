import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = projectsData as Project[];
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = (projectsData as Project[]).find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Rendi Widya Anggita`,
    description: project.executive_summary,
  };
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const project = (projectsData as Project[]).find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Format description text helpers for new lines / bullet points
  const renderParagraphs = (text: string) => {
    return text.split("\n\n").map((para, i) => {
      // Check if this paragraph contains bullet points
      if (para.startsWith("* ")) {
        return (
          <ul key={i} className="flex flex-col gap-3 mt-2 list-none">
            {para.split("\n").map((bullet, j) => {
              const cleanedText = bullet.replace(/^\*\s*/, "");
              const boldMatch = cleanedText.match(/^\*\*(.*?)\*\*:(.*)$/);
              
              const isProblem = project.slug === "summitwir" && text.includes("Problem");

              return (
                <li key={j} className="flex items-start gap-3 text-on-surface-variant text-base leading-relaxed">
                  <span 
                    className={`material-symbols-outlined mt-0.5 shrink-0 ${isProblem ? "text-error" : "text-primary"}`} 
                    style={{ fontSize: "20px" }}
                  >
                    {isProblem ? "close" : "check"}
                  </span>
                  <span>
                    {boldMatch ? (
                      <>
                        <strong>{boldMatch[1]}:</strong>{boldMatch[2]}
                      </>
                    ) : (
                      cleanedText
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        );
      }
      return (
        <p key={i} className="text-on-surface-variant text-base leading-loose mb-4 last:mb-0">
          {para}
        </p>
      );
    });
  };

  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12 lg:gap-16">
      {/* Back Link & Header */}
      <section className="flex flex-col gap-8 w-full mt-4">
        <Link
          className="inline-flex items-center gap-2 text-label-md font-label text-on-surface-variant hover:text-primary transition-colors w-fit group"
          href="/projects"
        >
          <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          Back to projects
        </Link>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between w-full">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h1 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-on-surface tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed">
              {project.executive_summary}
            </p>
          </div>
          {project.repo_url && project.repo_url !== "" && (
            <a
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-full font-label font-semibold text-label-lg hover:shadow-md hover:bg-surface-tint transition-all active:scale-95 whitespace-nowrap mt-4 lg:mt-0 shadow-sm"
              href={project.repo_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Repository
              <span className="material-symbols-outlined" data-weight="fill">
                open_in_new
              </span>
            </a>
          )}
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full aspect-video rounded-xl lg:rounded-[2rem] overflow-hidden shadow-md border border-outline-variant/20 bg-surface-container relative group">
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
        <Image
          alt={`${project.title} Hero Project Preview`}
          src={project.hero_image}
          fill
          priority
          sizes="(max-w-7xl) 100vw, 90vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </section>

      {/* Project Details Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 w-full mt-4">
        {/* About Project (Span 8) */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl lg:rounded-2xl p-8 lg:p-10 shadow-sm border border-outline-variant/10 flex flex-col gap-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 border-b border-outline-variant/10 pb-4">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
              <span className="material-symbols-outlined" data-weight="fill">
                info
              </span>
            </div>
            <h2 className="font-headline font-bold text-2xl text-on-surface">About Project</h2>
          </div>
          <div className="prose prose-slate max-w-none text-on-surface-variant font-body">
            {renderParagraphs(project.about)}
          </div>
        </div>

        {/* Tech Stack (Span 4) */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-xl lg:rounded-2xl p-8 shadow-sm border border-outline-variant/10 flex flex-col gap-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 border-b border-outline-variant/10 pb-4">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
              <span className="material-symbols-outlined" data-weight="fill">
                code_blocks
              </span>
            </div>
            <h2 className="font-headline font-bold text-2xl text-on-surface">Tech Stack</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.tech_stack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-surface-container rounded-lg font-label text-label-md text-on-surface-variant border border-outline-variant/20 shadow-sm flex items-center gap-1.5"
              >
                {tech === "Midtrans" && <span className="w-2 h-2 rounded-full bg-primary"></span>}
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Problem Statement (Span 6) */}
        <div className="md:col-span-6 bg-surface-container-lowest rounded-xl lg:rounded-2xl p-8 lg:p-10 shadow-sm border border-outline-variant/10 flex flex-col gap-6 relative overflow-hidden group hover:shadow-md transition-shadow">
          {/* Decorative element */}
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-error-container/20 rounded-full blur-2xl group-hover:bg-error-container/30 transition-colors"></div>
          <div className="flex items-center gap-3 border-b border-outline-variant/10 pb-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center text-on-error-container">
              <span className="material-symbols-outlined" data-weight="fill">
                warning
              </span>
            </div>
            <h2 className="font-headline font-bold text-2xl text-on-surface">Problem Statement</h2>
          </div>
          <div className="flex flex-col gap-4 relative z-10">
            {renderParagraphs(project.problem_statement)}
          </div>
        </div>

        {/* Solution & Implementation (Span 6) */}
        <div className="md:col-span-6 bg-surface-container-lowest rounded-xl lg:rounded-2xl p-8 lg:p-10 shadow-sm border border-outline-variant/10 flex flex-col gap-6 relative overflow-hidden group hover:shadow-md transition-shadow">
          {/* Decorative element */}
          <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-primary-container/30 rounded-full blur-2xl group-hover:bg-primary-container/40 transition-colors"></div>
          <div className="flex items-center gap-3 border-b border-outline-variant/10 pb-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
              <span className="material-symbols-outlined" data-weight="fill">
                lightbulb
              </span>
            </div>
            <h2 className="font-headline font-bold text-2xl text-on-surface">
              Solution &amp; Implementation
            </h2>
          </div>
          <div className="flex flex-col gap-4 relative z-10">
            {project.slug === "summitwir" && (
              <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/20 flex items-center gap-4 mt-2">
                <div className="w-12 h-12 shrink-0 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container font-headline font-bold text-xl">
                  40%
                </div>
                <p className="text-sm font-medium text-on-surface">
                  Improvement in overall operational efficiency measured post-deployment.
                </p>
              </div>
            )}
            {renderParagraphs(project.solution)}
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="flex flex-col gap-8 w-full mt-8">
          <div className="flex flex-col gap-2">
            <h2 className="font-headline font-bold text-3xl text-on-surface">Project Gallery</h2>
            <p className="font-body text-on-surface-variant">Interface design and application views.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {project.gallery.map((imgSrc, index) => (
              <div
                key={index}
                className="group relative aspect-video rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 bg-surface-container"
              >
                <Image
                  alt={`${project.title} Gallery Item ${index + 1}`}
                  src={imgSrc}
                  fill
                  sizes="(max-w-7xl) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-inverse-on-surface font-label font-medium">
                    {index === 0
                      ? "User Interface view"
                      : index === 1
                      ? "Functional Dashboard dashboard"
                      : `View ${index + 1}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
