"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard, { Project } from "../components/ProjectCard";


interface Project {
  slug: string;
  title: string;
  image: string;
  description: string;
}

export default function ProjectsCarousel() {
  const projects: Project[] = [
    {
      slug: "projet-1",
      title: "Neon Calculator",
      image: "/images/calculator.png",
      description: "A responsive calculator app built with Next.js, React, and Tailwind CSS",
    },
    {
      slug: "projet-2",
      title: "Projet 2",
      image: "/images/projet2.png",
      description: "Description rapide du projet 2",
    },
    {
      slug: "projet-3",
      title: "Projet 3",
      image: "/images/projet3.png",
      description: "Description rapide du projet 3",
    },
    {
      slug: "projet-4",
      title: "Projet 4",
      image: "/images/projet4.png",
      description: "Description rapide du projet 4",
    },
  ];

  // original number of projects.
  const originalCount = projects.length;
  // extended array: three copies of the original.
  const extendedProjects = [...projects, ...projects, ...projects];

  // fixed dimensions (in pixels)
  const projectWidth = 256; // equivalent to tailwind's w-64 (if 1rem = 16px)
  const gap = 40; // gap between cards
  const containerWidth = 1024; // assuming max-w-4xl equals 1024px

  // the center of the container is at:
  const centerOffset = containerWidth / 2 - projectWidth / 2;
  // we start with selectedindex in the middle copy.
  const [selectedIndex, setSelectedIndex] = useState(originalCount);
  // a flag to indicate when we need to reset without animation.
  const [resetTransition, setResetTransition] = useState(false);

  // calculate containerx so that the active card's center is at centeroffset.
  const containerX = centerOffset - selectedIndex * (projectWidth + gap);

  // check if the selectedindex is out of the middle copy boundaries,
  // & if so, reset it immediately (with no animation).
  useEffect(() => {
    if (selectedIndex < originalCount) {
      setResetTransition(true);
      setSelectedIndex(selectedIndex + originalCount);
    } else if (selectedIndex >= 2 * originalCount) {
      setResetTransition(true);
      setSelectedIndex(selectedIndex - originalCount);
    } else {
      setResetTransition(false);
    }
  }, [selectedIndex, originalCount]);

  const nextProject = () => {
    setSelectedIndex((prev) => prev + 1);
  };

  const prevProject = () => {
    setSelectedIndex((prev) => prev - 1);
  };

  return (
    <section className="max-w-4xl mx-auto mt-20">
      {/* carousel container */}
      <div className="relative px-8">
        <motion.div
          className="flex items-center "
          animate={{ x: containerX }}
          transition={
            resetTransition
              ? { duration: 0 }
              : { type: "spring", stiffness: 300, damping: 30 }
          }
        >
          {extendedProjects.map((project, index) => {
            // compare modulo so that the active project is consistent.
            const isActive = (index % originalCount) === (selectedIndex % originalCount);
            return (
              <motion.div
                key={index}
                className="w-64 flex-shrink-0 mx-2 "
                animate={{
                  scale: isActive ? 1.1 : 0.9,
                  opacity: isActive ? 1 : 0.6,
                }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover object-top rounded"
                />
                <div className="p-4 bg-secondary-light text-grayCustom-light rounded-xl">
                  <h2 className="text-xl font-allround">{project.title}</h2>
                  <p className="mt-2 text-grayCustom-light-light font-quicksand text-sm">{project.description}</p>
                  <a
                    href={`/projects/${project.slug}`}
                    className="mt-4 block text-center bg-primary text-white py-2 rounded hover:bg-primary-dark transition duration-300"
                  >
                    Voir plus
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* navigation buttons below the carousel */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={prevProject}
          className="rounded-full p-2 text-accent"
        >
          {/* left arrow icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextProject}
          className=" rounded-full p-2 text-accent"
        >
          {/* right arrow icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
