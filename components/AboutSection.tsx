import Image from "next/image";
import React from "react";
import ReusableText from "./Reusable/ReusableText";
import AboutImage from "../assets/AboutImg.png";

function AboutSection() {
  return (
    <div className="h-screen w-full text-light">
      <div className="w-full h-full max-w-7xl mx-auto flex justify-center items-center">
        <div className="w-full">
          <h1 className="mb-14 md:ml-[88px] tracking-wide md:text-start text-center text-3xl md:text-4xl font-black">
            <ReusableText>ABOUT</ReusableText>
          </h1>
          <div className="flex items-center md:flex-row flex-col md:gap-0 gap-10 justify-around">
            <div className="w-full max-w-xl md:px-0 px-7 md:text-start text-center">
              <h2 className="mb-5 text-3xl font-bold">Who I Am</h2>
              <p className=" md:font-extralight tracking-wider">
                I am a self-taught Front-End Web Developer who is passionate
                about building beautiful and user-friendly websites. With a well
                known foundation in HTML , CSS and JavaScript. I have relevant
                working experience with React. Currently seeking a full-time
                position. I love to work on web application using technologies
                like React, NextJS, Tailwind and Firebase and also I always
                looking forward to improve my skills and learn new technologies.
              </p>
              <br />
              <p className=" md:font-extralight tracking-wider">
                Some of my technical skills include experience with HTML, CSS,
                JavaScript, and frameworks like React and NextJS. I am also
                skilled in tools such as Redux/Redux Toolkit and have knowledge
                of UI libraries like Tailwind CSS, MUI and Framer Motion. I am
                always looking forward to learn new technologies and to achieve
                my dreams to become a Full Stack Web Developer.
              </p>
            </div>
            <div>
              <Image
                src={AboutImage}
                alt="Image"
                width={350}
                className="md:p-3 rounded-lg shadow-lg shadow-[#210099] hover:skew-y-12 duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
