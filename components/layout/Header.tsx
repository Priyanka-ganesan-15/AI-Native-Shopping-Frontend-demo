"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import UserMenu from "./UserMenu";
import React from "react";

const NAV_ITEMS = [
  { href: "/concierge", label: "Concierge" },
  { href: "/workspace", label: "Workspace" },
  { href: "/discover", label: "Discover" },
  { href: "/closet", label: "Closet" },
  { href: "/style-dna", label: "Style DNA" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__logo" aria-label="AI Native Shopping Home">
          ATELIER
        </Link>

        <nav className="site-header__nav" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "site-header__link is-active" : "site-header__link"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <UserMenu />
      </div>
    </header>
  );
}
