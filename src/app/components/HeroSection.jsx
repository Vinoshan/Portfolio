"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const downloadResume = () => {
    const resumeFileName = 'Resume-Vino.docx';
    const link = document.createElement('a');
    link.href = `/assets/Resume-Vino.docx`;
    link.download = resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
            Hello, I&apos;m{" "}
          </span>{" "}
          <br></br>
          <TypeAnimation
            sequence={[
              "Vinoshan",
              1000,
              "Web Developer",
              1000,
              "A Gamer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
          Welcome to my world of digital challenges and endless fun!
        </p>
        <div>
          <button className="bg-yellow-500 hover:bg-slate-200 text-black px-6 py-3 rounded-full mr-4" onClick={() => {
            document.getElementById("contact").scrollIntoView({
              behavior: "smooth",
            });
          }}>
            Hire Me
          </button>
          <button className="m-4 bg-gradient-to-r from-yellow-400 to-yellow-500 px-1 py-1  text-white rounded-full">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2" onClick={downloadResume}>
              Download CV
            </span>
          </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="bg-[#181818] lg:w-[350px] lg:h-[350px] w-[250px] h-[250px] rounded-full relative">
          <Image
            src="/pfp.png"
            alt="hero image"
            className=" rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;