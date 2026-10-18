import { Activity, ArrowUpRight, BookOpen, Briefcase, Globe, Network, Route, Sprout, Store } from "lucide-react";
import type { PortfolioProject } from "../lib/projects";

const icons = { activity: Activity, book: BookOpen, briefcase: Briefcase, globe: Globe, network: Network, route: Route, sprout: Sprout, store: Store };

export default function ProjectCollection({ projects }: { projects: PortfolioProject[] }) {
  return (
    <div className="project-collection">
      {projects.map((project, index) => {
        const Icon = icons[project.icon];
        return (
          <article className="project-entry" key={project.id} id={project.id}>
            <div className="project-entry-top" aria-hidden="true">
              <Icon size={26} strokeWidth={1.4} />
              <span className="mono">{String(index + 1).padStart(2, "0")} / PROJECT</span>
            </div>
            <p className="eyebrow">{project.category}</p>
            <h3>{project.name}</h3>
            <p className="project-entry-description">{project.description}</p>
            <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <details className="project-scope">
              <summary>Explore the scope<span aria-hidden="true">+</span></summary>
              <ul>{project.scope.map((item) => <li key={item}>{item}</li>)}</ul>
              {project.note && <p>{project.note}</p>}
            </details>
            <a className="text-link" href={project.source || `mailto:ericmhwz@gmail.com?subject=${encodeURIComponent(`Project discussion: ${project.name}`)}`}>
              {project.source ? "Explore the source" : "Discuss this project"}<ArrowUpRight size={15} />
            </a>
          </article>
        );
      })}
    </div>
  );
}
