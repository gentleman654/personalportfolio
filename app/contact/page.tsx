"use client";

import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setError(body?.error || `Request failed (${res.status})`);
        setStatus('error');
        return;
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError((err as Error).message || 'Network error');
      setStatus('error');
    }
  };

  return (
    <main className="container py-5">
      <h1 className="h3 mb-4">Contact</h1>
      <p>I reply within 24–48h. You can use the form or reach out directly:</p>
      <div className="d-flex gap-2 mb-4">
        <a
          className="btn btn-outline-secondary"
          href="mailto:manasgandotra@gmail.com"
        >
          Email
        </a>
        <a
          className="btn btn-primary"
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
        </a>
        <a
          className="btn btn-primary"
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>
      </div>
      <form className="mb-4" autoComplete="off" onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control mb-2"
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          rows={4}
          placeholder="Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>
      </form>

      {status === 'success' && (
        <div className="alert alert-success">Thanks — your message was sent.</div>
      )}

      {status === 'error' && (
        <div className="alert alert-danger">{error || 'Failed to send message.'}</div>
      )}
    </main>
  );
}
