import { LiaLinkedin } from "react-icons/lia";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { BsGithub } from "react-icons/bs";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);
const socialLinks = [
  { href: "https://www.linkedin.com/in/jubin-taj-137383316/", icon: <LiaLinkedin /> },
  { href: "https://github.com/JUBINTAJ", icon: <BsGithub /> },

];

const Contact = () => {
  return (
<div id="contact" className="my-20 min-h-96 w-screen px-4 sm:px-6 md:px-10">
  <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
    <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
      <ImageClipBox
        src="/img\WhatsApp Image 2025-04-23 at 11.51.27 AM.jpeg"
        clipClass="contact-clip-path-1 "
      />
      {/* <ImageClipBox
        src="/img/contact-2.webp"
        clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
      /> */}
    </div>

    <div className="absolute -top-40 left-10 w-52 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
      <ImageClipBox
        src="/img/WhatsApp Image 2025-04-23 at 11.26.54 AM.jpeg"
        clipClass="sword-man-clip-path md:scale-125"
      />
    </div>

    <div className="flex flex-col items-center text-center">
      <p className="mb-6 font-general text-[10px] uppercase">
        Get in touch
      </p>

  <AnimatedTitle
  title="8590959856 <br /> email : jubintajj@gmail.com"
  className="special-font w-full font-zentry text-2xl sm:text-3xl md:text-4xl lg:text-[6.2rem] !font-black !leading-tight sm:!leading-[1.2] lg:!leading-[.9]"
/>


      <Button title="contact us" containerClass="mt-8 cursor-pointer" />

      <div className="flex justify-center gap-4 md:justify-start mt-8">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl transition-colors duration-500 ease-in-out hover:text-white"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default Contact;
