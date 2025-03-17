"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { FaArrowLeft } from "react-icons/fa"

export default function BackButton() {
  const router = useRouter()

  return (
    <motion.button
      onClick={() => router.back()}
      className="p-2 bg-transparent group transition duration-300 mb-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, x: -50 }}
    >
      <FaArrowLeft className="text-4xl text-primary group-hover:text-secondary-light transition-colors duration-300" />
    </motion.button>
  )
}
