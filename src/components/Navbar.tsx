import { motion } from "framer-motion";
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
    const onScroll = () => {
      if (window.scrollY > 100) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-6 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="relative z-50">
          <span className="text-2xl font-display font-bold">
            Rajdeep Singh<span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop */}
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

        {/* Mobile menu button */}
        <button
          className="md:hidden relative z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          className={`fixed inset-0 bg-background md:hidden ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          initial={false}
          animate={{ opacity: isOpen ? 1 : 0 }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-4xl font-display font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 20,
                }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}

            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=deepraj8264@gmail.com"
              target="_blank"
              className="mt-4 px-8 py-3 bg-primary text-primary-foreground font-display rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 20,
              }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s Talk
            </motion.a>
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
