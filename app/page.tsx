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
import ProjectCollection from "./components/ProjectCollection";
import { selectedProjects, webProjects } from "./lib/projects";

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
            requirements into software that works in the real world. I’m open to new roles and
            exploring opportunities to build useful things with thoughtful teams.
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
          <div className="portrait-system">
            <div className="hero-portrait">
              <Image src="/images/eric-future-corrected.webp" alt="Futuristic illustrated headshot of Eric Muhwezi" width={800} height={800} priority />
            </div>
            <div className="orbit-ring orbit-one" aria-hidden="true"><i /></div>
            <div className="orbit-ring orbit-two" aria-hidden="true"><i /></div>
            <svg className="orbit-connections" viewBox="0 0 560 560" fill="none" aria-hidden="true">
              <path d="M75 170H140L195 225M485 210H425L380 255M100 400H155L200 350M455 420H410L355 365" />
              <circle cx="195" cy="225" r="3" /><circle cx="380" cy="255" r="3" /><circle cx="200" cy="350" r="3" /><circle cx="355" cy="365" r="3" />
            </svg>
            <span className="system-tag tag-interface">01 / INTERFACE</span>
            <span className="system-tag tag-systems">02 / SYSTEMS</span>
            <span className="system-tag tag-people">03 / PEOPLE</span>
            <span className="system-tag tag-build">DESIGN · BUILD · EXPLORE</span>
          </div>
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
        <article className="featured-project operations-project">
          <div className="project-visual operations-visual">
            <Image src="/images/operations-manager.svg" alt="Operations Manager architecture: work signals connect organizational memory, specialist agents, and a risk dashboard" width={800} height={560} />
            <span className="visual-caption">ARCHITECTURE PREVIEW / IN DEVELOPMENT</span>
          </div>
          <div className="project-copy">
            <p className="eyebrow">AI SYSTEMS · ORGANIZATIONAL OPERATIONS</p>
            <h3>Operations<br />Manager</h3>
            <p>An AI operations platform designed to connect scattered work activity with organizational context. Memory synthesis, semantic recall, and a specialist risk agent help turn that context into an actionable risk dashboard.</p>
            <p className="project-status">In development · expanding integrations and workflow automation.</p>
            <div className="tags">
              {["Next.js", "TypeScript", "PostgreSQL / pgvector", "Event-driven AI"].map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <a className="text-link" href="mailto:ericmhwz@gmail.com?subject=Operations%20Manager%20project">Discuss the project <ArrowUpRight size={16} /></a>
          </div>
        </article>
        <div className="collection-heading">
          <p className="eyebrow">APPLICATIONS & CONNECTED SYSTEMS</p>
          <p>Software for the work behind the interface.</p>
        </div>
        <ProjectCollection projects={selectedProjects} />
        <div className="collection-heading">
          <p className="eyebrow">WEB EXPERIENCES</p>
          <p>Clear, purposeful homes for professional services.</p>
        </div>
        <ProjectCollection projects={webProjects} />
        <a className="portfolio-source-link" href="https://github.com/ericmuh/ericmuh">
          <Braces size={23} />
          <span><strong>This digital workspace</strong><span>Next.js · TypeScript · Markdown publishing · Hostinger delivery</span></span>
          <ArrowUpRight size={19} />
        </a>
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
                I work where software delivery meets infrastructure and people. I build
                applications, work with Linux and cloud environments, and help technical teams
                make practical delivery decisions.
              </p>
              <p>
                My approach is practical: understand the problem, make the tradeoffs explicit,
                and build something people can maintain. I enjoy connecting hands-on engineering
                with the bigger picture—how a system is delivered, operated, and used.
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
          <div className="current-role" id="currently">
            <div className="portrait-panel">
              <Image src="/images/eric-profile-wide.webp" alt="Eric Muhwezi speaking, facing toward his profile introduction" width={1000} height={926} />
              <span className="portrait-caption mono">ERIC MUH / HUMAN BEHIND THE SYSTEMS</span>
            </div>
            <div className="current-role-copy">
              <p className="eyebrow"><span className="status-dot" /> OPEN TO ROLES & NEW POSSIBILITIES</p>
              <h3>Eric Muhwezi</h3>
              <p>Software engineer, systems thinker, and a curious problem solver. I build across the stack, care about reliable infrastructure, and enjoy helping people turn ideas into working systems.</p>
              <ul>
                <li>Build useful applications with clear, maintainable architecture.</li>
                <li>Connect software with reliable systems and practical delivery.</li>
                <li>Learn, explore, and collaborate with people who care about their craft.</li>
              </ul>
              <p>Currently, I also support industry-based software projects as an Apprenticeship Officer at Refactory.</p>
              <a className="text-link" href="mailto:ericmhwz@gmail.com">Explore an opportunity <ArrowUpRight size={16} /></a>
            </div>
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
