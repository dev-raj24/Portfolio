import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-6 transition-all duration-300 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="relative z-[90]">
            <span className="text-2xl font-display font-bold">
              Rajdeep Singh<span className="text-primary">.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-display text-sm tracking-wide py-1 text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=deepraj8264@gmail.com"
              target="_blank"
              className="px-6 py-2.5 bg-primary text-primary-foreground font-display text-sm rounded-full hover:opacity-90 transition-opacity"
            >
              Let&apos;s Talk
            </a>
          </div>

          <button
            className="md:hidden relative z-[90] p-2"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-10">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 border-2 border-white/70 rounded-xl p-2"
          >
            <X className="w-7 h-7 text-white" />
          </button>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-4xl font-display font-bold text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=deepraj8264@gmail.com"
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-8 py-3 bg-primary text-primary-foreground font-display rounded-full"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
