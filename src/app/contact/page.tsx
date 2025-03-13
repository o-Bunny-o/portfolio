"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulaire envoyé:", form)
  }

  return (
    <motion.section
      className="max-w-lg mx-auto"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-center text-3xl text-primary font-bold mb-6">Contactez-moi</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label className="flex flex-col">
          <span className="text-secondary">Nom:</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-secondary rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-secondary">Email:</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="border border-secondary rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-secondary">Message:</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="border border-secondary rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </label>
        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
        >
          Envoyer
        </button>
      </form>
    </motion.section>
  )
}
