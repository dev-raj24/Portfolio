"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 96 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 96 },
      { name: "Material UI / Ant Design / ShadCN", level: 94 },
    ],
  },
  {
    title: "State & Data Handling",
    skills: [
      { name: "React Query", level: 92 },
      { name: "Redux", level: 90 },
      { name: "REST APIs", level: 95 },
      { name: "Real-time (Socket.io)", level: 88 },
      { name: "Performance & Optimization", level: 90 },
    ],
  },
  {
    title: "Platforms & Integrations",
    skills: [
      { name: "Stripe Payments", level: 90 },
      { name: "Google OAuth", level: 92 },
      { name: "Sumsub (KYC / Verification)", level: 88 },
      { name: "API Integration", level: 94 },
      { name: "Responsive UI & Architecture", level: 96 },
    ],
  },
];

const tools = [
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Material UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 bg-card/30">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase">
            Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-body mt-6">
            A toolkit built through real-world projects, product development,
            and hands-on experience.
          </p>
        </motion.div>

        {/* Skill Progress Bars */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-display font-semibold mb-8 text-primary">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-display text-sm">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-muted-foreground font-display mb-10">
            Tools I Use Daily
          </h3>

          <div className="relative">
            {/* Fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <Swiper
              modules={[FreeMode, Autoplay]}
              freeMode={true}
              loop={true}
              grabCursor={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={3000}
              slidesPerView={6}
              spaceBetween={30}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10 },
                480: { slidesPerView: 3, spaceBetween: 15 },
                768: { slidesPerView: 4, spaceBetween: 20 },
                1024: { slidesPerView: 6, spaceBetween: 30 },
              }}
            >
              {tools.map((tool, index) => (
                <SwiperSlide key={tool.name + index}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-secondary/40 border border-border/40 shadow-lg backdrop-blur-sm flex items-center justify-center">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>

                    <span className="text-sm text-muted-foreground font-display">
                      {tool.name}
                    </span>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
