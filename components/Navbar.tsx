import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-body border-bottom sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-semibold" href="/">
          Manas
        </Link>
        <div className="d-flex gap-2">
          <a
            className="btn btn-primary"
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
