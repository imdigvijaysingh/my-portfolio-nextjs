"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import moonIcon from "@/public/assets/moon_icon.webp";
import sunIcon from "@/public/assets/sun_icon.webp";
import menuBlack from "@/public/assets/menu-black.webp";
import menuWhite from "@/public/assets/menu-white.webp";
import closeBlack from "@/public/assets/close-black.webp";
import closeWhite from "@/public/assets/close-white.webp";

const links = [
  { href: "/#top", label: "Home" },
  { href: "/#about", label: "About me" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/hackathon", label: "IIT Hyderabad" },
  { href: "/#contact", label: "Contact me" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    root.classList.toggle("dark");
    const nowDark = root.classList.contains("dark");
    setIsDark(nowDark);
    localStorage.theme = nowDark ? "dark" : "light";
  }

  const isSubpage =
    pathname?.startsWith("/projects") ||
    pathname === "/experience" ||
    pathname === "/hackathon" ||
    pathname === "/iit-hyderabad";

  return (
    <nav
      id="navbar"
      className={`w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition ${
        scrolled || isSubpage
          ? "bg-white/80 bg-opacity-80 backdrop-blur-lg shadow-sm dark:bg-darkTheme/90 dark:shadow-white/10"
          : ""
      }`}
    >
      <ul
        className="hidden md:flex items-center gap-1 lg:gap-2 rounded-full px-3 py-1.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border border-gray-100 dark:border-white/10 text-sm font-medium transition absolute left-1/2 -translate-x-1/2 z-10"
      >
        {links.map((link) => {
          const isProjectsActive = link.href === "/projects" && pathname?.startsWith("/projects");
          const isExpActive = link.href === "/experience" && pathname === "/experience";
          const isHackathonActive =
            (link.href === "/hackathon" || link.href === "/iit-hyderabad") &&
            (pathname === "/hackathon" || pathname === "/iit-hyderabad");
          const isHomeActive = link.href === "/#top" && pathname === "/" && !scrolled;
          const isActive = isProjectsActive || isExpActive || isHackathonActive || isHomeActive;

          return (
            <li key={link.href}>
              <Link
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#ede9fe] dark:bg-purple-900/50 text-[#7c3aed] dark:text-purple-300 font-semibold"
                    : "text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-4 ml-auto z-10">
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Image
            src={moonIcon}
            alt=""
            className="w-5 h-auto dark:hidden"
          />
          <Image
            src={sunIcon}
            alt=""
            className="w-5 h-auto hidden dark:block"
          />
        </button>

        <button
          className="block md:hidden ml-3"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Image
            src={menuBlack}
            alt=""
            className="w-6 h-auto dark:hidden"
          />
          <Image
            src={menuWhite}
            alt=""
            className="w-6 h-auto hidden dark:block"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <ul
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 font-Ovo dark:bg-darkHover dark:text-white"
        style={{ right: 0, transform: menuOpen ? "translateX(0)" : "translateX(16rem)" }}
      >
        <button
          className="absolute right-6 top-6"
          onClick={() => setMenuOpen(false)}
          aria-label="Close Menu"
        >
          <Image
            src={closeBlack}
            alt=""
            className="w-5 h-auto cursor-pointer dark:hidden"
          />
          <Image
            src={closeWhite}
            alt=""
            className="w-5 h-auto cursor-pointer hidden dark:block"
          />
        </button>

        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
