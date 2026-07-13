'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      background: 'rgba(5, 20, 36, 0.95)', borderTop: '1px solid #f66a2e',
      padding: '20px', zIndex: 9999, display: 'flex', flexWrap: 'wrap',
      justifyContent: 'center', alignItems: 'center', gap: '20px',
      color: '#d4e4fa', fontFamily: 'var(--font-mono), monospace', fontSize: '14px',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{ maxWidth: '800px', textAlign: 'center' }}>
        We use cookies and Google Analytics to understand how you interact with our website. 
        You can read more about this in our <a href="/privacy" style={{ color: '#f66a2e', textDecoration: 'underline' }}>Privacy Policy</a>.
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={declineCookies} className="btn-outline" style={{ padding: '8px 16px', fontSize: '12px' }}>
          Decline
        </button>
        <button onClick={acceptCookies} className="btn-primary" style={{ padding: '8px 16px', fontSize: '12px' }}>
          Accept
        </button>
      </div>
    </div>
  );
}
