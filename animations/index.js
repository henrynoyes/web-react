import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const stagger = (target, fromvVars, toVars) => {
  return gsap.fromTo(
    target,
    { opacity: 0, ...fromvVars },
    { opacity: 1, ...toVars, stagger: 0.2, ease: Power3.easeOut }
  );
};

export const slide = (target) => {
  return gsap.to(
    target, {
      scrollTrigger: {
        scrub: 1,
      },
      x: document.documentElement.scrollWidth - 430,
    }
  );
};
