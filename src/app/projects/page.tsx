"use client"

import { motion } from "framer-motion"

interface Project {
  slug: string
  title: string
  image: string
  description: string
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      slug: "projet-1",
      title: "Projet 1",
      image: "/images/projet1.png",
      description: "Description rapide du projet 1",
    },
  ]

  return (
    <section>
      <h1 className="text-center text-3xl text-primary font-bold mb-8">Mes Projets</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            className="border-2 border-primary rounded overflow-hidden w-72 cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-40 object-cover"
            />
            <div className="p-4 bg-white">
              <h2 className="text-xl text-secondary font-semibold">{project.title}</h2>
              <p className="mt-2 text-secondary-light">{project.description}</p>
              <a
                href={`/projects/${project.slug}`}
                className="mt-4 block text-center bg-primary text-white py-2 rounded hover:bg-primary-dark transition duration-300"
              >
                Voir plus
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
