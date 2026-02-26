import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export function PreloadCircle() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(container.current, { display: "none" });
        },
      });

      tl.to(container.current, {
        delay: 0.3,
        duration: 1.8,
        ease: "power4.inOut",
        "--radius": `100%`,
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="fixed inset-0 z-50 bg-red-900"
      style={
        {
          "--radius": "0px",
          WebkitMaskImage:
            "radial-gradient(circle at center, transparent var(--radius), black calc(var(--radius) + 1px))",
          maskImage:
            "radial-gradient(circle at center, transparent var(--radius), black calc(var(--radius) + 1px))",
        } as React.CSSProperties
      }
    />
  );
}
