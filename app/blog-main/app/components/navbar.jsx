"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle"; // keeping it out of menu as you asked

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link href="/" className="logo">
          Faheem Blogs
        </Link>

        {/* Hamburger icon */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      <nav className={`menu-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/authblog" onClick={() => setIsOpen(false)}>Blog Post</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li className="theme"><ThemeToggle /></li>
        </ul>
      </nav>

    </header>
  );
};

export default Navbar;
