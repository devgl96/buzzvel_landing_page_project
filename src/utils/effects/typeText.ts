import gsap from "gsap";
import { RefObject } from "react";

export const typeText = (textRef: RefObject<HTMLParagraphElement>) => {
  if (!textRef.current) return;

  const text = textRef.current.textContent;

  if (!text) return;

  const splitText = text.split("");
  textRef.current.textContent = "";

  splitText.forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.innerHTML += char === "." ? "<br />" : "";

    textRef.current?.appendChild(span);
  });

  gsap.fromTo(
    textRef.current.children,
    { opacity: 0 },
    { opacity: 1, duration: 0.05, stagger: 0.05 }
  );
};
