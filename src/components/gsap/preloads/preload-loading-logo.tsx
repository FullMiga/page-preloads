import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function PreloadLoadingLogo() {
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
        .to("#logo", {
          opacity: 1,
          delay: 0.4,
          duration: 1.4,
          ease: "power2.inOut",
        })
        .fromTo(
          "#liquid",
          {
            y: 200,
          },
          {
            y: 100,
            delay: 0.2,
            duration: 1.4,
            ease: "power3",
          },
        )
        .to("#liquid", {
          y: 0,
          delay: 0.2,
          duration: 1.3,
          ease: "power3",
        })
        .to("#logo", {
          opacity: 0,
          ease: "power1.out",
        });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 h-dvh w-full bg-red-900 z-10 flex items-center justify-center"
    >
      <div
        id="logo"
        className="bg-red-950/80 w-50 h-50 masked-img size-full object-contain relative opacity-0"
      >
        <div
          id="liquid"
          className="absolute bg-white w-50 h-50 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
        />
      </div>
    </div>
  );
}
