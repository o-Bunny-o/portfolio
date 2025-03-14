"use client";

import { motion } from "framer-motion";

interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      slug: "neon-calculator",
      title: "Neon Calculator",
      subtitle: "a calculator with a neon vibe",
      description:
        "A responsive calculator app built with Next.js, React, and Tailwind CSS.",
      // image: "/images/calculator.png", // tbd
    },
    {
      slug: "la-porte",
      title: "La Porte",
      subtitle: "a modern door concept",
      description:
        "A quick description for 'La Porte' project, highlighting key features or technologies used.",
    },

  ];

  // 4 variants 4 movement inwards
  const slideVariants = [
    {
      hidden: { opacity: 0, x: -100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 },
      },
    },
    {
      hidden: { opacity: 0, x: 100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 },
      },
    },
    {
      hidden: { opacity: 0, y: -100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      },
    },
    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      },
    },
  ];

  return (
    <section className="max-w-4xl mx-auto mt-16 px-4">
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            className={`
              relative p-8 rounded-lg 
              bg-white/5        /* Almost transparent background */
              border border-white/50 
              shadow-[0_0_10px_rgba(255,255,255,0.5)] /* Glowing border shadow */
              flex flex-col items-center
              min-h-[250px]     /* Adjust height as needed */
              md:min-h-[300px]  /* Slightly taller on bigger screens */
            `}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideVariants[index % slideVariants.length]}
          >
            {/* for images
            <img
              src={project.image}
              alt={project.title}
              className="mb-4 w-full max-w-sm object-cover rounded"
            />
            */}

            {/* title */}
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-2">
              {project.title}
            </h2>

            {/* subt */}
            <h3 className="text-xl text-primary mb-4 font-semibold">
              {project.subtitle}
            </h3>

            {/* description */}
            <p className="text-gray-300 text-sm md:text-base max-w-xl text-center mb-6">
              {project.description}
            </p>

            {/* "details */}
            <a
              href={`/projects/${project.slug}`}
              className="bg-primary text-white py-2 px-6 rounded 
                         hover:bg-primary-dark transition duration-300"
            >
              Details
            </a>


          </motion.div>
        ))}
      </div>
    </section>
  );
}
