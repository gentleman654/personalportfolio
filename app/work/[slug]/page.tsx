import dynamic from 'next/dynamic';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import compiledCases from '@/data/compiled-cases.json';

// Lazy load Footer
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => null,
});

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  // Get pre-compiled HTML for this case study
  const caseStudyHtml = (compiledCases as Record<string, string>)[project.slug] || null;

  return (
    <>
      <Navbar />
      <main className="container py-5">
        <h1 className="display-5 mb-3">{project.title}</h1>
        <p className="lead mb-4">{project.oneLiner}</p>
        {project.cover && (
          <Image
            src={project.cover}
            alt={project.title}
            width={800}
            height={400}
            className="mb-4 rounded shadow-sm"
            style={{ maxWidth: '100%', height: 'auto' }}
            priority
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

        {/* Case Study Section - Render pre-compiled HTML if exists */}
        {caseStudyHtml ? (
          <section 
            className="markdown-body mt-5"
            dangerouslySetInnerHTML={{ __html: caseStudyHtml }}
          />
        ) : (
          // Fallback when no case study exists
          <section className="mt-5">
            <h2 className="h3 mb-3">Case Study</h2>
            <p className="text-body-secondary">
              Detailed case study documentation coming soon for {project.title}.
            </p>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
