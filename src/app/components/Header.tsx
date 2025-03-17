"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        repeatDelay: 13,
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
        const offsetX = Math.random() * 60 - 30;
        const offsetY = Math.random() * 30;
        return <DustParticle key={i} offsetX={offsetX} offsetY={offsetY} />;
      })}
    </div>
  );
}

// dust particles from the bottom center of the active link,
// & uses a pale text color & lower opacity on inactive links.
function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div className="relative inline-block" onClick={onClick}>
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
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // outside click closes it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuOpen && mobileNavRef.current && !mobileNavRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <AnimatePresence mode="wait">
      <motion.header
        key={pathname} // routchange remount
        className="text-primary p-2 mt-5 relative"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-between items-center">
<img
  src="/images/logo.png"
  alt="MyPortfolio"
  className="block md:hidden w-48 h-auto mx-8"
/>

          {/* centered desktpo navs */}
          <nav className="hidden md:flex flex-grow justify-center">
            <ul className="flex space-x-10">
              <li><NavLink href="/">Home</NavLink></li>
              <li><NavLink href="/about">About me</NavLink></li>
              <li><NavLink href="/projects">Projects</NavLink></li>
              <li><NavLink href="/contact">Contact</NavLink></li>
            </ul>
          </nav>

          {/* burger on the right */}
          <div className="block md:hidden">
            <button
              className="text-primary focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                // X - close
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // birger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* mobile nav menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              ref={mobileNavRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-2"
            >
              <ul className="flex flex-col space-y-2">
                <li>
                  <NavLink href="/" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/about" onClick={() => setMobileMenuOpen(false)}>
                    About me
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/projects" onClick={() => setMobileMenuOpen(false)}>
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}
