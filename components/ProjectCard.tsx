// components/ProjectCard.tsx
import type { Project } from '../data/projects';
import Link from 'next/link';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      {/* Project Image */}
      {project.cover && (
        <img
          src={project.cover}
          className="card-img-top"
          alt={project.title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
      )}

      <div className="card-body d-flex flex-column">
        {/* Title & Description */}
        <h3 className="h5 card-title mb-2">{project.title}</h3>
        <p className="card-text text-body-secondary mb-3">{project.oneLiner}</p>

        {/* Impact Metrics (The Recruiter Hook!) */}
        <div className="mb-3">
          {project.metrics.map((metric, index) => (
            <span
              key={index}
              className="badge bg-success-subtle text-success-emphasis me-2 mb-1"
            >
              {metric}
            </span>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-3">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="badge bg-body-secondary text-body-emphasis me-1 mb-1"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto d-flex gap-2">
          <Link
            href={`/work/${project.slug}`}
            className="btn btn-outline-primary btn-sm flex-fill"
          >
            Case Study
          </Link>
          {project.links?.code && (
            <a
              href={project.links.code}
              className="btn btn-outline-secondary btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
