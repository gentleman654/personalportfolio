export default function Footer() {
  return (
    <footer className="border-top py-4 mt-5 footer-dark">
      <div className="container text-center">
        <p className="mb-2">© {new Date().getFullYear()} Manas Gandotra</p>
        <p className="small mb-0 text-muted">
          Toronto, ON • Available for full-time roles
        </p>
      </div>
    </footer>
  );
}
