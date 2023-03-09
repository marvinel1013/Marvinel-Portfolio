"use client";

import ReusableText from "./Reusable/ReusableText";
import Typewriter from "typewriter-effect";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";

function HeroSection() {
  const icons = [
    <MdOutlineEmail />,
    <FaFacebook />,
    <FaLinkedinIn />,
    <FaGithub />,
    <BsFillPersonLinesFill />,
  ];

  return (
    <div className="text-light h-screen w-full">
      <div className="h-full w-full max-w-7xl mx-auto flex items-center justify-center md:px-0 px-2">
        <div className="text-center">
          <h2 className="uppercase tracking-widest text-sm md:text-lg mb-8">
            let's build something together
          </h2>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-5">
            Hi, I'm{" "}
            <div className="bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text inline-block">
              <Typewriter
                options={{
                  strings: ["Marvinel", "Santos"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 150,
                }}
              />
            </div>
          </h1>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
            A <ReusableText>Front-End Web Developer</ReusableText>
          </h1>
          <p className="w-full px-5 md:px-0 md:max-w-3xl mx-auto md:text-lg font-extralight md:font-thin tracking-wide">
            I love to work on web application using technologies like React,
            Next JS and Tailwind CSS and also I always looking forward to
            improve my skills and learn new technologies.
          </p>
          <div className="w-full flex mt-10 items-center justify-center md:gap-7   gap-5 text-xl md:text-3xl">
            {icons.map((icon, index) => (
              <span
                className="shadow-md even:shadow-primary shadow-secondary cursor-pointer hover:-translate-y-3 ease-in duration-300 p-3 rounded-full"
                key={index}
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
