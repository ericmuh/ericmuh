"use client";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="wordmark" aria-label="Eric MUH home">
          e<span>m</span>
          <i>.</i>
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="navigation"
          className={open ? "navigation open" : "navigation"}
          aria-label="Main navigation"
        >
          {[
            ["/#projects", "Work"],
            ["/#about", "About"],
            ["/articles/", "Writing"]
          ].map(([href, label]) => (
            <Link onClick={() => setOpen(false)} key={href} href={href}>
              {label}
            </Link>
          ))}
          <a className="nav-contact" href="mailto:ericmhwz@gmail.com">
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}
