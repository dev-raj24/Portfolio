import DeveloperSvg from "@/assets/svg/DeveloperSvg";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const containerVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-24 -right-24 w-[340px] h-[340px] bg-primary/15 rounded-full blur-2xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -bottom-24 -left-24 w-[380px] h-[380px] bg-accent/10 rounded-full blur-2xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center min-h-screen py-20">
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1]"
              variants={itemVariants}
            >
              Hi, I'm <span className="text-gradient">Raj</span>
              <br />
              <span className="text-muted-foreground text-xl sm:text-2xl lg:text-3xl font-medium">
                Software Development Engineer
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground font-body max-w-md leading-relaxed"
              variants={itemVariants}
            >
              I build modern, scalable web platforms and high-performance
              websites with a strong focus on experience & performance.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-display font-medium"
              >
                View My Work
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 glass-card rounded-full font-display font-medium"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-8 pt-6 border-t border-border/50"
              variants={itemVariants}
            >
              {[
                { value: "3+", label: "Years Experience" },
                { value: "6+", label: "Major Projects Delivered" },
                { value: "4+", label: "Businesses Served" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-3xl font-display font-bold text-primary">
                    {stat.value}
                  </span>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex items-center gap-4 pt-4"
              variants={itemVariants}
            >
              {[
                { icon: Github, href: "https://github.com/dev-raj24" },
                { icon: Linkedin, href: "https://www.linkedin.com" },
                { icon: Mail, href: "mailto:deepraj8264@gmail.com" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  className="p-3 glass-card rounded-xl"
                >
                  <s.icon className="w-5 h-5 text-muted-foreground" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative max-w-lg mx-auto">
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <DeveloperSvg />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
