"use client";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="brand-lockup" aria-label="Eric MUH home">
          <Image className="brand-avatar" src="/images/eric-avatar.webp" alt="" width={44} height={44} />
          <span className="wordmark">e<span>m</span><i>.</i></span>
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
