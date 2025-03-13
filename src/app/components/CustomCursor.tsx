"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    //custom cursor element (orange ball)
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    document.body.appendChild(cursor);

    // container 4 dust particles
    const dustContainer = document.createElement("div");
    dustContainer.id = "dust-container";
    document.body.appendChild(dustContainer);

    // update cursor position & create dust particles on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      // position the custom cursor centered at the mouse coordinates
      cursor.style.left = e.clientX - 10 + "px";
      cursor.style.top = e.clientY - 10 + "px";

      // dust particle at the current mouse position
      const dust = document.createElement("div");
      dust.className = "dust";
      dust.style.left = e.clientX + "px";
      dust.style.top = e.clientY + "px";
      dustContainer.appendChild(dust);

      // - the dust particle after its animation completes
      dust.addEventListener("animationend", () => {
        dust.remove();
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // change cursor color on interactive elements hover
    const interactiveElements = document.querySelectorAll("a, button, .clickable, submit");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.backgroundColor = "#ffffff"; 
      });
      el.addEventListener("mouseleave", () => {
        cursor.style.backgroundColor = "#f06400"; 
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cursor.remove();
      dustContainer.remove();
    };
  }, []);

  return null;
}
