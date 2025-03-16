"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
    console.log("Formulaire envoyé:", form);
  };

  return (
    <motion.section
      className="max-w-lg mx-auto"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-10">
        <label className="flex flex-col">
          <span className="text-primary">Name:</span>
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
          <span className="text-primary">Email:</span>
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
          <span className="text-primary">Message:</span>
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
          SEND
        </button>
        {status === "loading" && <p className="text-primary">Sending...</p>}
        {status === "success" && <p className="text-primary">Message sent successfully!</p>}
        {status === "error" && <p className="text-primary">Error sending message.</p>}
      </form>
    </motion.section>
  );
}
