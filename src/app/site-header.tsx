"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header-nav">
      <nav className="site-nav-shell" aria-label="Primary navigation">
        <Link href="/" aria-label="ProFound Home" className="hero-wordmark">
          <Image
            alt="ProFound"
            className="brand-logo brand-logo--header"
            height={30}
            priority
            src="/figma/profound-logo-dark.svg"
            width={120}
          />
        </Link>
        <div className="hero-nav-links">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
          <Link
            href="/studio"
            aria-current={pathname === "/studio" ? "page" : undefined}
          >
            Studio
          </Link>
          <Link
            href="/portfolio"
            aria-current={pathname === "/portfolio" ? "page" : undefined}
          >
            Legacy Portfolio
          </Link>
          <Link
            href="/team"
            aria-current={pathname === "/team" ? "page" : undefined}
          >
            Team
          </Link>
        </div>
        <a className="pitch-button hero-pitch" href="mailto:hello@profound.vc">
          Pitch us
        </a>
      </nav>
    </header>
  );
}
