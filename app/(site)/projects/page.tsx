import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";

export default async function Project() {
  const projects: ProjectType[] = await getProjects();

  projects.sort((a, b) => {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateB - dateA;
  });

  return (
    <main className="container max-w-6xl flex flex-col flex-grow">
      <section className="max-w-5xl">
        <h1 className="text-2xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Featured projects I&apos;ve built over the time
        </h1>
        <p className="text-base text-zinc-400 leading-relaxed mb-6">
          I&apos;ve worked on tons of little projects over the time but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </p>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="bg-slate-200 flex items-center gap-x-4 dark:bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
          >
            <Image
              src={project.logo}
              width={60}
              height={60}
              alt={project.name}
              className="bg-slate-100 dark:bg-zinc-800 rounded-md p-2"
            />
            <div>
              <h2 className="font-semibold mb-1">{project.name}</h2>
              <div className="text-sm dark:text-zinc-400">
                {project.tagline}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
