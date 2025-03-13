"use client"

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-3xl text-primary font-bold mb-4">À propos de moi</h1>
      <p className="text-secondary">
        Je suis [Votre Nom], avec une solide expérience en développement web. 
        Mon parcours inclut [votre parcours].
      </p>
      <a 
        href="/cv.pdf" 
        download
        className="mt-6 inline-block bg-accent text-white py-2 px-4 rounded hover:bg-accent-dark transition duration-300"
      >
        Télécharger mon CV
      </a>
    </section>
  )
}
