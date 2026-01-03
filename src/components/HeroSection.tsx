import DeveloperSvg from "@/assets/svg/DeveloperSvg";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-accent/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-20">
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] tracking-tight"
                variants={itemVariants}
              >
                Hi, I'm <span className="text-gradient">Raj</span>
                <br />
                <span className="text-muted-foreground text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium">
                  Software Development Engineer
                </span>
              </motion.h1>

              <motion.p
                className="text-lg text-muted-foreground font-body max-w-md leading-relaxed"
                variants={itemVariants}
              >
                I build modern, scalable web platforms and high-performance
                websites with clean code, thoughtful design, and a strong focus
                on real-world user experience.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-display font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 glass-card rounded-full font-display font-medium hover:bg-secondary transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-8 pt-6 border-t border-border/50"
              variants={itemVariants}
            >
              {[
                { value: "3+", label: "Years Experience" },
                { value: "6+", label: "Major Projects Delivered" },
                { value: "4+", label: "Businesses Served" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="space-y-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <span className="text-3xl font-display font-bold text-primary">
                    {stat.value}
                  </span>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex items-center gap-4 pt-4"
              variants={itemVariants}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/dev-raj24",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/YOUR_LINKEDIN/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=deepraj8264@gmail.com",
                  label: "Email",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-xl hover:bg-secondary transition-colors"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative max-w-lg mx-auto">
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square border border-primary/10 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square border border-accent/5 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <DeveloperSvg />
              </motion.div>

              <motion.div
                className="absolute -top-4 right-4 glass-card px-4 py-2 rounded-xl border border-primary/30"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-primary font-mono text-sm">{"</>"}</span>
                <span className="ml-2 font-display text-sm font-medium">
                  React
                </span>
              </motion.div>

              <motion.div
                className="absolute bottom-20 -left-4 glass-card px-4 py-2 rounded-xl border border-accent/30"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <span className="text-accent font-mono text-sm">TS</span>
                <span className="ml-2 font-display text-sm font-medium">
                  TypeScript
                </span>
              </motion.div>

              <motion.div
                className="absolute bottom-4 right-8 glass-card px-4 py-2 rounded-xl border border-primary/30"
                animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <span className="text-primary font-mono text-sm">$_</span>
                <span className="ml-2 font-display text-sm font-medium">
                  Terminal
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-muted-foreground font-display uppercase tracking-widest">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
