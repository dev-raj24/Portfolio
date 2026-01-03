import { motion } from "framer-motion";
import {
  Code2,
  LayoutDashboard,
  Shield,
  Zap,
  Globe,
  Link,
  Terminal,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Production Web Platforms",
    command: "build --production",
    description:
      "Building scalable, real-world platforms like education systems, logistics platforms, cab booking and business applications using React & Next.js.",
    tags: ["React", "Next.js", "TypeScript"],
    size: "large",
  },

  {
    icon: LayoutDashboard,
    title: "Admin Panels & Dashboards",
    command: "create --dashboard",
    description:
      "Designing powerful dashboards for analytics, admin operations, port management, student systems, and role-based access control.",
    tags: ["Analytics", "Admin", "RBAC"],
    size: "medium",
  },

  {
    icon: Link,
    title: "Real-Time Systems & APIs",
    command: "sync --realtime",
    description:
      "Developing real-time features such as live updates, notifications, messaging, tracking workflows, and reliable REST API integrations.",
    tags: ["Socket.io", "REST", "Real-time"],
    size: "medium",
  },

  {
    icon: Shield,
    title: "Authentication & Identity",
    command: "secure --auth",
    description:
      "Implementing secure login systems with Google OAuth, JWT authentication, protected routes, sessions, and Sumsub identity verification.",
    tags: ["OAuth", "JWT", "Sumsub"],
    size: "small",
  },

  {
    icon: Globe,
    title: "Payments & Transactions",
    command: "integrate --stripe",
    description:
      "Building real payment systems including Stripe integration, fees, payouts, commissions, and secure transaction handling.",
    tags: ["Stripe", "Payments", "Payouts"],
    size: "small",
  },

  {
    icon: Zap,
    title: "Performance & User Experience",
    command: "optimize --speed",
    description:
      "Improving application performance with caching, SSR, lazy loading, React Query optimization, and smooth user experience enhancements.",
    tags: ["Optimization", "UX", "Speed"],
    size: "small",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const isLarge = service.size === "large";
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 ${""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/30 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-destructive/70" />
          <span className="h-3 w-3 rounded-full bg-terminal-yellow/70" />
          <span className="h-3 w-3 rounded-full bg-primary/70" />
        </div>
        <div className="flex items-center gap-2 ml-3">
          <Terminal className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="font-mono text-xs text-muted-foreground">
            ~/services
          </span>
        </div>
      </div>

      <div className={`p-6 `}>
        <div className="flex items-center gap-2 mb-4 font-mono text-sm">
          <ChevronRight className="h-4 w-4 text-primary" />
          <span className="text-primary">{service.command}</span>
          <span className="blink text-primary">_</span>
        </div>

        <div className="mb-4 inline-flex items-center justify-center rounded-xl border border-primary/20 bg-primary/10 p-3 transition-all duration-300 group-hover:bg-primary/20 group-hover:glow-primary">
          <service.icon className={`text-primary  "h-6 w-6"`} />
        </div>

        <h3
          className={`font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors ${"text-xl"}`}
        >
          {service?.title}
        </h3>

        <p
          className={`text-muted-foreground leading-relaxed ${
            isLarge ? "text-base" : "text-sm"
          }`}
        >
          {service?.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {service?.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs text-primary/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="absolute -inset-px rounded-2xl border border-primary/20" />
      </div>

      {/* Corner Accent */}
      <div className="absolute bottom-0 right-0 h-20 w-20 bg-gradient-to-tl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/5 blur-[100px] animate-float" />
      <div
        className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/5 blur-[120px] animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase">
            Services
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4">
            What I <span className="text-gradient">Build</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-body mt-6">
            Real-world web platforms, dashboards, real-time apps, authentication
            systems, secure payments, and performance-driven digital experiences
            — built with clean code and scalable architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {services?.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
