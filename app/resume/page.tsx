'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Manas_Gandotra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <h1 className="h3 mb-4">Resume</h1>

        <div className="d-flex gap-2 mb-4">
          <button className="btn btn-primary" onClick={handleDownload}>
            Download PDF
          </button>
          <Link href="/" className="btn btn-outline-secondary">
            Back to Home
          </Link>
        </div>

        <div className="resume-viewer">
          <div
            className="pdf-container border rounded"
            style={{
              height: '80vh',
              overflow: 'hidden',
            }}
          >
            <iframe
              src="/resume.pdf"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Resume PDF Viewer"
            >
              <p>
                Your browser does not support PDF viewing.{' '}
                <button
                  onClick={handleDownload}
                  className="btn btn-link p-0"
                  style={{ textDecoration: 'underline' }}
                >
                  Click here to download the PDF
                </button>
              </p>
            </iframe>
          </div>

          <div className="mt-3 text-center text-muted">
            <small>
              Cannot see the PDF?{' '}
              <button
                className="btn btn-link btn-sm p-0"
                onClick={handleDownload}
                style={{ textDecoration: 'underline' }}
              >
                Download it directly
              </button>
            </small>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
