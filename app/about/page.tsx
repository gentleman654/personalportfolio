'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Lazy load components
const Navbar = dynamic(() => import('@/components/Navbar'), {
  ssr: true,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => null,
});

// Typewriter effect for headings
const TypewriterHeading = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80); // 80ms per character - faster typing

    return () => clearInterval(interval);
  }, [isInView, text]);

  return (
    <h1
      ref={ref}
      className="display-3 fw-bold mb-4"
      style={{ color: '#fffffe', minHeight: '80px' }}
    >
      <span style={{ color: '#7f5af0' }}>~</span> {displayText}
      {displayText.length < text.length && (
        <span className="text-primary">|</span>
      )}
    </h1>
  );
};

// Animated content that slides in after typewriter
const SlideInContent = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

// Full screen section wrapper
const FullScreenSection = ({ children }: { children: ReactNode }) => {
  return (
    <section className="d-flex align-items-center justify-content-center" 
      style={{ 
        minHeight: '100vh',
        padding: '2rem 1rem'
      }}
    >
      <div className="container" style={{ maxWidth: '800px' }}>
        {children}
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Who Section */}
        <FullScreenSection>
          <div className="text-center">
            <TypewriterHeading text="Who" />
            <SlideInContent delay={0.4}>
              <p className="lead" style={{ color: '#bbc3ce', fontSize: '1.25rem' }}>
                I&apos;m Manas. I don&apos;t just write code, I build digital experiences. 
                My passion lies in transforming complex problems into elegant, 
                user-friendly solutions that just <em>work</em>.
              </p>
            </SlideInContent>
          </div>
        </FullScreenSection>

        {/* What Section */}
        <FullScreenSection>
          <div className="text-center">
            <TypewriterHeading text="What" />
            <SlideInContent delay={0.5}>
              <p className="lead" style={{ color: '#bbc3ce', fontSize: '1.25rem' }}>
                I&apos;m a Full-Stack Developer, bridging the gap between a beautiful UI 
                and a powerful, scalable backend. My toolkit is modern and robust, from 
                React to FastAPI, MongoDB to Docker, allowing me to architect and deliver 
                complete applications from start to finish.
              </p>
            </SlideInContent>
          </div>
        </FullScreenSection>

        {/* How Section with CTA */}
        <FullScreenSection>
          <div className="text-center">
            <TypewriterHeading text="How" />
            <SlideInContent delay={0.4}>
              <p className="lead mb-4" style={{ color: '#bbc3ce', fontSize: '1.25rem' }}>
                I&apos;m a software engineer. I ship across UI, backends, systems, and  AI.
              </p>
            </SlideInContent>

            <SlideInContent delay={0.7}>
              <div className="text-start" style={{ maxWidth: '700px', margin: '0 auto' }}>
                <div className="mb-3">
                  <h5 style={{ color: '#7f5af0' }}>Web craft, not bloat</h5>
                  <p style={{ color: '#bbc3ce', fontSize: '1.25rem' }}>
                    Static when possible, dynamic when necessary. I pre‑compile content, split bundles, cache at the edge,
                    and tune images , so first paint feels instant and stays that way.
                  </p>
                </div>

                <div className="mb-3">
                  <h5 style={{ color: '#7f5af0' }}>Systems thinking from C++</h5>
                  <p style={{ color: '#bbc3ce', fontSize: '1.25rem' }}>
                    C++ taught me to count allocations and respect complexity. I reach for a profiler before another
                    dependency, design for data locality, and keep code deterministic and testable.
                  </p>
                </div>

                <div className="mb-3">
                  <h5 style={{ color: '#7f5af0' }}>AI with receipts</h5>
                  <p style={{ color: '#bbc3ce', fontSize: '1.25rem' }}>
                    Building a RAG pipeline the boring‑reliable way: clean chunking, quality embeddings, constrained prompts,
                    automatic evals, guardrails, and latency/cost budgets. Hallucinations aren&apos;t invited.
                  </p>
                </div>

                <div className="mb-3">
                  <h5 style={{ color: '#7f5af0' }}>Reliability {'>'} vibes</h5>
                  <p style={{ color: '#bbc3ce', fontSize: '1.25rem' }}>
                    If it can fail, it will. I add retries, idempotency keys, structured logs, and dead‑simple fallbacks.
                    Shipping is a feature; debugging at 2am isn&apos;t.
                  </p>
                </div>

                <div className="mb-4">
                  <h5 style={{ color: '#7f5af0' }}>Product taste</h5>
                  <p style={{ color: '#bbc3ce', fontSize: '1.25rem' }}>
                    Clear copy, accessible interactions, zero friction. If my mom can&apos;t use it, it ships later. If it&apos;s fast
                    and useful, it feels delightful.
                  </p>
                </div>
              </div>
            </SlideInContent>

            {/* CTA in same section, animates with insights */}
            <SlideInContent delay={0.7}>
              <div className="mt-4">
                <a href="/contact" className="btn btn-primary btn-lg px-5 py-3">
                  Let’s Talk
                </a>
              </div>
            </SlideInContent>
          </div>
        </FullScreenSection>
      </main>
      <Footer />
    </>
  );
}

