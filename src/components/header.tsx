import { Logo } from "./logo";

export function Header() {
  return (
    <header className="fixed inset-0 top-0 flex h-24 px-10 items-center justify-between">
      <div className="flex overflow-hidden h-10">
        <Logo />
      </div>
      <nav className="flex items-center gap-4">
        <a
          href="/"
          className="text-zinc-300 hover:text-zinc-50 transition-colors duration-150 font-medium"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-zinc-300 hover:text-zinc-50 transition-colors duration-150 font-medium"
        >
          About
        </a>
        <a
          href="/contact"
          className="text-zinc-300 hover:text-zinc-50 transition-colors duration-150 font-medium"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
