import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import styles from "./carousel.module.css";

export function Carousel() {
  const carouselRef = useRef(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = useCallback((el: HTMLDivElement | null, index: number) => {
    slidesRef.current[index] = el;
  }, []);

  const slides = [
    {
      image:
        "https://buzzvel.com/storage/conversions/459/conversions/Frame-11990-min-normal.webp",
      title: "Viplant",
      description:
        "We created a new website for VIPLANT with the main aim of enhancing the user experience, extending the quality of the physical purchase to the digital environment.",
      link: "https://buzzvel.com/portfolio/viplant",
    },
    {
      image:
        "https://buzzvel.com/storage/conversions/297/conversions/Img1-(1)-normal.webp",
      title: "Traquinices",
      description:
        "Traquinices is a company that was born in Portugal in 1996. It specializes in the distribution of premium Childcare products to provide the best satisfaction to customers.",
      link: "https://buzzvel.com/portfolio/traquinices",
    },
    {
      image:
        "https://buzzvel.com/storage/conversions/182/conversions/Img1-normal.webp",
      title: "DBS",
      description:
        "We built this platform and APP that allowed primary users to track medical tests.",
      link: "https://buzzvel.com/portfolio/dbs",
    },
    {
      image:
        "https://buzzvel.com/storage/conversions/61/conversions/featured-misscan-normal.webp",
      title: "Miss Can",
      description:
        "A Portuguese and family project of the canning industry with 3 generations of history and tradition. Canned food produced in Portugal, with Portuguese fish and artisanal.",
      link: "https://buzzvel.com/portfolio/miss-can",
    },
    {
      image:
        "https://buzzvel.com/storage/conversions/52/conversions/featured-thinkferidas-normal.webp",
      title: "ThinkFeridas",
      description:
        "ThinkFeridas is an application that responds to the need of many health professionals who work alone in the clinical decision regarding treating complex wounds.",
      link: "https://buzzvel.com/portfolio/thinkferidas",
    },
    {
      image:
        "https://buzzvel.com/storage/conversions/45/conversions/featured-vigias-normal.webp",
      title: "Vigias da Arriba",
      description:
        "Vigias da Arriba is a luxury, unique and exclusive condominium with several villas with a superb sea view. It is located in Torres Vedras.",
      link: "https://buzzvel.com/portfolio/vigias-da-arriba",
    },
    {
      image:
        "https://buzzvel.com/storage/conversions/33/conversions/featured-pah-normal.webp",
      title: "Portugal Advanced Health",
      description:
        "Portugal Advanced Health or PAH is an innovative and pioneering project in the area of health in Portugal, specializing in hyperbaric treatments at 1.4atm (atmosphere).",
      link: "https://buzzvel.com/portfolio/portugal-advanced-health",
    },
    {
      image:
        "https://buzzvel.com/storage/conversions/28/conversions/featured-comaouleve-normal.webp",
      title: "Coma ou Leve",
      description:
        "An original concept, on the market since 1976. Meals ready to eat, with a history that stay in the memory of those who visit them.",
      link: "https://buzzvel.com/portfolio/coma-ou-leve",
    },
    {
      image:
        "https://buzzvel.com/storage/conversions/20/conversions/featured-hotspotty-normal.webp",
      title: "Hotspotty",
      description:
        "An innovative 'All-in-One' platform to plan, manage and optimize decentralized networks such as the global Helium network for the Internet of Things.",
      link: "https://buzzvel.com/portfolio/hotspotty",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(slidesRef.current, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top top",
          end: "+=3000", // Adjust this to control the scroll distance
          pin: true,
          scrub: 1,
          snap: 1 / (slides.length - 1),
        },
      });
    }, carouselRef);

    return () => ctx.revert(); // Clean up GSAP context on component unmount
  }, [slides.length]);

  return (
    <div className={styles.carousel} ref={carouselRef}>
      <div className={styles.carouselTrack}>
        {slides.map((slide, index) => (
          <div
            className={styles.carouselSlide}
            key={index}
            ref={(el) => setRef(el, index)}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="fill"
              quality={100}
              className={styles.carouselImage}
            />
            <div className={styles.carouselContent}>
              <h2 className={styles.carouselTitle}>{slide.title}</h2>
              <p className={styles.carouselDescription}>{slide.description}</p>
              <a
                href={slide.link}
                className={styles.carouselLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
