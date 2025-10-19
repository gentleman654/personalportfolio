import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md border-bottom sticky-top navbar-dark">
      <div className="container">
        <Link className="navbar-brand fw-semibold" href="/">
          Home
        </Link>
        <div className="d-flex gap-2">
          <Link
            className="btn btn-outline-secondary btn-sm"
            href="/about"
          >
            About
          </Link>
          <Link
            className="btn btn-outline-secondary btn-sm"
            href="/contact"
          >
            Contact
          </Link>
          <a
            className="btn btn-primary btn-sm"
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
          >
            Resume
          </a>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
