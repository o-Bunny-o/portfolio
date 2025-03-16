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
    slug: "neon-calculator",
    title: "Neon Calculator",
    image: "/images/calculator.png",
    description: "Description détaillée du projet 1",
    technologies: "React, Next.js, Tailwind CSS",
    challenges: "Intégration d'une API externe et animation",
  },
  "projet-2": {
    slug: "la-porte",
    title: "La Porte",
    image: "/images/laportelogo.png",
    description: "Description détaillée du projet 2",
    technologies: "HTML, CSS, JavaScript",
    challenges: "Création d'un design responsive",
  },
  "projet-3": {
    slug: "todo-list",
    title: "Todo List",
    image: "/images/todolist.png",
    description: "Description détaillée du projet 3",
    technologies: "React, Redux",
    challenges: "Gestion d'état complexe",
  },
  "projet-4": {
    slug: "premiers-vendredis",
    title: "Les Premiers Vendredis",
    image: "/images/premiers.jpg",
    description: "Description détaillée du projet 4",
    technologies: "Next.js, Tailwind CSS",
    challenges: "Rendu côté serveur et optimisation SEO",
  },
  "projet-5": {
    slug: "icons",
    title: "LMilano Cortina",
    image: "/images/picons.jpg",
    description: "Description détaillée du projet 4",
    technologies: "Next.js, Tailwind CSS",
    challenges: "Rendu côté serveur et optimisation SEO",
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
      <h1 className="text-xl text-primary font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <p className="text-secondary mb-4">{project.description}</p>
      <p className="mb-2">
        <strong>Tech Used:</strong> {project.technologies}
      </p>
      <p>
        <strong>Challenges|Struggles:</strong> {project.challenges}
      </p>
    </section>
  )
}
