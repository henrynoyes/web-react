/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const About = ({}) => {
  const { theme } = useTheme();

  return (
    <>
      <div className="laptop:flex flex-row justify-center gap-4">
        <div
            className="flex justify-center items-center rounded-lg overflow-hidden laptop:basis-1/4"
            style={{ height: "400px" }}
        >
        <img
            alt="profile picture"
            className="flex rounded-lg"
            src="/images/profile_pic.jpeg"
            width="400px"
            height="400px"
          />
        </div>
        <div className="relative basis-1/2">
          <h1 className="m-4 mt-10 laptop:mt-4 text-4xl">About Me</h1>
          <p className="m-6 text-md laptop:text-xl">
            I am a first-year graduate student at Northeastern University, where I am pursuing my Master of Science in Robotics. I was
            {" "}
            <Link href="https://news.northeastern.edu/2024/05/07/nasa-research-fellow-henry-noyes/">
            <a className={theme === "dark" ? "text-link-red" : "text-link-blue"} target="_blank" rel="noopener noreferrer">recently selected as a NASA Space Technology Graduate Research Fellow</a>
            </Link>
            {" "}
            to advance autonomy in snake robots for lunar exploration. As an undergraduate student at Northeastern, I graduated summa cum laude with a Bachelor of Science in Mathematics and Physics, and a minor in Data Science.
          </p>
          <p className="m-6 text-md laptop:text-xl"> 
            I am most passionate about space and the application of robotics on lunar and Martian surfaces. I am a member of the
            {" "}
            <Link href="https://siliconsynapse.sites.northeastern.edu/">
            <a className={theme === "dark" ? "text-link-red" : "text-link-blue"} target="_blank" rel="noopener noreferrer">Silicon Synapse Lab</a>
            </Link>
            , where I work on advancing the technology of bio-inspired robots such as the COBRA platform—more about that below!
          </p>

        </div>
      </div>
    </>
  );
};

export default About;