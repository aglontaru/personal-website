'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (pathname !== '/') return;

    const sections = document.querySelectorAll('section[id], main[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href={pathname === '/' ? '#home' : '/#home'} className="nav-logo" onClick={closeMenu}>
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
              href={pathname === '/' ? '#show_me' : '/#show_me'}
              className={`nav-link ${activeSection === '#show_me' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Show Me
            </Link>
          </li>
          <li>
            <Link
              href={pathname === '/' ? '#help_me' : '/#help_me'}
              className={`nav-link ${activeSection === '#help_me' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Help Me
            </Link>
          </li>
          <li>
            <Link
              href={pathname === '/' ? '#do_it_for_me' : '/#do_it_for_me'}
              className={`nav-link ${activeSection === '#do_it_for_me' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Do It For Me
            </Link>
          </li>
          <li>
            <Link
              href={pathname === '/' ? '#about_me' : '/#about_me'}
              className={`nav-link ${(activeSection === '#about_me' && pathname === '/') || pathname === '/experience' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              href={pathname === '/' ? '#cta' : '/#cta'}
              className={`nav-cta ${activeSection === '#cta' ? 'active' : ''}`}
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
