("use client");

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

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
      "PortFlow is an advanced logistics platform that manages port dispatch, container handling, driver workflows, chassis assignment, and live trip tracking in one powerful dashboard. Built for real enterprise environments, it ensures clarity, security, and operational stability with structured workflows, role-based control, and clean UI suited for serious logistics operations.",
    category: "Logistics Platform",
    year: "2025",
    technologies: ["React.js", "Material UI", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "EnrollHere – International Education Platform",
    description:
      "EnrollHere is a professional international education platform designed for students, recruiters, universities, and admins. It supports document handling, onboarding workflows, application tracking, secure Stripe payments, analytics, and role-based dashboards. Built like a real SaaS product, it focuses on clarity, performance, and reliability for global education management.",
    category: "Education Platform",
    year: "2024",
    technologies: ["React.js", "Material UI", "Stripe"],
  },
  {
    id: 3,
    title: "MemeShake – Social Media Platform",
    description:
      "MemeShake is a modern social platform with posts, comments, reactions, and smooth real-time chat using Socket.io. Google OAuth enables secure login, while responsive layouts and ShadCN UI deliver a premium experience. It feels production-ready, showcasing real-time engineering, performance focus, and social product thinking.",
    category: "Social Platform",
    year: "2024",
    technologies: ["Next.js", "Socket.io", "Google OAuth", "ShadCN"],
  },
  {
    id: 4,
    title: "QFL – Trucking & Load Management System",
    description:
      "QFL is a trucking and load management platform that helps logistics companies manage loads, assign drivers, and track trips with clarity. Designed for dispatchers, it presents data in meaningful dashboards instead of clutter. It reflects real transportation workflows, professional usability, and practical business-oriented engineering.",
    category: "Operations System",
    year: "2024",
    technologies: ["React.js"],
  },
  {
    id: 5,
    title: "BGC – Cab Booking Platform",
    description:
      "BGC is a smooth cab booking platform offering guided ride selection, pickup and drop entry, review flow, and secure confirmation. Built with strong UX focus, validations, and responsive layouts, it delivers a real cab service feel with polished UI, user comfort, and structured booking experience.",
    category: "Booking Platform",
    year: "2024",
    technologies: ["React.js"],
  },
  {
    id: 6,
    title: "GBM – Medical Equipment Management System",
    description:
      "GBM is a healthcare equipment management system helping hospitals track devices, maintenance schedules, and operational readiness. Built with Ant Design, it includes UI enhancements, bug fixes, stability improvements, and workflow clarity. It turns complex healthcare asset management into a simple, reliable, and professional digital system.",
    category: "Healthcare Platform",
    year: "2024",
    technologies: ["React.js", "Ant Design"],
  },
  {
    id: 7,
    title: "School of Coding – Learning & Enrollment Platform",
    description:
      "School of Coding is a learning platform designed with engaging layouts, structured sections, and student-focused UX to support digital education. Built with ShadCN for elegant UI and responsiveness, it feels like a real educational product rather than a basic website, offering clarity, usability, and professional presentation.",
    category: "Education Web App",
    year: "2024",
    technologies: ["React.js", "ShadCN"],
  },
  {
    id: 8,
    title: "Rent & Own – Car Renting & Buying Platform",
    description:
      "Rent & Own is an automotive platform allowing users to rent or buy vehicles with structured listings, detailed views, guided workflows, and responsive UI. API integration supports real data while maintaining smooth performance. It feels like a professional marketplace with polished execution and clear product thinking.",
    category: "Automobile Platform",
    year: "2024",
    technologies: ["React.js"],
  },
  {
    id: 9,
    title: "SamiHomes – Real Estate Website",
    description:
      "SamiHomes is a polished real estate platform providing a premium property browsing experience with clean layouts, strong hierarchy, and responsive design. Built using Next.js and Tailwind, it delivers fast performance, clarity, and professional presentation suitable for real business use and trusted digital property showcasing.",
    category: "Website",
    year: "2024",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: 10,
    title: "BuiltBright – Construction Website",
    description:
      "BuiltBright is a professional construction website designed to communicate reliability, service strength, and corporate branding. With structured layouts, responsive performance, and trust-focused UI, it feels like a serious business platform. It demonstrates corporate design understanding, disciplined execution, and strong presentation suited for real construction companies.",
    category: "Website",
    year: "2024",
    technologies: ["React.js", "CSS"],
  },
  {
    id: 11,
    title: "SignedToGod – Web Platform",
    description:
      "SignedToGod is a modern web platform focused on clear layout, visual balance, smooth responsiveness, and elegant design. Built using React and Tailwind, it delivers polished UI behavior and stable performance. It showcases structured design thinking, strong aesthetics, and professional execution suitable for real web experiences.",
    category: "Website",
    year: "2024",
    technologies: ["React.js", "Tailwind"],
  },
  {
    id: 12,
    title: "Smart Global – Business Website",
    description:
      "Smart Global is a professional business website built to showcase services, corporate identity, and strong brand presence. Using React and Tailwind, it delivers performance, structured content, smooth responsiveness, and premium presentation. It reflects business-focused UI planning, branding awareness, and production-quality web development standards.",
    category: "Website",
    year: "2024",
    technologies: ["React.js", "Tailwind"],
  },
  {
    id: 13,
    title: "Sparx Kitchen – Restaurant Website",
    description:
      "Sparx Kitchen is a visually appealing restaurant website that highlights brand identity and customer experience through attractive layouts and engaging design. Built with React and Tailwind for smooth responsiveness and performance, it feels like a real restaurant brand platform instead of a template, delivering professional digital dining presence.",
    category: "Website",
    year: "2024",
    technologies: ["React.js", "Tailwind"],
  },
];

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="w-full max-w-3xl rounded-3xl border bg-card shadow-2xl p-4 md:p-10 h-[580px] md:h-[420px] flex flex-col justify-between"
    >
      <div>
        <span className="text-primary text-sm uppercase tracking-wider">
          {project.category} • {project.year}
        </span>

        <h3 className="text-2xl font-bold mt-3">{project.title}</h3>

        <p className="text-muted-foreground text-base leading-relaxed mt-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-4">
          {project.technologies.slice(0, 4).map((t: string) => (
            <span
              key={t}
              className="px-3 py-2 bg-secondary text-sm rounded border border-border"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
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
            Work Showcase
          </span>

          <h2 className="text-3xl md:text-6xl font-bold mt-3">
            Real-World{" "}
            <span className="text-gradient">Platforms & Systems</span>
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto mt-4 text-base md:text-lg">
            Enterprise and production-ready applications built with real-world
            use cases, scalable architecture, user-centric UI and solid business
            impact. Not just demos — real systems running in real environments.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay, Pagination]}
            autoplay={{ delay: 2800 }}
            pagination={{ clickable: true }}
            style={
              {
                "--swiper-theme-color": "hsl(var(--primary))",
              } as React.CSSProperties
            }
            className="max-w-lg md:max-w-2xl lg:max-w-4xl"
          >
            {projects.map((p) => (
              <SwiperSlide key={p.id}>
                <ProjectCard project={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
