// src/app/components/Header.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      className="text-primary p-2" // minimal padding
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: .8 }}
    >
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About me</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </motion.header>
  );
}
