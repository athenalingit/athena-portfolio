import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)]" />
      <Nav />
      <Hero />
      <Projects />

      <section id="about" className="mx-auto w-full max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-3 max-w-3xl text-sm text-white/70">
          UC San Diego Cognitive Science student specializing in Machine Learning & Neural Computation.
          Experience fine-tuning transformer models, Dockerized training workflows, and shipping web apps.
        </p>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
          <a className="hover:text-white" href="mailto:atl009@ucsd.edu">atl009@ucsd.edu</a>
          <a className="hover:text-white" href="https://www.linkedin.com/athenalin7" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-white" href="https://github.com/athenalingit" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Athena Lin
      </footer>
    </main>
  );
}
