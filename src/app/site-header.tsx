"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./site-header.module.css";

const pages = [
  { label: "Home", href: "/" },
  { label: "Studio", href: "/studio" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Team", href: "/team" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 8);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <header className={`${styles.header}${scrolled ? ` ${styles.scrolled}` : ""}`} onKeyDown={event => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuRef.current?.focus();
      }
    }}>
      <div className={styles.shell}>
        <Link href="/" aria-label="Profound Ventures, home" onClick={() => setMenuOpen(false)}>
          <Image className={styles.logo} src="/figma/profound-reference-logo.svg" alt="" width={114} height={26} priority />
        </Link>
        <nav id="site-navigation" className={`${styles.nav}${menuOpen ? ` ${styles.open}` : ""}`} aria-label="Main">
          {pages.map(page => (
            <Link key={page.href} href={page.href} aria-current={pathname === page.href ? "page" : undefined} onClick={() => setMenuOpen(false)}>{page.label}</Link>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <button ref={menuRef} className={styles.menu} type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          Menu <i aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
