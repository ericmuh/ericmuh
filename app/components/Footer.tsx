import Link from "next/link";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
export default function Footer() {
  return (
    <footer className="footer wrap">
      <Link className="footer-brand" href="/">
        Eric MUH<span>Software. Systems. People.</span>
      </Link>
      <div>
        <a href="https://github.com/ericmuh" aria-label="Eric on GitHub">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/eric-muhwezi/" aria-label="Eric on LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href="mailto:ericmhwz@gmail.com">
          Say hello <ArrowUpRight size={16} />
        </a>
      </div>
      <p>Built with intent. Based in Uganda.</p>
    </footer>
  );
}
