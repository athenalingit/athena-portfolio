export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-20 pb-12">
      <h1 className="text-4xl font-semibold tracking-tight text-white">Athena Lin</h1>
      <p className="mt-4 max-w-2xl text-white/70">
        Applied Machine Learning Engineer (new grad). I fine-tune LLMs (LoRA, PyTorch),
        build data pipelines, and ship production software.
      </p>

      <div className="mt-8 flex flex-wrap gap-3 text-sm">
        <a
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/85 hover:bg-white/10"
          href="#projects"
        >
          View projects
        </a>
        <a
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/85 hover:bg-white/10"
          href="mailto:atl009@ucsd.edu"
        >
          Email
        </a>
        <a
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/85 hover:bg-white/10"
          href="#contact"
        >
          Links
        </a>
      </div>
    </section>
  );
}