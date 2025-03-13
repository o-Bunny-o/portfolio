"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

// a single dust particle that animates & loops every 15 seconds.
function DustParticle({ offsetX, offsetY }: { offsetX: number; offsetY: number }) {
  const variants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: [0, offsetX, 0],
      y: [0, offsetY, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 13, // 2 + 13 = 15 seconds per cycle
      },
    },
  };

  return (
    <motion.div
      className="absolute bg-primary-light rounded-full"
      style={{ width: 5, height: 5 }}
      variants={variants}
      initial="initial"
      animate="animate"
    />
  );
}

// renders a set of dust particles positioned at the bottom center of the link.
function DustParticles() {
  const particleCount = 5;
  const particles = Array.from({ length: particleCount });
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none">
      {particles.map((_, i) => {
        // each particle gets a random horizontal offset from -30px to 30px.
        const offsetX = Math.random() * 60 - 30;
        // & a random vertical offset from 0 to 30px (downward).
        const offsetY = Math.random() * 30;
        return <DustParticle key={i} offsetX={offsetX} offsetY={offsetY} />;
      })}
    </div>
  );
}

// dust particles from the bottom center of the active link,
// & uses a pale text color & lower opacity on inactive links.
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div className="relative inline-block">
        {isActive && <DustParticles />}
        <motion.span
          className={`relative inline-block transform hover:scale-110 transition duration-300 text-2xl ${
            isActive ? "text-primary" : "text-gray-400 opacity-50"
          }`}
        >
          {children}
        </motion.span>
      </div>
    </Link>
  );
}

export default function Header() {
  return (
    <motion.header
      className="text-primary p-2 mt-5"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="pt-5 flex justify-center space-x-4">
        <ul className="flex space-x-10">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/about">About me</NavLink></li>
          <li><NavLink href="/projects">Projects</NavLink></li>
          <li><NavLink href="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </motion.header>
  );
}
