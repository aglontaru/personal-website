import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px' }}>
        <span>© 2026 Alexandru-Mihai Glontaru · Sapiema — No hype. Only physics.</span>
        <span style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <Link href="/impressum">Impressum</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <a href="https://sapiema.com" target="_blank" rel="noopener noreferrer">sapiema.com</a>
        </span>
      </div>
    </footer>
  );
}
