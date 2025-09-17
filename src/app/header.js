"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // tambahkan import ini

export default function Header() {
  const pathname = usePathname(); // dapatkan path saat ini

  return (
    <header className="w-full px-8 py-4 bg-transparent backdrop-blur border-b border-white/10 shadow-lg flex items-center justify-between fixed top-0 left-0 z-50">
      {/* Logo & Brand */}
      <div className="flex items-center gap-3">
        {/* SVG Logo */}
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#7c3aed]">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect
              x="4"
              y="8"
              width="20"
              height="12"
              rx="6"
              stroke="#fff"
              strokeWidth="2"
            />
            <circle cx="10" cy="14" r="1.5" fill="#fff" />
            <circle cx="18" cy="14" r="1.5" fill="#fff" />
          </svg>
        </span>
        <span className="text-white text-2xl font-bold tracking-tight">
          Cansixtpyy AI
        </span>
      </div>
      {/* Navigation */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex gap-6 items-center text-white text-base font-medium">
          <li>
            <Link
              href="/home"
              className={`px-5 py-2 rounded-full font-semibold ${
                pathname === "/home"
                  ? "bg-white/10 border border-white/20 shadow text-white"
                  : "bg-transparent text-white transition-all duration-200 hover:border hover:border-white/30 hover:bg-white/20 hover:shadow"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-full font-semibold ${
                pathname === "/about"
                  ? "bg-white/10 border border-white/20 shadow text-white"
                  : "bg-transparent text-white transition-all duration-200 hover:border hover:border-white/30 hover:bg-white/20 hover:shadow"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`px-3 py-2 rounded-full font-semibold ${
                pathname === "/blog"
                  ? "bg-white/10 border border-white/20 shadow text-white"
                  : "bg-transparent text-white transition-all duration-200 hover:border hover:border-white/30 hover:bg-white/20 hover:shadow"
              }`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/docs"
              className={`px-3 py-2 rounded-full font-semibold ${
                pathname === "/docs"
                  ? "bg-white/10 border border-white/20 shadow text-white"
                  : "bg-transparent text-white transition-all duration-200 hover:border hover:border-white/30 hover:bg-white/20 hover:shadow"
              }`}
            >
              Docs
            </Link>
          </li>
          {/* Dropdown Pages */}
          <li className="relative group">
            <DropdownMenu
              label="Pages"
              items={[
                { label: "Pricing", href: "/pricing" },
                { label: "Team", href: "/team" },
                { label: "Contact", href: "/contact" },
              ]}
              pathname={pathname}
            />
          </li>
          {/* Dropdown OpenAI Examples */}
          <li className="relative group">
            <DropdownMenu
              label="OpenAI Examples"
              items={[
                { label: "Chatbot", href: "/chatbot" },
                { label: "Image Generator", href: "#" },
                { label: "Code Completion", href: "#" },
              ]}
              pathname={pathname}
            />
          </li>
        </ul>
      </nav>
      {/* Auth Buttons */}
      <div className="flex items-center gap-3">
        <a href="#" className="text-white text-lg">
          Sign In
        </a>
        <a
          href="#"
          className="px-6 py-2 rounded-lg bg-white/10 border border-white/20 shadow text-white font-semibold flex items-center gap-2 hover:bg-white/20 transition"
        >
          Sign up <span>→</span>
        </a>
      </div>
    </header>
  );
}

// DropdownMenu component
function DropdownMenu({ label, items, pathname }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Tutup dropdown jika klik di luar
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className={`px-3 py-2 rounded-full bg-transparent text-white font-semibold flex items-center gap-1
          ${open ? "border border-white/30 bg-white/20 shadow" : ""}
          hover:border hover:border-white/30 hover:bg-white/20 hover:shadow transition-all duration-200
        `}
        onClick={() => setOpen((prev) => !prev)}
        type="button"
        aria-expanded={open}
      >
        {label}
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 8l4 4 4-4"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`absolute left-0 mt-2 min-w-[160px] bg-[#18102e] border border-white/10 rounded-lg shadow-lg z-10 transition-all duration-200
          ${
            open
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
        style={{ transformOrigin: "top" }}
      >
        <ul className="py-2">
          {items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`block px-4 py-2 text-white transition ${
                  pathname === item.href
                    ? "bg-white/10 border-l-4 border-[#a78bfa] font-bold"
                    : "hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
