'use client';
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    // Initial check
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 9999,
        background: 'rgba(246,106,46,0.15)',
        color: '#f66a2e',
        border: '1px solid rgba(246,106,46,0.5)',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3), inset 0 0 10px rgba(246,106,46,0.1)',
        backdropFilter: 'blur(8px)'
      }}
      aria-label="Scroll to top"
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#f66a2e';
        e.currentTarget.style.color = '#050f24';
        e.currentTarget.style.borderColor = '#f66a2e';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(246,106,46,0.15)';
        e.currentTarget.style.color = '#f66a2e';
        e.currentTarget.style.borderColor = 'rgba(246,106,46,0.5)';
      }}
    >
      <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_upward</span>
    </button>
  );
}
