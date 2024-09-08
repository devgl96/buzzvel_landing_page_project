import gsap from "gsap";
import { RefObject } from "react";

export const switchText = (
  wordRef: RefObject<HTMLHeadingElement>,
  words: Array<string>,
  wordIndex: number
): number => {
  if (!wordRef?.current) return 0;

  wordIndex = (wordIndex + 1) % words.length;

  gsap.to(wordRef.current, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      if (wordRef.current) {
        wordRef.current.textContent = words[wordIndex!];
        gsap.to(wordRef.current, { opacity: 1, duration: 1 });
      }
    },
  });

  return wordIndex;
};
