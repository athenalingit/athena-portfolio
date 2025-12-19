import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-14">
      <h2 className="text-2xl font-semibold text-white">Projects</h2>
      <p className="mt-2 max-w-2xl text-sm text-white/70">
        Focused on applied ML work and systems I’ve shipped.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06]"
          >
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-white/70">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>

            {p.link ? (
              <a
                className="mt-5 inline-block text-sm text-white/80 hover:text-white"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                View →
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}