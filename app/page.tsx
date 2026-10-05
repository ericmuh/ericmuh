"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

type ProjectCategory = "all" | "web" | "backend" | "mobile";

type PortfolioProject = {
  title: string;
  category: Exclude<ProjectCategory, "all">;
  description: string;
  tech: string[];
  href: string;
};

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "profile", label: "Profile" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

const skills = {
  Frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Redux", "Next.js"],
  Backend: ["Python", "Django", "Django REST Framework"],
  Mobile: ["React Native"],
  Databases: ["PostgreSQL", "SQLite"],
  "DevOps & Tools": ["Docker", "Git", "GitHub", "CI/CD pipelines"],
} as const;

const projects: PortfolioProject[] = [
  {
    title: "Web App Case Study (Editable Placeholder)",
    category: "web",
    description:
      "Replace this card with a real web project, including your role, the problem solved, and measurable outcomes.",
    tech: ["Next.js", "React", "TypeScript"],
    href: "https://github.com/ericmuh",
  },
  {
    title: "Backend API Project (Editable Placeholder)",
    category: "backend",
    description:
      "Use this slot for a production API project with architecture notes, endpoints, and reliability/security highlights.",
    tech: ["Python", "Django", "PostgreSQL"],
    href: "https://github.com/ericmuh",
  },
  {
    title: "Mobile Experience (Editable Placeholder)",
    category: "mobile",
    description:
      "Showcase a React Native app here, including screenshots, target users, and links to source/demo builds.",
    tech: ["React Native", "JavaScript", "SQLite"],
    href: "https://github.com/ericmuh",
  },
];

const projectCategories: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Backend", value: "backend" },
  { label: "Mobile", value: "mobile" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<(typeof navItems)[number]["id"]>("home");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [revealedSections, setRevealedSections] = useState<string[]>([]);
  const [selectedProjectCategory, setSelectedProjectCategory] = useState<ProjectCategory>("all");

  const filteredProjects = useMemo(
    () =>
      selectedProjectCategory === "all"
        ? projects
        : projects.filter((project) => project.category === selectedProjectCategory),
    [selectedProjectCategory],
  );

  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = window.localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : systemPrefersDark ? "dark" : "light";

    root.classList.toggle("theme-dark", nextTheme === "dark");
    setTheme(nextTheme);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));

    if (!sections.length) {
      return;
    }

    if (reduceMotion) {
      setRevealedSections(sections.map((section) => section.id));
      return;
    }

    const activeObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id as (typeof navItems)[number]["id"]);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.25, 0.5, 0.75] },
    );

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-reveal");
            if (id) {
              setRevealedSections((previous) => (previous.includes(id) ? previous : [...previous, id]));
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    sections.forEach((section) => {
      activeObserver.observe(section);
      revealObserver.observe(section);
    });

    return () => {
      activeObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const handleThemeToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("theme-dark", nextTheme === "dark");
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
        <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/85 backdrop-blur-md">
          <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6" aria-label="Primary">
            <a href="#home" className="text-lg font-semibold tracking-tight text-[var(--text)]">
              Eric Muhwezi
            </a>

            <div className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] ${
                    activeSection === item.id ? "bg-[var(--chip-active)] text-[var(--chip-active-text)]" : "text-[var(--text-muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={handleThemeToggle}
                className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={handleThemeToggle}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>

          {mobileMenuOpen && (
            <div id="mobile-menu" className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-4 md:hidden">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`block rounded-lg px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] ${
                        activeSection === item.id ? "bg-[var(--chip-active)] text-[var(--chip-active-text)]" : "text-[var(--text-muted)]"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>

        <main id="main-content" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
          <section
            id="home"
            data-reveal="home"
            className={`portfolio-section ${revealedSections.includes("home") ? "is-visible" : ""}`}
          >
            <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)] sm:p-12">
              <div className="absolute -top-20 right-[-5rem] h-48 w-48 rounded-full bg-gradient-to-br from-cyan-400/40 to-indigo-500/30 blur-3xl" aria-hidden />
              <p className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--chip)] px-4 py-1 text-sm font-medium text-[var(--text-muted)]">
                Full Stack Software Developer
              </p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">Building practical digital products with modern web and mobile technologies.</h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--text-muted)]">
                I&apos;m Eric Muhwezi, a full stack software developer based in Uganda. I build clean, scalable products with thoughtful user experiences and robust backend systems.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary-text)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                >
                  View Projects <ArrowRight size={16} />
                </a>
                <a
                  href="mailto:muhwezi1000@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--chip)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:bg-[var(--chip-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                >
                  Get in Touch <Mail size={16} />
                </a>
                <a
                  href="/eric-muhwezi-contact.vcf"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--chip)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:bg-[var(--chip-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                  download
                >
                  Download Contact Card <Download size={16} />
                </a>
              </div>
            </div>
          </section>

          <section
            id="about"
            data-reveal="about"
            className={`portfolio-section mt-10 ${revealedSections.includes("about") ? "is-visible" : ""}`}
          >
            <h2 className="section-title">About</h2>
            <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] sm:p-8">
              <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                I focus on creating end-to-end software experiences across frontend, backend, and mobile. My approach prioritizes clean architecture, maintainability, and user-centered design. I continuously learn and refine my craft to deliver reliable, high-impact solutions.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--chip)] px-3 py-1">
                  <MapPin size={15} /> Uganda
                </span>
                <a
                  href="mailto:muhwezi1000@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--chip)] px-3 py-1 transition-colors hover:bg-[var(--chip-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                >
                  <Mail size={15} /> muhwezi1000@gmail.com
                </a>
              </div>
            </div>
          </section>

          <section
            id="skills"
            data-reveal="skills"
            className={`portfolio-section mt-10 ${revealedSections.includes("skills") ? "is-visible" : ""}`}
          >
            <h2 className="section-title">Skills & Tech Stack</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(skills).map(([category, stack]) => (
                <article key={category} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">{category}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {stack.map((item) => (
                      <li key={item}>
                        <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--chip)] px-3 py-1 text-xs font-medium text-[var(--text)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section
            id="profile"
            data-reveal="profile"
            className={`portfolio-section mt-10 ${revealedSections.includes("profile") ? "is-visible" : ""}`}
          >
            <h2 className="section-title">Professional Profile</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
                <h3 className="text-lg font-semibold">Core Focus</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  Full stack development across modern web and mobile platforms with emphasis on scalable architecture, maintainable code, and real-world product impact.
                </p>
              </article>
              <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
                <h3 className="text-lg font-semibold">Location & Availability</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">Based in Uganda, open to collaboration and remote opportunities.</p>
              </article>
            </div>
          </section>

          <section
            id="projects"
            data-reveal="projects"
            className={`portfolio-section mt-10 ${revealedSections.includes("projects") ? "is-visible" : ""}`}
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="section-title">Selected Projects</h2>
                <p className="mt-2 text-sm text-[var(--text-muted)]">Project cards below are editable placeholders until real project case studies are added.</p>
              </div>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
                {projectCategories.map((category) => {
                  const isActive = selectedProjectCategory === category.value;
                  return (
                    <button
                      key={category.value}
                      type="button"
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] ${
                        isActive ? "bg-[var(--chip-active)] text-[var(--chip-active-text)]" : "bg-[var(--chip)] text-[var(--text-muted)] hover:text-[var(--text)]"
                      }`}
                      aria-selected={isActive}
                      role="tab"
                      onClick={() => setSelectedProjectCategory(category.value)}
                    >
                      {category.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <article key={project.title} className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] transition-transform hover:-translate-y-1">
                  <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li key={tech}>
                        <span className="inline-flex rounded-full bg-[var(--chip)] px-3 py-1 text-xs font-medium text-[var(--text)]">{tech}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--link)] underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                  >
                    View on GitHub <ExternalLink size={14} />
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section
            id="contact"
            data-reveal="contact"
            className={`portfolio-section mt-10 ${revealedSections.includes("contact") ? "is-visible" : ""}`}
          >
            <h2 className="section-title">Contact</h2>
            <div className="mt-5 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <p className="max-w-3xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                Interested in collaborating on a product, platform, or engineering challenge? Reach out by email or connect on LinkedIn and GitHub.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:muhwezi1000@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-[var(--primary-text)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                >
                  <Mail size={16} /> Email Eric
                </a>
                <a
                  href="https://www.linkedin.com/in/eric-muhwezi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--chip)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:bg-[var(--chip-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href="https://github.com/ericmuh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--chip)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:bg-[var(--chip-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
