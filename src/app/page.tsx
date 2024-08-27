"use client";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";
import gsap from "gsap";
import Image from "next/image";
import { ScrollToPlugin } from "gsap/all";
import { Timeline } from "@/components/Timeline";
import { ReasonCard, ReasonCardProps } from "@/components/ReasonCard";
import Carousel from "@/components/Carousel";
import { Card } from "@/components/Card";

export default function Home() {
  const workBenefits: ReasonCardProps[] = [
    {
      title: "Innovation",
      description:
        "Acme Inc encourages its employees to think outside the box and explore new ideas.",
      icon: "rocket",
    },
    {
      title: "Collaboration",
      description:
        "The team at Acme Inc works together seamlessly to deliver the best possible solutions.",
      icon: "users",
    },
    {
      title: "Learning",
      description:
        "Acme Inc encourages its employees to continuously learn and grow their skills.",
      icon: "book",
    },
    {
      title: "Recognition",
      description:
        "Acme Inc values the contributions of its employees and recognizes their achievements.",
      icon: "medal",
    },
  ];

  const aboutCards = [
    {
      title: "Experience",
      description:
        "I‘ve worked at various companies, including Acme Inc, where I‘ve honed my skills in full-stack development, project management, and team collaboration.",
    },
    {
      title: "Skills",
      description:
        "My expertise includes JavaScript, React, Node.js, SQL, and cloud infrastructure. I‘m always eager to learn new technologies and improve my craft.",
    },
    {
      title: "Certifications",
      description:
        "I hold various certifications, including AWS Certified Developer, Scrum Master, and CompTIA Security+.",
    },
  ];

  const words = ["Welcome", "Bem-vindo(a)", "Bienvenido(a)"];
  const wordRef = useRef(null);
  const wordIndex = useRef(0);
  const textRef = useRef<HTMLHeadingElement>();
  const text = useRef(null);

  // Typing effect
  useEffect(() => {
    const text = textRef.current.textContent;
    const splitText = text.split("");
    textRef.current.textContent = ""; // Clear the text content

    splitText.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.innerHTML += char === "." ? "<br />" : "";
      textRef.current.appendChild(span);
    });

    gsap.fromTo(
      textRef.current.children,
      { opacity: 0 },
      { opacity: 1, duration: 0.05, stagger: 0.05 }
    );
  }, []);

  // Switch text effect
  useEffect(() => {
    const switchText = () => {
      wordIndex.current = (wordIndex.current + 1) % words.length;
      gsap.to(wordRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          wordRef.current.textContent = words[wordIndex.current];
          gsap.to(wordRef.current, { opacity: 1, duration: 1 });
        },
      });
    };

    const interval = setInterval(switchText, 3000); // Change text every second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  const handleNavigation = (sectionId: string) => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: "#" + sectionId, autoKill: true },
      ease: "power2",
    });
  };

  return (
    <div className={styles.mainContainer}>
      <nav>
        <div>
          <Image
            className={styles.logo}
            src="/logo-buzzvel.svg"
            width={180}
            height={37}
            alt="Buzzvel logo"
            priority
          />
        </div>
        <div className={styles.navOptions}>
          <a href="#home" onClick={() => handleNavigation("home")}>
            Home
          </a>
          <a href="#about-me" onClick={() => handleNavigation("about-me")}>
            About me
          </a>
          <a href="#projects" onClick={() => handleNavigation("projects")}>
            Buzzvel Projects
          </a>
          <a href="#career" onClick={() => handleNavigation("career")}>
            Career Timeline
          </a>
        </div>
      </nav>

      <main className={styles.content}>
        <div id="home" className={styles.home}>
          <h1 className={styles.welcomeMessage} ref={wordRef}>
            {words[0]}
          </h1>
          <p className={styles.introduction} ref={textRef}>
            I&lsquo;m George Lucas, a passionate Frontend Developer. Let&lsquo;s
            explore how I can bring value to Buzzvel!
          </p>
        </div>
        <div id="about-me" className={styles.aboutMe}>
          <h1>About me</h1>
          <p>
            I&lsquo;m a frontend developer with over 3 years of experience in
            building web applications. I&lsquo;m passionate about creating
            user-friendly and make solutions to help people to have a better
            life.
          </p>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.grid}>
            {aboutCards.map((card, cardIndex) => (
              <Card
                key={cardIndex}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
        <div>
          <h1>Why I Work at Buzzvel</h1>
          <div className={styles.whyContainer}>
            <div>
              <p>
                Buzzvel is a company that values innovation, collaboration, and
                continuous learning. I&lsquo;m excited to be part of a team that
                is constantly pushing the boundaries of what&lsquo;s possible in
                the tech industry.
              </p>
            </div>
            <div className={styles.reasonsContainer}>
              {workBenefits.map((benefit, benefitIndex) => (
                <ReasonCard
                  key={benefitIndex}
                  title={benefit.title}
                  description={benefit.description}
                  icon={benefit.icon}
                />
              ))}
            </div>
          </div>
        </div>
        <div id="projects">
          <h1>Buzzvel Projects</h1>
          <Carousel />
        </div>
        <div id="career">
          <h1>Career Timeline</h1>
          <Timeline />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
