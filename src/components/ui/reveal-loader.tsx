"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

interface RevealLoaderProps {
  /**
   * The text to display during the loading animation.
   * @default "VENGEANCE"
   */
  text?: string;
  /**
   * Additional classes for the container.
   */
  className?: string;
  /**
   * Callback when the animation completes.
   */
  onComplete?: () => void;
}

const RevealLoader = ({
  text = "VENGEANCE",
  className,
  onComplete,
}: RevealLoaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power1.inOut",
        },
        onComplete: onComplete,
      });

      tl.to(".name-text span", {
        y: 0,
        stagger: 0.05,
        duration: 0.2,
      });

      tl.to(".preloader-item", {
        delay: 1,
        y: "100%",
        duration: 0.5,
        stagger: 0.1,
      })
        .to(".name-text span", { autoAlpha: 0 }, "<0.5")
        .to(
          preloaderRef.current,
          {
            autoAlpha: 0,
          },
          "<1",
        );
    },
    { scope: preloaderRef },
  );

  return (
    <div
      className={cn(
        "fixed inset-0 z-[6] flex overflow-hidden bg-transparent",
        className,
      )}
      ref={preloaderRef}
    >
        {/* We use 10 distinct bars for the reveal effect */}
      <div className="preloader-item h-full w-[10%] bg-black dark:bg-white/10 backdrop-blur-md"></div>
      <div className="preloader-item h-full w-[10%] bg-black dark:bg-white/10 backdrop-blur-md"></div>
      <div className="preloader-item h-full w-[10%] bg-black dark:bg-white/10 backdrop-blur-md"></div>
      <div className="preloader-item h-full w-[10%] bg-black dark:bg-white/10 backdrop-blur-md"></div>
      <div className="preloader-item h-full w-[10%] bg-black dark:bg-white/10 backdrop-blur-md"></div>
      <div className="preloader-item h-full w-[10%] bg-black dark:bg-white/10 backdrop-blur-md"></div>
      <div className="preloader-item h-full w-[10%] bg-black dark:bg-white/10 backdrop-blur-md"></div>
      <div className="preloader-item h-full w-[10%] bg-black dark:bg-white/10 backdrop-blur-md"></div>
      <div className="preloader-item h-full w-[10%] bg-black dark:bg-white/10 backdrop-blur-md"></div>
      <div className="preloader-item h-full w-[10%] bg-black dark:bg-white/10 backdrop-blur-md"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <p className="name-text flex text-[15vw] lg:text-[12rem] font-bold text-white mix-blend-difference leading-none tracking-tighter">
          {text.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block translate-y-full"
            >
              {char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default RevealLoader;
