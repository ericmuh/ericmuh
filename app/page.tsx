import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Server,
  Users,
  GitBranch,
  MapPin,
  Download
} from "lucide-react";
import { getArticles, formatDate } from "./lib/articles";

export default function Home() {
  const articles = getArticles().slice(0, 3);
  return (
    <main id="main-content">
      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> SOFTWARE ENGINEER · SYSTEMS THINKER
          </p>
          <h1>
            Good software.
            <br />
            Solid systems.
            <br />
            <span>Real impact.</span>
          </h1>
          <p className="hero-description">
            I’m Eric Muhwezi. I connect engineering, infrastructure, and people to turn complex
            requirements into software that works in the real world.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              Explore my work <ArrowUpRight size={18} />
            </a>
            <Link className="text-link" href="/articles/">
              Read the field notes <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="hero-location">
            <MapPin size={14} /> Kampala, Uganda <span> / </span> Working across the stack
          </div>
        </div>
        <div className="hero-art">
          <div className="art-label">
            <span>EM / SYSTEM ARCHITECTURE</span>
            <span>01—∞</span>
          </div>
          <Image
            src="/images/system-orbit.svg"
            alt="Layered architectural wireframe with interconnected nodes"
            width="560"
            height="560"
          />
          <div className="art-bottom">
            <span>
              <i /> CONNECTING THE PIECES
            </span>
            <span>DESIGN → BUILD → OPERATE</span>
          </div>
        </div>
        <a href="#projects" className="scroll-cue">
          <ArrowDown size={14} /> SCROLL TO EXPLORE
        </a>
      </section>
      <div className="stack-strip">
        <div className="wrap">
          <span className="mono">TOOLS OF THE TRADE</span>
          {[
            "React / Next.js",
            "Python / Django",
            "Linux / Cloud",
            "PostgreSQL",
            "Docker / CI/CD"
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <section id="projects" className="section wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>Built with purpose.</h2>
          </div>
          <a className="text-link" href="https://github.com/ericmuh">
            Explore GitHub <ArrowUpRight size={16} />
          </a>
        </div>
        <article className="featured-project">
          <a
            className="project-visual"
            href="https://github.com/ericmuh/ericmuh"
            aria-label="Explore Eric MUH portfolio source"
          >
            <div className="mini-browser">
              <div className="browser-bar">
                <span>● ● ●</span>
                <span>ericmuh.com</span>
                <ArrowUpRight size={12} />
              </div>
              <div className="mini-content">
                <span className="mono">ERIC MUH / DIGITAL WORKSPACE</span>
                <strong>
                  Ideas into
                  <br />
                  <em>working systems.</em>
                </strong>
                <div className="mini-line" />
                <div className="mini-tags">
                  <span>ENGINEERING</span>
                  <span>WRITING</span>
                </div>
              </div>
              <div className="mini-orbit" />
            </div>
            <span className="visual-caption">PERSONAL PLATFORM / OPEN SOURCE</span>
          </a>
          <div className="project-copy">
            <p className="eyebrow">WEB ENGINEERING · CONTENT SYSTEMS</p>
            <h3>
              Eric MUH
              <br />
              Digital workspace
            </h3>
            <p>
              A home for my engineering work and technical writing. A repository-first publishing
              system turns Markdown into fast, readable pages—without a CMS or a running backend.
            </p>
            <div className="tags">
              {["Next.js", "TypeScript", "Markdown", "Static export"].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a className="text-link" href="https://github.com/ericmuh/ericmuh">
              Explore the source <ArrowUpRight size={16} />
            </a>
          </div>
        </article>
        <div className="work-note">
          <GitBranch size={18} />
          <p>
            Much of my work happens inside client teams and private repositories. For project
            discussions, architecture, or delivery experience,{" "}
            <a href="mailto:ericmhwz@gmail.com">let’s connect.</a>
          </p>
        </div>
      </section>
      <section className="about-section" id="about">
        <div className="section wrap">
          <div className="about-intro">
            <div>
              <p className="eyebrow">02 / ENGINEERING & BEYOND</p>
              <h2>
                The whole system.
                <br />
                <span>Not just the code.</span>
              </h2>
            </div>
            <div>
              <p>
                I work where software delivery meets infrastructure and people. My background spans
                full stack engineering, Linux systems administration, technology consulting, and
                technical education.
              </p>
              <p>
                At Refactory, I coordinate industry-based software projects—from requirements and
                architecture through testing, deployment, and handover. My approach is practical:
                understand the problem, make the tradeoffs explicit, and build something people can
                maintain.
              </p>
              <a className="text-link" href="/eric-muhwezi-contact.vcf" download>
                Save my contact <Download size={16} />
              </a>
            </div>
          </div>
          <div className="capabilities">
            {[
              {
                icon: Braces,
                title: "Software engineering",
                text: "Web and mobile applications, APIs, databases, and the interfaces that bring them together.",
                stack: "REACT · TYPESCRIPT · PYTHON · DJANGO"
              },
              {
                icon: Server,
                title: "Systems & infrastructure",
                text: "Linux environments, cloud hosting, deployments, backups, and production troubleshooting.",
                stack: "LINUX · NGINX · DOCKER · CI/CD"
              },
              {
                icon: Users,
                title: "Technical leadership",
                text: "Requirements, architecture reviews, stakeholder coordination, and hands-on developer mentorship.",
                stack: "DELIVERY · DOCUMENTATION · EDUCATION"
              }
            ].map(({ icon: Icon, title, text, stack }) => (
              <article key={title}>
                <Icon size={24} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="mono">{stack}</span>
              </article>
            ))}
          </div>
          <div className="experience">
            <p className="eyebrow">EXPERIENCE / CONTEXT BEHIND THE CRAFT</p>
            {[
              {
                date: "2025 — Present",
                role: "Apprenticeship Officer",
                org: "Refactory",
                text: "Technical coordination, architecture reviews, deployment readiness, and stakeholder communication across industry-based software projects."
              },
              {
                date: "Consulting",
                role: "Technology leadership & development",
                org: "Agatech",
                text: "Technical discovery, application engineering, cloud environments, production releases, and ongoing systems support."
              },
              {
                date: "2019 — 2024",
                role: "Full Stack Engineer & Systems Consultant",
                org: "Smarthost & Management Systems",
                text: "Web and mobile applications, Linux hosting, DNS, TLS, backups, and operational support."
              },
              {
                date: "Technical education",
                role: "Python facilitation & curriculum development",
                org: "Tunga Impact Academy",
                text: "Practical Python curricula, project-based learning, mentorship, and structured technical feedback."
              }
            ].map((item) => (
              <div className="experience-row" key={item.org}>
                <span className="mono">{item.date}</span>
                <div>
                  <h3>{item.role}</h3>
                  <span className="experience-org">{item.org}</span>
                  <p>{item.text}</p>
                </div>
                <ArrowUpRight size={18} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap" id="writing">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / FIELD NOTES</p>
            <h2>Thinking out loud.</h2>
          </div>
          <Link className="text-link" href="/articles/">
            All writing <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="article-grid">
          {articles.map((article) => (
            <Link className="article-card" href={`/articles/${article.slug}/`} key={article.slug}>
              <div className="article-image">
                <Image
                  src={article.cover}
                  alt={article.coverAlt}
                  width="800"
                  height="450"
                  loading="lazy"
                />
              </div>
              <div className="article-meta">
                <span>{article.tags[0]}</span>
                <span>{article.minutes} min read</span>
              </div>
              <h3>
                {article.title}
                <ArrowUpRight size={19} />
              </h3>
              <p>{article.description}</p>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </Link>
          ))}
        </div>
      </section>
      <section className="contact wrap" id="contact">
        <p className="eyebrow">04 / NEXT CONVERSATION</p>
        <h2>
          Have a complex problem?
          <br />
          <span>Let’s make it work.</span>
        </h2>
        <a href="mailto:ericmhwz@gmail.com" className="contact-email">
          ericmhwz@gmail.com <ArrowUpRight />
        </a>
        <p>Software engineering, systems consulting, and technical collaboration.</p>
      </section>
    </main>
  );
}
