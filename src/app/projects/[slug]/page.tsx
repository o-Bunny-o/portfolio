"use client"

import { useParams } from "next/navigation"

interface ProjectData {
  [key: string]: {
    slug: string
    title: string
    image: string
    description: string
    technologies: string
    challenges: string
  }
}

const PROJECT_DATA: ProjectData = {
  "projet-1": {
    slug: "projet-1",
    title: "Projet 1",
    image: "/images/projet1.png",
    description: "Description détaillée du projet 1",
    technologies: "React, Next.js, Tailwind CSS",
    challenges: "Intégration d'une API externe et animation",
  },
}

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params?.slug as string

  const project = PROJECT_DATA[slug]

  if (!project) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl text-primary">Projet introuvable</h1>
      </div>
    )
  }

  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-3xl text-primary font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <p className="text-secondary mb-4">{project.description}</p>
      <p className="mb-2">
        <strong>Technologies utilisées:</strong> {project.technologies}
      </p>
      <p>
        <strong>Défis rencontrés:</strong> {project.challenges}
      </p>
    </section>
  )
}
