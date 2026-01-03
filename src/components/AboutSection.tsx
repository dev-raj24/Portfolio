import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Redux",
  "React Query",
  "Tailwind CSS",
  "Ant Design",
  "Node.js",
  "REST APIs",
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 lg:px-12 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-primary font-display text-sm tracking-[0.3em] uppercase">
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 leading-tight text-foreground">
              Software Development Engineer
              <br />
              <span className="text-gradient">
                building real-world solutions
              </span>
            </h2>
          </div>

          <div className="space-y-4 text-muted-foreground text-lg font-body leading-relaxed">
            <p>
              I’m a Software Development Engineer from Punjab, India, focused on
              building scalable web platforms, dashboards, and production-ready
              applications. I believe in clean code, solid architecture, and
              creating interfaces that genuinely help people in real-world use
              cases.
            </p>

            <p>
              I’ve worked across multiple product domains including
              international education platforms, trucking and logistics systems,
              port dispatch management, social platforms with real-time
              features, medical management tools, cab booking experiences, and
              car rental workflows. From UI structure and reusable components to
              API integration, authentication, payments, and data handling — I
              handle complete frontend responsibilities with a strong focus on
              performance, clarity, and user experience.
            </p>

            <p>
              I regularly work with React, Next.js, Material UI, Ant Design,
              Tailwind, React Query, Redux, Google OAuth, Stripe Payments,
              Socket.io and real-world REST APIs. Whether it’s building
              something from scratch or improving existing systems, my goal is
              always simple — build something reliable, meaningful, and smooth
              to use.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 py-6">
            <motion.div
              className="flex flex-col items-center gap-2 p-4 glass-card rounded-xl"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Palette className="w-6 h-6 text-primary" />
              <span className="text-sm font-display text-foreground">
                Design
              </span>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-2 p-4 glass-card rounded-xl"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Code2 className="w-6 h-6 text-accent" />
              <span className="text-sm font-display text-foreground">
                Develop
              </span>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-2 p-4 glass-card rounded-xl"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-sm font-display text-foreground">
                Deliver
              </span>
            </motion.div>
          </div>

          <div>
            <h3 className="text-sm font-display tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Technologies & Tools
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-display text-secondary-foreground border border-border/50 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "hsl(160, 100%, 45%)",
                    color: "hsl(220, 20%, 4%)",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
