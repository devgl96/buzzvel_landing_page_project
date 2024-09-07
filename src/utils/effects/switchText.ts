import gsap from "gsap";
import { RefObject } from "react";

export const switchText = (
  wordRef: RefObject<HTMLHeadingElement>,
  words: Array<string>,
  wordIndex: number
): number => {
  if (!wordRef?.current) return 0; // Check if refs are valid

  wordIndex = (wordIndex + 1) % words.length; // Increment and wrap word index

  gsap.to(wordRef.current, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      if (wordRef.current) {
        // Ensure wordRef.current is not null
        wordRef.current.textContent = words[wordIndex!]; // Update textContent
        gsap.to(wordRef.current, { opacity: 1, duration: 1 }); // Animate opacity back to 1
      }
    },
  });

  return wordIndex; // Return the updated index
};
