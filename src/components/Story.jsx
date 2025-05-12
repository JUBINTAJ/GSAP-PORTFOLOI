import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";
import { BsBag } from "react-icons/bs";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50 ">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="my de<b>v</b>loping  <br /> <b>j</b>ourney"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img\WhatsApp Image 2025-04-23 at 11.58.39 AM.jpeg"
                  alt="entrance.webp"
                  className="object-contain"
                />
              </div>
            </div>

            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>





<div className="mt-10 flex w-full justify-center px-4 sm:px-6 md:-mt-64 md:me-44 md:justify-end">
  <div className="flex h-full w-fit flex-col items-center md:items-start">
    <div className="flex flex-wrap items-center gap-2 text-lg sm:text-xl md:text-2xl font-circular-web">
      <BsBag />
      <h1 className="font-circular-web">Professional Experience</h1>
    </div>

    <p className="mt-2 text-center md:text-start font-circular-web">
      Frontend Developer<br />
      Bridgeon Solution
    </p>

    <p className="font-circular-web text-center md:text-start">2024 - Present</p>

    <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
      Developed responsive web applications using React<br />
      Implemented state management using Redux and Zustand<br />
      Built performant applications with Next.js
    </p>
  </div>
</div>

      </div>
    </div>
  );
};

export default FloatingImage;
