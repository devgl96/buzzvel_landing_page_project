import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./timeline.module.css";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export function Timeline() {
  const events = [
    {
      date: "2024",
      title: "Start my journey at Buzzvel",
      description:
        "I will understand company principles and learn with senior developers from team. And I will help in the projects with all my tech and agile methodologies knowledge.",
    },
    {
      date: "2025",
      title: "More responsability in projects",
      description:
        "After understand all company and the projects we working, I will have more responsability leading some small projects or a project too. I will help junior developers too",
    },
    {
      date: "2026",
      title: "Lead",
      description: "Created a microsite to apply for Buzzvel.",
    },
  ];

  const timelineRef = useRef(null);

  useEffect(() => {
    const timelineItems = gsap.utils.toArray(`.${styles.timelineItem}`);

    timelineItems.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 }, // Initial state
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom", // Start animation when the top of the item reaches the bottom of the viewport
            end: "bottom top", // End when the bottom of the item reaches the top of the viewport
            toggleActions: "play none none reverse", // Play on enter, reverse on leave
            markers: true, // For debugging: Shows where the animation starts and ends
          },
        }
      );
    });
  }, []);

  return (
    <div className={styles.timeline} ref={timelineRef}>
      {events.map((event, index) => (
        <div
          key={index}
          className={`${styles.timelineItem} ${
            index % 2 === 0 ? styles.left : styles.right
          }`}
        >
          <div className={styles.content}>
            <h3 className={styles.date}>{event.date}</h3>
            <h2 className={styles.title}>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
