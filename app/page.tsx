import ThemeSwitcher from '../components/ThemeSwitcher';
import { projects } from '../data/projects'; // 1. Import projects
import ProjectCard from '../components/ProjectCard'; // 2. Import ProjectCard
import Navbar from '@/components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Main Content */}
      <main className="container py-5 bg-body text-body">
        {' '}
        {/* Hero Section */}
        <section className="py-4 py-md-5">
          <h1 className="display-4 fw-bold mb-3">Manas Gandotra</h1>
          <p className="lead mb-4 text-secondary">
            Full-stack Developer who builds fast, clean, recruiter-friendly web
            apps.
          </p>

          {/* CTA Buttons */}
          <div className="d-flex flex-column flex-sm-row gap-3">
            <a
              className="btn btn-primary btn-lg"
              href="/resume.pdf"
              target="_blank"
              rel="noopener"
            >
              View Resume
            </a>
            <a className="btn btn-outline-secondary btn-lg" href="/contact">
              Contact Me
            </a>
          </div>
        </section>
        {/* Quick Stats */}
        <section className="py-4">
          <div className="row g-4 text-center">
            <div className="col-12 col-md-4">
              <h3 className="h4 text-primary mb-1">2+ Years</h3>
              <p className="text-secondary mb-0">Full-stack Development</p>
            </div>
            <div className="col-12 col-md-4">
              <h3 className="h4 text-primary mb-1">4+ Projects</h3>
              <p className="text-secondary mb-0">Shipped to Production</p>
            </div>
            <div className="col-12 col-md-4">
              <h3 className="h4 text-primary mb-1">{'< 2s Load'}</h3>
              <p className="text-secondary mb-0">Average Page Speed</p>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section className="py-4">
          <h2 className="h3 mb-4">Selected Work</h2>
          <div className="row g-4">
            {/* 3. Render first 3 projects as cards */}
            {projects.slice(0, 3).map((project) => (
              <div className="col-12 col-md-6 col-lg-4" key={project.slug}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
