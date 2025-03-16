"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  category: "design" | "dev";
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      slug: "neon-calculator",
      title: "Neon Calculator",
      subtitle: "calculator with a neon vibe",
      description:
        "A responsive calculator app built with Next.js, React, and Tailwind CSS.",
      image: "/images/calculator.png",
      category: "dev",
    },
    {
      slug: "la-porte",
      title: "La Porte",
      subtitle: "web game",
      description:
        "Help a unicorn to ge the key and run away from the mean ogers",
      image: "/images/laportelogo.png",
      category: "dev",
    },
    {
      slug: "todo-list",
      title: "Todo List",
      subtitle: "todo-list with a neon vibe",
      description:
        "A quick description for 'La Porte' project, highlighting key features or technologies used.",
      image: "/images/todolist.png",
      category: "dev",
    },
    {
      slug: "premiers-vendredis",
      title: "Lest Premiers Vendredis",
      subtitle: "Promotion design",
      description:
        "A quick description for 'La Porte' project, highlighting key features or technologies used.",
      image: "/images/premiers.jpg",
      category: "design",
    },
    {
      slug: "icons",
      title: " Milano Cortina 2026",
      subtitle: "Icons set",
      description:
        "A quick description for 'La Porte' project, highlighting key features or technologies used.",
      image: "/images/icons.jpg",
      category: "design",
    },
  ];

  // 4 variants for slide-in animations from different directions.
  const slideVariants = [
    {
      hidden: { opacity: 0, x: -300 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    {
      hidden: { opacity: 0, x: 300 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    {
      hidden: { opacity: 0, y: -100 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    },
    {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    },
  ];

  // filter
  const [filter, setFilter] = useState<"all" | "design" | "dev">("all");

  // filtered list
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  // filter button containers
  const filterContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="max-w-4xl mx-auto mt-16 px-4">
      {/* f-b-anim */}
      <motion.div
        className="mb-6 flex gap-4 text-sm"
        initial="hidden"
        animate="visible"
        variants={filterContainerVariants}
      >
        <button
          onClick={() => setFilter("all")}
          className={`${
            filter === "all"
              ? "bg-primary text-white"
              : "border border-secondary-light bg-secondary text-white"
          } px-4 py-2 rounded transition duration-300`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("dev")}
          className={`${
            filter === "dev"
              ? "bg-primary text-white"
              : "border border-secondary-light bg-secondary text-white"
          } px-4 py-2 rounded transition duration-300`}
        >
          Dev
        </button>
        <button
          onClick={() => setFilter("design")}
          className={`${
            filter === "design"
              ? "bg-primary text-white"
              : "border border-secondary-light bg-secondary text-white"
          } px-4 py-2 rounded transition duration-300`}
        >
          Design
        </button>
      </motion.div>

      {/* projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => {
          const randomRotation = Math.random() * 10 - 5; // -5° to 5°
          const randomX = Math.random() * 40 - 10;       // -10px to 30px
          const randomY = Math.random() * 20 - 50;       // -50px to -30px

          return (
            <motion.div
              key={project.slug}
              className={`
                relative p-6 rounded-lg 
                border border-secondary-light 
                flex flex-col 
                min-h-[250px]     
                md:min-h-[480px] 
                min-w-[150px]
                md:min-w-[200px]
                md:max-w-[250px]
                w-full              
              `}
              style={{
                transform: `rotate(${randomRotation}deg) translate(${randomX}px, ${randomY}px)`,
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideVariants[index % slideVariants.length]}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-2 w-60 mx-auto h-48 object-cover rounded"
                />
              )}
              {/* title and subtitle container with fixed height */}
              <div className="w-full h-24">
                {/* title */}
                <h2 className="text-2xl md:text-2xl font-bold text-accent mb-2 text-left">
                  {project.title}
                </h2>
                {/* subtitle */}
                <h3 className="text-md text-primary mb-4 font-light">
                  {project.subtitle}
                </h3>
              </div>
              {/* description */}
              <p className="text-gray-300 text-sm md:text-base max-w-xl text-left font-quicksand font-light mb-6">
                {project.description}
              </p>
              {/* "Details" button */}
              <a
                href={`/projects/${project.slug}`}
                className="absolute bottom-4 right-4 border-2 border-secondary-light text-white py-1 px-4 rounded hover:bg-accent transition duration-300"
              >
                Details
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
