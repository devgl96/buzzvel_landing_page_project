import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { events } from "@/utils/content";

import styles from "./timeline.module.css";

export function Timeline() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timelineItems = gsap.utils.toArray(
      `.${styles.timelineItem}`
    ) as HTMLElement[];

    timelineItems.forEach((item: HTMLElement) => {
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
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);
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
