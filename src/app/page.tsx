"use client";
import styles from "./page.module.css";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollToPlugin } from "gsap/all";
import { Timeline } from "@/components/Timeline";

export default function Home() {
  const words = ["Welcome", "Bem-vindo(a)", "Bienvenidos"];
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
    console.log(
      "🧐 >>> file: page.tsx:59 >>> handleNavigation >>> sectionId:",
      sectionId
    );

    gsap.to(window, {
      duration: 2,
      scrollTo: { y: "#" + sectionId, autoKill: true },
      ease: "power2",
    });
  };

  // gsap.to(window, { duration: 2, scrollTo: 400 });

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

      <main>
        {/* <Image
          src={"/macbook_desk_books.jpg"}
          layout="fill"
          // objectFit="cover"
          // objectPosition="center"
          alt="A macbook on the desk in the right side with some books and pens in the left side"
          className={styles.heroImage}
        /> */}
        <div id="home">
          <h1 className="intro-title" ref={wordRef}>
            {words[0]}
          </h1>
          <p className="intro-subtitle" ref={textRef}>
            Hi, I&lsquo;m George Lucas, a passionate Frontend Developer.
            Let&lsquo;s explore how I can bring value to Buzzvel!
          </p>
        </div>
        <div id="about-me">
          <h1>About me</h1>
          <h2>Experience</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Skills</h2>
              <p>I solve problems using Typescript and React</p>
              <p>
                Sometimes I code using Python to automate process or create
                something new
              </p>
            </div>
            <div className={styles.card}>
              <h2>Projects</h2>
              <p>
                I did some dashboards using React and Recharts to show data in
                friendly way
              </p>
            </div>
            <div className={styles.card}>
              <h2>Personal Projects</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum reprehenderit ea perferendis, eligendi nam delectus
                quis repudiandae natus numquam quos eius similique ipsum
                laudantium nisi, perspiciatis architecto! Ad ducimus nisi
                obcaecati culpa? Magni expedita fugit quis optio, iusto rerum.
                Libero, odio et perferendis blanditiis eos praesentium excepturi
                vel consequuntur ducimus qui, animi harum similique quidem
                delectus? Ducimus dolore repellendus aperiam aut saepe,
                reprehenderit, nemo enim voluptas totam fugit nobis tempore
                eligendi provident veritatis asperiores repudiandae commodi sed!
                Unde sequi ullam, nisi iure libero voluptatibus dolorum veniam
                possimus fugit dolorem praesentium qui blanditiis provident eius
                placeat corrupti ratione inventore dignissimos autem mollitia
                omnis? Amet expedita, labore at saepe culpa velit, sapiente sed
                vitae aperiam maxime enim sequi. Quos delectus assumenda facere
                sed molestiae natus voluptatem illo quisquam, eaque quod libero
                sunt cum neque odio? Ea nemo explicabo dolores nulla nobis
                suscipit aspernatur, ad voluptates quidem repudiandae qui magni
                iusto voluptatum placeat architecto consequatur quasi maiores
                quia sapiente necessitatibus itaque, culpa fuga excepturi?
                Consequatur aut nulla commodi. Beatae eum tempora reprehenderit
                debitis explicabo ipsam. Sint, consectetur animi. Temporibus
                sapiente amet architecto iure saepe sunt vero nesciunt
                consequuntur numquam incidunt? Id deleniti iste adipisci nam
                facilis rerum distinctio pariatur, dolore nobis quia quasi ea
                beatae, aspernatur error et voluptates eligendi optio
                accusantium quisquam sed, autem atque deserunt. Esse nihil
                corrupti dolorem assumenda, quia eligendi reprehenderit cum
                impedit commodi officiis animi veniam optio labore amet tempora
                autem obcaecati dicta natus! Velit aperiam, impedit doloribus a
                earum aspernatur.
              </p>
            </div>
          </div>
          <h2>Why Buzzvel</h2>
        </div>
        <div id="projects">
          <h1>Projects</h1>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Viplant</h2>
              <p>
                We created a new website for VIPLANT with the main aim of
                enhancing the user experience, extending the quality of the
                physical purchase to the digital environment.
              </p>
            </div>
            <div className={styles.card}>
              <h2>Traquinices</h2>
              <p>
                Traquinices is a company that was born in Portugal in 1996. It
                specializes in the distribution of premium Childcare products to
                provide the best satisfaction to customers.
              </p>
            </div>
            <div className={styles.card}>
              <h2>DBS</h2>
              <p>
                We built this platform and APP that allowed primary users to
                track medical tests.
              </p>
            </div>
            <div className={styles.card}>
              <h2>Miss Can</h2>
              <p>
                A Portuguese and family project of the canning industry with 3
                generations of history and tradition. Canned food produced in
                Portugal, with Portuguese fish and artisanal.
              </p>
            </div>
            <div className={styles.card}>
              <h2>ThinkFeridas</h2>
              <p>
                ThinkFeridas is an application that responds to the need of many
                health professionals who work alone in the clinical decision
                regarding treating complex wounds.
              </p>
            </div>
            <div className={styles.card}>
              <h2>Vigias da Arriba</h2>
              <p>
                Vigias da Arriba is a luxury, unique and exclusive condominium
                with several villas with a superb sea view. It is located in
                Torres Vedras.
              </p>
            </div>
            <div className={styles.card}>
              <h2>Portugal Advanced Health</h2>
              <p>
                Portugal Advanced Health or PAH is an innovative and pioneering
                project in the area of health in Portugal, specializing in
                hyperbaric treatments at 1.4atm (atmosphere).
              </p>
            </div>
            <div className={styles.card}>
              <h2>Coma ou Leve</h2>
              <p>
                An original concept, on the market since 1976. Meals ready to
                eat, with a history that stay in the memory of those who visit
                them.
              </p>
            </div>
            <div className={styles.card}>
              <h2>Hotspotty</h2>
              <p>
                An innovative &quot;All-in-One&quot; platform to plan, manage
                and optimize decentralized networks such as the global Helium
                network for the Internet of Things.
              </p>
            </div>
          </div>
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
