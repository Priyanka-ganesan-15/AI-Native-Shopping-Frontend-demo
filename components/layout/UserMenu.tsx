"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import React from "react";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const menuId = "user-menu-dropdown";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!rootRef.current) {
        return;
      }

      if (!rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="user-menu" ref={rootRef}>
      <button
        type="button"
        className="user-menu__trigger"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label="Open user menu"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        PG
      </button>

      {isOpen ? (
        <div id={menuId} className="user-menu__dropdown" role="menu" aria-label="User menu">
          <Link href="/profile" className="user-menu__item" role="menuitem" onClick={() => setIsOpen(false)}>
            My Profile
          </Link>
          <Link href="/style-dna" className="user-menu__item" role="menuitem" onClick={() => setIsOpen(false)}>
            Style DNA
          </Link>
          <Link href="/closet" className="user-menu__item" role="menuitem" onClick={() => setIsOpen(false)}>
            Closet
          </Link>
          <div className="user-menu__divider" />
          <button type="button" className="user-menu__item" role="menuitem">
            Logout
          </button>
        </div>
      ) : null}
    </div>
  );
}
