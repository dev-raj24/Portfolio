import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  year: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "PortFlow – Port Dispatch & Logistics Platform",
    description:
      "End-to-end port logistics platform including driver workflows, dispatch management, chassis handling, customer modules, role-based dashboards and real-time operational monitoring built for enterprise scale usage.",
    category: "Logistics Platform",
    year: "2025",
    technologies: ["React.js", "Material UI", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "EnrollHere – International Education Platform",
    description:
      "Full-fledged education ecosystem enabling Admins, Recruiters and Students to manage applications, institute onboarding, fee payments, commissions, analytics and secure authentication with a production-grade UI.",
    category: "Education Platform",
    year: "2024",
    technologies: ["React.js", "Material UI", "Stripe"],
  },
  {
    id: 3,
    title: "MemeShake – Social Media Platform",
    description:
      "Modern social networking app with post creation, commenting, real-time chat using Socket.io, Google OAuth login system and visually premium UI experience inspired by Instagram level usability.",
    category: "Social Platform",
    year: "2024",
    technologies: ["Next.js", "Socket.io", "Google OAuth", "ShadCN"],
  },
  {
    id: 4,
    title: "QFL – Trucking & Load Management System",
    description:
      "Professional trucking management platform including load assignment, listing, status tracking, operational dashboards and mobile responsive workflow screens built for real business usage.",
    category: "Operations System",
    year: "2024",
    technologies: ["React.js"],
  },
  {
    id: 5,
    title: "BGC – Cab Booking Platform",
    description:
      "Complete cab booking platform including ride selection, pickup to drop flow, confirmation UI, structured forms and mobile-first design focusing on fast user-friendly booking experience.",
    category: "Booking Platform",
    year: "2024",
    technologies: ["React.js"],
  },
  {
    id: 6,
    title: "GBM – Medical Equipment System",
    description:
      "Healthcare inventory and equipment workflow system including maintenance modules, UI refinements, bug fixing, feature enhancements and improved Ant Design experience for daily operations.",
    category: "Healthcare Platform",
    year: "2024",
    technologies: ["React.js", "Ant Design"],
  },
];

const ProjectCard = ({
  project,
  active,
}: {
  project: Project;
  active: boolean;
}) => {
  return (
    <motion.div
      animate={{
        scale: active ? 1 : 0.92,
        opacity: active ? 1 : 0.6,
        y: active ? 0 : 25,
      }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="w-full max-w-sm md:max-w-md lg:max-w-sm rounded-2xl border bg-card shadow-xl p-6 h-auto md:h-[320px] flex flex-col justify-between"
    >
      <div>
        <span className="text-primary text-xs uppercase tracking-wider">
          {project.category} • {project.year}
        </span>

        <h3 className="text-lg md:text-xl font-bold mt-2">{project.title}</h3>

        <p className="text-muted-foreground text-sm leading-relaxed mt-2 md:line-clamp-4">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.technologies.slice(0, 4).map((t) => (
          <span
            key={t}
            className="px-2 py-1 bg-secondary text-xs rounded border border-border"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [index, setIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const total = projects.length;

  const getSlides = () => {
    if (isMobile) return [projects[index]];
    return [
      projects[(index - 1 + total) % total],
      projects[index],
      projects[(index + 1) % total],
    ];
  };

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const auto = setInterval(() => {
      setIndex((p) => (p + 1) % total);
    }, 3500);
    return () => clearInterval(auto);
  }, []);

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-xs md:text-sm">
            Portfolio
          </span>

          <h2 className="text-3xl md:text-6xl font-bold mt-3">
            Real-World <span className="text-gradient">Projects</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Production ready platforms across logistics, education, booking,
            social and healthcare businesses.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex justify-center gap-4 md:gap-6 py-8">
            <AnimatePresence mode="popLayout">
              {getSlides().map((p, i) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  active={i === 1 || isMobile}
                />
              ))}
            </AnimatePresence>
          </div>

          <button
            onClick={() =>
              setIndex((p) => (p - 1 + projects.length) % projects.length)
            }
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 border rounded-full items-center justify-center hover:bg-primary hover:text-white transition"
          >
            <ArrowLeft />
          </button>

          <button
            onClick={() => setIndex((p) => (p + 1) % projects.length)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 border rounded-full items-center justify-center hover:bg-primary hover:text-white transition"
          >
            <ArrowRight />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition ${
                i === index ? "bg-primary w-6" : "bg-gray-500/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
