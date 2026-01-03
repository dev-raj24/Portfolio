import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="text-2xl font-display font-bold">
            Rajdeep Singh<span className="text-primary">.</span>
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm font-body">
            © 2025 Portfolio. All rights reserved.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-display text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ y: -3 }}
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
