"use client";

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto">
      <p className="text-grayCustom-light font-quicksand text-sm mt-10 px-10">
        I&apos;m Pam — part web developer, part graphic designer, and part illustrator — all rolled into one creative bundle. Think of me as a digital Swiss Army knife, blending code, colour, and creativity to craft memorable experiences.<br /><br />
        My journey has been anything but ordinary. I&apos;ve dabbled in everything from snapping photos in bustling events to designing sleek logos and building web applications that just work. Whether I&apos;m adjusting the perfect light for a photoshoot or tweaking a stubborn line of code, I dive in with energy and a keen eye for detail.<br /><br />
        I love turning ideas into reality — whether that means designing vibrant visuals, developing user-friendly websites, or finding clever solutions to tricky problems. With skills in React, Next.js, Adobe Suite, and more, I&apos;m all about creating designs that pop and interfaces that feel just right.<br /><br />
        Curious by nature and driven by creativity, I&apos;m always up for a challenge — especially the kind that calls for thinking outside the box. If there&apos;s a project that needs a mix of technical know-how, artistic flair, and a sprinkle of fun, count me in!
      </p>
      <div className="flex justify-center gap-6 mt-6">
        {/* Download CV button with icon and label inside */}
        <a
          href="/pamOrtiz.pdf"
          download
          className="flex flex-col items-center bg-accent text-white w-16 h-16 rounded-full transform hover:scale-110 transition duration-300"
        >
          <span className="text-sm pt-3 font-quicksand font-medium">CV</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
          </svg>
        </a>
        {/* View CV button with icon and label inside */}
        <a
          href="/pamOrtiz.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-primary text-white w-16 h-16 rounded-full transform hover:scale-110 transition duration-300"
        >
          <span className="text-sm pt-3 font-quicksand font-medium">CV</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
