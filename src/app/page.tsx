"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useMotionValue, animate } from "framer-motion";

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
      className="absolute rounded-full bg-white"
      style={{ width: "8px", height: "8px" }}
      variants={variants}
      initial="initial"
      animate="animate"
    />
  );
}

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

const explosionVariant = (custom: { x: number; y: number }) => ({
  exit: {
    opacity: 0,
    scale: 2,
    x: custom.x,
    y: custom.y,
    transition: { duration: 5, ease: "easeInOut" },
  },
});

const centerReveal = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0 50% 0 50%)",
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0%)",
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

export default function HomePage() {
  const [showContent, setShowContent] = useState(true);
  const router = useRouter();

  // Draggable motion values
  const headingX = useMotionValue(0);
  const headingY = useMotionValue(0);
  const taglineX = useMotionValue(0);
  const taglineY = useMotionValue(0);
  const paragraphX = useMotionValue(0);
  const paragraphY = useMotionValue(0);

  // Reset function
  const resetPositions = () => {
    animate(headingX, 0, { type: "spring", stiffness: 300, damping: 20 });
    animate(headingY, 0, { type: "spring", stiffness: 300, damping: 20 });
    animate(taglineX, 0, { type: "spring", stiffness: 300, damping: 20 });
    animate(taglineY, 0, { type: "spring", stiffness: 300, damping: 20 });
    animate(paragraphX, 0, { type: "spring", stiffness: 300, damping: 20 });
    animate(paragraphY, 0, { type: "spring", stiffness: 300, damping: 20 });
  };

  const handleEnterClick = () => {
    setShowContent(false);
    setTimeout(() => {
      router.push("/about");
    }, 200);
  };

  return (
    <motion.section
      className="h-full flex flex-col justify-center items-center p-4 relative pb-16"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <DustParticles />

      <AnimatePresence>
        {showContent && (
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <motion.h1
              className="text-5xl font-medium text-grayCustom-light mb-6"
              style={{ x: headingX, y: headingY }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              exit={explosionVariant({ x: -600, y: -200 }).exit}
              drag
              dragElastic={0.8}
              dragConstraints={{ top: -100, bottom: 100, left: -100, right: 100 }}
            >
              Welcome to my Portfolio!
            </motion.h1>

            <motion.h5
              className="text-2xl font-semibold text-accent mb-10"
              style={{ x: taglineX, y: taglineY }}
              variants={centerReveal}
              initial="hidden"
              animate="visible"
              exit={explosionVariant({ x: 300, y: -300 }).exit}
              drag
              dragElastic={0.8}
              dragConstraints={{ top: -100, bottom: 100, left: -100, right: 100 }}
            >
              💻✨ Creative, Curious & Always Eager to Learn! ✨🎨
            </motion.h5>

            <motion.p
              className="text-sm font-normal text-grayCustom-light mb-8 font-quicksand"
              style={{ x: paragraphX, y: paragraphY }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              exit={explosionVariant({ x: -600, y: 0 }).exit}
              drag
              dragElastic={0.8}
              dragConstraints={{ top: -100, bottom: 100, left: -100, right: 100 }}
            >
              From web development and graphic design to customer service, my journey
              has been all about growing skills and embracing new challenges. Whether
              I&apos;m coding a sleek interface or brainstorming design ideas, I bring
              enthusiasm and adaptability to the table. I&apos;m on the lookout for exciting
              projects and a dynamic team where I can share my energy, take on new
              challenges, and keep learning every step of the way!
            </motion.p>

            <motion.button
              onClick={handleEnterClick}
              className="bg-primary text-white w-16 h-16 mx-auto flex items-center justify-center rounded-full transform hover:scale-110 transition duration-300 cursor-default"
              exit={explosionVariant({ x: 0, y: 600 }).exit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={resetPositions}
        // Move button above the phone bar
        className="absolute bottom-8 mx-5 text-accent rounded-full transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-arrow-clockwise"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
          />
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
        </svg>
      </button>
    </motion.section>
  );
}
