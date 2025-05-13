import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useRef, useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";


gsap.registerPlugin(ScrollTrigger);


export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);



  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <img
        src={src}
        alt=""
        className="absolute left-0 top-0 size-full object-cover object-center"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-white">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {


  const textRef = useRef(null);
  const containerRef = useRef(null);
useEffect(() => {
    if (!textRef.current || !containerRef.current) return;

    const textHeight = textRef.current.offsetHeight;
    const containerHeight = containerRef.current.offsetHeight;

    const yStart = containerHeight - textHeight;
    const yEnd = 0;

    const animation = gsap.fromTo(
      textRef.current,
      { y: yEnd}, 
      {
        y:  yStart, 
        ease: 'none', 
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 40%', 
          end: `+=${containerHeight}`,
          scrub: true, 
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);


  return (

  <section className="bg-black pb-52">
    <div className="container  mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <h1 className="font-circular-web text-lg text-blue-50"> Education</h1>
        <p className="font-circular-web text-lg text-blue-50">
          Bachelor of Computer Applications (BCA) <br />
          IGNOU University, Kerala — Present{" "}
        </p>

        <br />
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Currently pursuing BCA with a strong focus on web technologies,
          programming fundamentals, and computer science concepts. My academic
          journey has enriched me with skills in frontend and backend
          development, including HTML, CSS, JavaScript, React, Node.js, and
          database management systems. <br />
          {/* In addition to coursework, I actively participate in tech communities and coding competitions to continuously improve and stay updated with the latest trends in software development. */}
        </p>
      </div>
<div
      ref={containerRef}
      className="relative mb-7 h-96 w-full overflow-hidden rounded-md border border-violet-400 bg-black md:h-[65vh]"
    >
      <div
        ref={textRef}
        className="absolute w-full text-center text-sm text-violet-400 special-font hero-heading"
      >
        HTML · CSS · JavaScript · React · Redux · Next.js · TypeScript · GSAP · Tailwind · MUI · Zustand · React Query · MongoDB · Node.js · Express · PWA · Figma · Git-GitHub · Axios · Bootstrap · Jwt · RestApi · Multer · Postman
      </div>
    </div>




<div className="grid w-full grid-cols-1 h-screen md:grid-cols-2 gap-5 sm:gap-6 md:gap-7 px-4 sm:px-8 py-8 auto-rows-fr">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-0  ">
          <a
            href="https://github.com/JUBINTAJ/thread-clone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BentoCard
              src="/img\WhatsApp Image 2025-04-23 at 2.55.30 PM.jpeg"
              title={
                <>
                  re<b>f</b>rbishable electronics
                </>
              }

              // description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </a>
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1  md:col-span-1 md:ms-0">
          <a
            href="https://github.com/JUBINTAJ/BABY_FULL_STACK_E-commerse"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BentoCard
              src="/img\WhatsApp Image 2025-04-23 at 2.42.19 PM.jpeg"
              title={
                <>
                  <b>e</b>-commerse
                </>
              }
              // description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </a>
        </BentoTilt>

        <BentoTilt className="bento-tilt_1  md:col-span-1 md:me-0">
          <a
            href="https://github.com/JUBINTAJ/QyrenxFrontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BentoCard
              src="/img\WhatsApp Image 2025-04-23 at 5.21.49 PM.jpeg"
              title={
                <>
                  Thr<b>e</b>ad
                </>
              }

              // description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            />
          </a>
        </BentoTilt>

        <BentoTilt className="bento-tilt_1  md:col-span-1 md:me-0">
          <a
            href="https://woxro-task-kncn.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BentoCard
              src="/img\WhatsApp Image 2025-05-10 at 3.55.39 PM.jpeg"
              title={
                <>
                  Cu<b>b</b>e
                </>
              }

              // description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            />
          </a>
        </BentoTilt>
      </div>
    </div>
  </section>
);
}

export default Features;
