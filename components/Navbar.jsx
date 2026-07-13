'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/#top" className="nav-logo" onClick={closeMenu}>
          AG<span className="accent">_</span> // <span className="accent">sapiema</span>
        </Link>
        <button
          aria-label="Toggle menu"
          className="hamburger"
          onClick={toggleMenu}
        >
          <div className="hamburger-icon"></div>
        </button>
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`} id="navMenu">
          <li>
            <Link
              href="/#workshop"
              className={`nav-link ${pathname === '/' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Show Me
            </Link>
          </li>
          <li>
            <Link
              href="/#fractional"
              className="nav-link"
              onClick={closeMenu}
            >
              Help Me
            </Link>
          </li>
          <li>
            <Link
              href="/#sapiema"
              className="nav-link"
              onClick={closeMenu}
            >
              Do It For Me
            </Link>
          </li>
          <li>
            <Link
              href="/experience"
              className={`nav-link ${pathname === '/experience' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="/#cta"
              className="nav-cta"
              onClick={closeMenu}
            >
              Book Your Reality Check
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
