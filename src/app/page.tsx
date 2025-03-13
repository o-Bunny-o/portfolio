"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

// exit (explosion) variant generator – here the duration is set to 5 seconds.
const explosionVariant = (custom: { x: number; y: number; rotate: number }) => ({
  exit: {
    opacity: 0,
    scale: 2,
    x: custom.x,
    y: custom.y,
    rotate: custom.rotate,
    transition: { duration: 5, ease: "easeInOut" },
  },
});

// variant 4 creative tagline (with emojis) to reveal from the center out.
const centerReveal = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0 50% 0 50%)", // from the sides
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0%)", // all there
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

export default function HomePage() {
  const [showContent, setShowContent] = useState(true);
  const router = useRouter();

  const handleEnterClick = () => {
    // exit anim
    setShowContent(false);
    // wait before routing
    setTimeout(() => {
      router.push("/about");
    }, 5000);
  };

  return (
    <motion.section
      className="h-full flex flex-col justify-center items-center p-4"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <AnimatePresence>
        {showContent && (
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            {/* main heading fades in */}
            <motion.h1
              className="text-5xl font-medium text-grayCustom-light mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              exit={explosionVariant({ x: -300, y: -200, rotate: -360 }).exit}
            >
              Welcome to my Portfolio!
            </motion.h1>

            {/* tagline appears with a center-out reveal */}
            <motion.h5
              className="text-2xl font-semibold text-accent mb-10"
              variants={centerReveal}
              initial="hidden"
              animate="visible"
              exit={explosionVariant({ x: 300, y: -100, rotate: 360 }).exit}
            >
              💻✨ Creative, Curious & Always Eager to Learn! ✨🎨
            </motion.h5>

            {/* p fades in */}
            <motion.p
              className="text-sm font-normal text-grayCustom-light mb-8 font-quicksand"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              exit={explosionVariant({ x: 0, y: 300, rotate: 720 }).exit}
            >
              From web development and graphic design to customer service, my journey
              has been all about growing skills and embracing new challenges. Whether
              I&apos;m coding a sleek interface or brainstorming design ideas, I bring
              enthusiasm and adaptability to the table. I&apos;m on the lookout for exciting
              projects and a dynamic team where I can share my energy, take on new
              challenges, and keep learning every step of the way!
            </motion.p>

            {/* enter button */}
            <motion.button
              onClick={handleEnterClick}
              className="bg-primary text-white w-16 h-16 mx-auto flex items-center justify-center rounded-full transform hover:scale-110 transition duration-300 cursor-default"
              exit={explosionVariant({ x: 200, y: 200, rotate: 180 }).exit}
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
    </motion.section>
  );
}
