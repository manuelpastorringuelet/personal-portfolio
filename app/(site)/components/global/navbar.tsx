import Image from "next/image";
import Link from "next/link";

import Logo from "../../icons/logo.png";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  return (
    <header className="py-6 border-b border-zinc-800 z-30 md:mb-14 mb-10">
      <div className="container max-w-6xl flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            width={30}
            height={30}
            alt="logo"
            className="dark:invert invert-0"
          />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/about"
                className="dark:hover:text-purple-400 hover:text-purple-800  duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="dark:hover:text-purple-400 hover:text-purple-600 duration-300"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
