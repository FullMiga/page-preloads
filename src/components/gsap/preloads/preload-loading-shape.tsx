import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

export function PreloadLoadingShape() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        onComplete: () => {
          if (containerRef.current) {
            gsap.to(containerRef.current, {
              opacity: 0,
              display: "none",
              duration: 0.5,
              ease: "power1.out",
            });
          }
        },
      });

      timeline
        .fromTo(
          "#loading-info span, #percentage, #loading-info div span ",
          { y: 20 },
          { delay: 0.3, y: 0, ease: "power1.inOut", duration: 0.6 },
        )
        .to(
          "#image div",
          {
            duration: 1.5,
            y: 0,
            ease: "power2.inOut",
          },
          "<",
        )
        .from(
          "#percentage",
          {
            innerText: 0,
            delay: 0.2,
            duration: 2.3,
            snap: {
              innerText: 1,
            },
          },
          "<",
        )
        .to("#image div", {
          delay: 0.5,
          duration: 1,
          y: "-100%",
          ease: "power2.inOut",
        })
        .to(
          "#loading-info span, #percentage, #loading-info div span ",
          {
            y: -30,
            ease: "power2.inOut",
            delay: 0.7,
          },
          "<",
        );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 h-dvh w-full bg-red-900 z-10 flex items-center justify-center"
    >
      <div>
        <div
          id="loading-info"
          className="flex justify-between font-mono text-zinc-50 font-semibold mb-2 overflow-hidden"
        >
          <span>LOADING</span>
          <div className="flex">
            <p id="percentage">100</p>
            <span>%</span>
          </div>
        </div>
        <div id="image" className="w-50 h-70 bg-transparent overflow-hidden">
          <div
            id="image"
            className="flex-1 h-70 translate-y-full bg-zinc-100"
          />
        </div>
      </div>
    </div>
  );
}
