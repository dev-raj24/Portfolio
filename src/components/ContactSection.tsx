import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-card">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase">
            Let's Connect
          </span>

          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 leading-tight">
            Have a project
            <br />
            <span className="text-gradient">in mind?</span>
          </h2>

          <p className="text-muted-foreground text-lg font-body mt-6 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to collaborate.
          </p>

          <motion.a
            href="https://mail.google.com/mail/?view=cm&to=deepraj8264@gmail.com"
            target="_blank"
            className="inline-flex items-center gap-3 mt-10 px-10 py-5 bg-primary text-primary-foreground font-display font-semibold rounded-full shadow-lg hover:shadow-xl glow-accent group text-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Start a Conversation
            <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
