import { projects } from '@/data/projects';
import type { Project } from '@/data/projects';
import { notFound } from 'next/navigation';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="container py-5">
      <h1 className="display-5 mb-3">{project.title}</h1>
      <p className="lead mb-4">{project.oneLiner}</p>
      {project.cover && (
        <img
          src={project.cover}
          alt={project.title}
          className="mb-4 rounded shadow-sm"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}
      <div className="mb-4">
        <strong>Impact Metrics:</strong>
        <ul>
          {project.metrics.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <strong>Tech Stack:</strong>
        <div>
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="badge bg-body-secondary text-body-emphasis me-1 mb-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="d-flex gap-2 mb-4">
        {project.links?.demo && (
          <a
            href={project.links.demo}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
        {project.links?.code && (
          <a
            href={project.links.code}
            className="btn btn-outline-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        )}
      </div>
      {/* Add STAR breakdown, GIF/demo, and your contributions here */}
    </main>
  );
}
