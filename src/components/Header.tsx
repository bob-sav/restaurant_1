"use client";
import { useEffect, useRef } from "react";

import { useSectionObserver } from "@/lib/useSectionObserver";

import LogoFish from "@/icons/logo_fish.svg";

export default function Header() {
  const sectionIds = ["restaurant", "chef", "menu", "recipes", "reserve"];
  const sections = useSectionObserver(sectionIds);

  const navRef = useRef<HTMLUListElement | null>(null);

  // Pick the most visible section
  const mostVisible = sections.reduce((a, b) => (b.ratio > a.ratio ? b : a), {
    id: "",
    ratio: 0,
  });

  useEffect(() => {
    if (window.innerWidth > 768) return;

    const nav = navRef.current;
    const link = document.querySelector(
      `.nav-link[href="#${mostVisible.id}"]`
    ) as HTMLElement | null;

    const activeEl = link?.closest(".nav-item") as HTMLElement | null;

    if (nav && activeEl instanceof HTMLElement) {
      const navRect = nav.getBoundingClientRect();
      const itemRect = activeEl.getBoundingClientRect();

      const offset = itemRect.left - navRect.left + nav.scrollLeft;

      nav.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
  }, [mostVisible.id]);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <LogoFish className="logo-icon" />
          <div className="header-title">
            <h2>FISH</h2>
            <p>Restaurant</p>
          </div>
        </div>

        <div className="header-menu">
          <ul ref={navRef} className="nav-list">
            {sectionIds.map((id) => (
              <li key={id} className="nav-item">
                <a
                  href={`#${id}`}
                  className={`nav-link ${
                    mostVisible.id === id ? "active" : ""
                  }`}
                >
                  <span className="nav-background" aria-hidden="true"></span>
                  <span className="nav-click-overlay" aria-hidden="true"></span>
                  <span className="nav-text">
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
