export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-sm font-semibold tracking-wide text-white">Athena</div>
        <nav className="flex gap-6 text-sm text-white/70">
          <a className="hover:text-white" href="#projects">Projects</a>
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}