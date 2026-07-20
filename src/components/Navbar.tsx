"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 h-14 border-outline-variant/30 shadow-md"
          : "bg-white/70 h-16 border-white/10 shadow-sm"
      }`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full h-full">
        <Link
          href="/"
          className="text-xl font-headline font-black text-on-surface tracking-tighter hover:scale-95 transition-transform duration-200"
        >
          Rendi Widya Anggita
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`font-label text-sm transition-all ${
              pathname === "/"
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-primary px-3 py-1 rounded-md hover:bg-surface-container-low"
            }`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`font-label text-sm transition-all ${
              pathname.startsWith("/projects")
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-primary px-3 py-1 rounded-md hover:bg-surface-container-low"
            }`}
          >
            Projects
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-low transition-all duration-300">
            <span className="material-symbols-outlined">dark_mode</span>
          </button>
          <button className="md:hidden p-2 text-on-surface">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
