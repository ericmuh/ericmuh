export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white px-6">
      {/* Top accent bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500" />

      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Avatar / Initials */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-3xl font-bold shadow-2xl">
          EM
        </div>

        {/* Name & title */}
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Eric Muhwezi
          </h1>
          <p className="text-lg text-sky-400 font-medium">
            Full Stack Developer
          </p>
          <p className="text-sm text-slate-400">Uganda 🇺🇬</p>
        </div>

        {/* Coming soon badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-5 py-2 text-sm font-semibold text-sky-300 shadow">
          🚧 Something awesome is coming soon
        </div>

        {/* Description */}
        <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
          I&apos;m building my personal portfolio — a place to share projects,
          case studies, and thoughts on software development. Check back soon!
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "Python",
            "Django",
            "React",
            "Next.js",
            "React Native",
            "TypeScript",
            "PostgreSQL",
            "Docker",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-700 px-3 py-1 text-xs font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 pt-2">
          <a
            href="https://www.linkedin.com/in/eric-muhwezi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-sky-500 hover:text-sky-400"
          >
            {/* LinkedIn icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.985V9h3.102v1.561h.046c.432-.82 1.487-1.684 3.059-1.684 3.27 0 3.873 2.151 3.873 4.948v6.627zM5.337 7.433a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zM6.965 20.452H3.706V9h3.259v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>

          <a
            href="https://github.com/ericmuh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-sky-500 hover:text-sky-400"
          >
            {/* GitHub icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>

          <a
            href="mailto:muhwezi1000@gmail.com"
            className="flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-sky-500 hover:text-sky-400"
          >
            {/* Email icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            Email
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-4 text-xs text-slate-500">
        © {new Date().getFullYear()} Eric Muhwezi — All rights reserved
      </footer>
    </main>
  );
}
