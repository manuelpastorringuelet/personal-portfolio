export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-12 sm:mt-20">
      <div className="container max-w-6xl flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 py-4 text-zinc-400">
        <small className="duration-200 font-mono">
          All rights reserved &copy; {new Date().getFullYear()}
        </small>

        <small className="hover:text-white duration-200">
          <a
            href="https://github.com/manuelpastorringuelet/sanity-portfolio"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by{" "}
            <span className="text-green-400">Manuel Pastor Ringuelet</span>
          </a>
        </small>
      </div>
    </footer>
  );
}
