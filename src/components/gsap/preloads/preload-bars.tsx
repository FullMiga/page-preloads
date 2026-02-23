import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export function PreloadBars() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (container.current) {
            container.current.style.display = "none";
          }
        },
      });

      tl.to(".bar", {
        delay: 0.8,
        duration: 1.3,
        height: 0,
        stagger: {
          amount: 0.5,
        },
        ease: "power4.inOut",
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="fixed inset-0 h-dvh w-full z-10 flex">
      <div className="bar flex-1 bg-red-900 h-[300vh]"></div>
      <div className="bar flex-1 bg-red-900 h-[300vh]"></div>
      <div className="bar flex-1 bg-red-900 h-[300vh]"></div>
      <div className="bar flex-1 bg-red-900 h-[300vh]"></div>
      <div className="bar flex-1 bg-red-900 h-[300vh]"></div>
      <div className="bar flex-1 bg-red-900 h-[300vh]"></div>
      <div className="bar flex-1 bg-red-900 h-[300vh]"></div>
      <div className="bar flex-1 bg-red-900 h-[300vh]"></div>
      <div className="bar flex-1 bg-red-900 h-[300vh]"></div>
      <div className="bar flex-1 bg-red-900 h-[300vh]"></div>
    </div>
  );
}
