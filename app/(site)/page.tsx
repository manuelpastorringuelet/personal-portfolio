import { getProfile } from "@/sanity/sanity.query";

import type { ProfileType } from "@/types";

import Job from "./components/job";
import Typewriter from "@/components/type-writer";
import Image from "next/image";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="container max-w-6xl">
      <section className="flex xl:flex-row flex-col  items-start justify-between gap-x-2">
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="max-w-4xl">
              <h1 className="text-2xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight self-start">
                <Typewriter />
              </h1>
              <p className="text-base text-zinc-400 leading-relaxed">
                {data.shortBio}
              </p>
              <ul className="flex items-center gap-x-6 mt-10">
                {Object.entries(data.socialLinks)
                  .sort()
                  .map(([key, value], id) => (
                    <li key={id}>
                      <a
                        href={value}
                        rel="noreferrer noopener"
                        className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
                      >
                        {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        <Image
          // className="dark:invert invert-0"
          src={"/bendy.png"}
          width={400}
          height={400}
          alt={"bendy"}
        />
      </section>
      <Job />
    </main>
  );
}
