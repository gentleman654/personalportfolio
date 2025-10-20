// components/ProjectCard.tsx
'use client';

import type { Project } from '../data/projects';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ProjectCard({ 
  project, 
  priority = false 
}: { 
  project: Project;
  priority?: boolean;
}) {
  const router = useRouter();

  // Cards with hideDetails won't navigate anywhere, but still show hover effect
  const isClickable = !project.hideDetails;

  // Determine the primary link: live demo > case study
  const primaryLink = project.links?.demo || `/work/${project.slug}`;
  const isExternalLink = project.links?.demo ? true : false;

  const handleCardClick = (e: React.MouseEvent) => {
    if (!isClickable) return;

    // Don't navigate if clicking on buttons or links
    const target = e.target as HTMLElement;
    if (
      target.tagName === 'A' || 
      target.tagName === 'BUTTON' || 
      target.closest('a') || 
      target.closest('button')
    ) {
      return;
    }

    // Navigate to primary link
    if (isExternalLink) {
      window.open(primaryLink, '_blank', 'noopener,noreferrer');
    } else {
      router.push(primaryLink);
    }
  };

  return (
    <div 
      className="card h-100 shadow-sm border-0"
      onClick={handleCardClick}
      style={{ 
        cursor: 'pointer', 
        transition: 'transform 0.2s, box-shadow 0.2s' 
      }}
      onMouseEnter={(e) => {
        // Always show hover effect
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={(e) => {
        // Always reset hover effect
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      {/* Project Image */}
      {project.cover && (
        <Image
          src={project.cover}
          className="card-img-top"
          alt={project.title}
          width={400}
          height={200}
          style={{ height: '200px', objectFit: 'cover' }}
          priority={priority}
          loading={priority ? undefined : "lazy"}
        />
      )}

      <div className="card-body d-flex flex-column">
        {/* Title & Description */}
        <h3 className="h5 card-title mb-2">{project.title}</h3>
        <p className="card-text text-body-secondary mb-3">{project.oneLiner}</p>

        {/* Impact Metrics (The Recruiter Hook!) - Hidden if hideDetails is true */}
        {!project.hideDetails && project.metrics.length > 0 && (
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
        )}

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

        {/* Action Buttons - Case Study hidden if hideDetails is true */}
        <div className="mt-auto d-flex gap-2">
          {!project.hideDetails && (
            <Link
              href={`/work/${project.slug}`}
              className="btn btn-outline-primary btn-sm flex-fill"
            >
              Case Study
            </Link>
          )}
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
