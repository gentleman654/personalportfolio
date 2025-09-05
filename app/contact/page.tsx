export default function Contact() {
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
      <form className="mb-4" autoComplete="off">
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Your Name"
          required
        />
        <input
          className="form-control mb-2"
          type="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="form-control mb-2"
          rows={4}
          placeholder="Message"
          required
        />
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>
    </main>
  );
}
