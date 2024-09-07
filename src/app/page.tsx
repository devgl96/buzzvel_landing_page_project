"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

import { Timeline } from "@/components/Timeline";
import { ReasonCard } from "@/components/ReasonCard";
import { Carousel } from "@/components/Carousel";
import { Card } from "@/components/Card";
import { GithubIcon } from "@/components/Icons/Github";
import { LinkedinIcon } from "@/components/Icons/Linkedin";
import { TiktokIcon } from "@/components/Icons/Tiktok";
import { WhatsappIcon } from "@/components/Icons/Whatsapp";

import { switchText } from "@/utils/effects/switchText";
import { typeText } from "@/utils/effects/typeText";
import { words, aboutCards, workBenefits } from "@/utils/content";

import styles from "./page.module.css";

export default function Home() {
  const wordRef = useRef<HTMLHeadingElement>(null);
  const wordIndex = useRef(0);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  // Typing effect
  useEffect(() => {
    if (!textRef.current?.textContent) return;

    typeText(textRef);
  }, []);

  // Switch text effect
  useEffect(() => {
    wordIndex.current = switchText(wordRef, words, wordIndex.current); // Call switchText immediately

    const interval = setInterval(() => {
      wordIndex.current = switchText(wordRef, words, wordIndex.current); // Change text every 3 seconds
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [words]); // Add words to the dependency array

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  function handleNavigation(sectionId: string) {
    gsap.to(window, {
      scrollTo: { y: `#${sectionId}`, offsetY: 0, autoKill: true },
      duration: 1.5,
      ease: "power2.inOut",
    });
  }

  function clickHandleNavigation(sectionId: string) {
    return (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault(); // Prevent default anchor behavior
      handleNavigation(sectionId); // Call the smooth scrolling function
    };
  }

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
          <a href="#home" onClick={clickHandleNavigation("home")}>
            Home
          </a>
          <a href="#about-me" onClick={clickHandleNavigation("about-me")}>
            About me
          </a>
          <a href="#projects" onClick={clickHandleNavigation("projects")}>
            Buzzvel Projects
          </a>
          <a href="#career" onClick={clickHandleNavigation("career")}>
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
            I’m George Lucas, a passionate Full Stack Developer with a strong
            background in creating innovative web solutions. Let’s explore how I
            can contribute to Buzzvel’s vision.
          </p>
        </div>
        <section id="about-me" className={styles.aboutMe}>
          <h1>About me</h1>
          <p>
            I&lsquo;m a frontend developer with over 3 years of experience in
            building web applications. I&lsquo;m passionate about creating
            user-friendly and make solutions to help people to have a better
            life.
          </p>

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
        </section>
        <div>
          <h1>Why I Work at Buzzvel</h1>
          <div className={styles.whyContainer}>
            <div
              style={{
                width: "100%",
                textAlign: "justify",
                lineHeight: "30px",
              }}
            >
              <p>
                Buzzvel is at the forefront of innovation, constantly pushing
                the boundaries of what’s possible in the tech industry. I’m
                excited to contribute to real-world problem-solving projects in
                a company that values collaboration, continuous learning, and
                growth. With my experience in full-stack development and a
                passion for learning and adapting, I see Buzzvel as the perfect
                place for me to make a meaningful impact while growing as a
                professional.
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
          <Carousel />
        </div>
        <div id="career">
          <h1>Career Timeline</h1>
          <Timeline />
        </div>
      </main>
      <footer className={styles.footerContainer}>
        <p>Developed by George Lucas</p>
        <div className={styles.footerIconContainer}>
          <Link href={"https://github.com/devgl96"} target="_blank">
            <div className={styles.footerIcon}>
              <GithubIcon width={"26px"} height={"26px"} />
            </div>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/georgelucas-dev/"}
            target="_blank"
          >
            <div className={styles.footerIcon}>
              <LinkedinIcon width={"23px"} height={"23px"} />
            </div>
          </Link>
          <Link href={"https://wa.me/5573982263864"} target="_blank">
            <div className={styles.footerIcon}>
              <WhatsappIcon width={"23px"} height={"23px"} />
            </div>
          </Link>
          <Link
            href={"https://www.tiktok.com/@georgelucas.dev"}
            target="_blank"
          >
            <div className={styles.footerIcon}>
              <TiktokIcon width={"23px"} height={"23px"} />
            </div>
          </Link>
        </div>
      </footer>
    </div>
  );
}
