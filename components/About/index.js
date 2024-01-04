import React from "react";
import Link from "next/link";
import Image from "next/Image";

const About = ({}) => {
  return (
    <>
      <div className="laptop:flex flex-row justify-center gap-4">
        <div
            className="flex justify-center items-center rounded-lg overflow-hidden laptop:basis-1/4"
            style={{ height: "400px" }}
        >
        <Image
            alt={"profile picture"}
            className="flex rounded-lg"
            src={"/images/profile_pic.jpeg"}
            width={400}
            height={400}
        ></Image>
        </div>
        <div className="relative basis-1/2">
          <h1 className="m-4 mt-10 laptop:mt-4 text-4xl text-bold">About Me</h1>
          <p className="m-6 text-md laptop:text-xl">
            I am a 4th year undergraduate student at Northeastern University studying Mathematics and Physics, with a minor in Data Science, planning to graduate in <b>May 2024</b>. 
            With my fundamental background, I have been able to take on several engineering roles in the fields of energy and robotics. 
            I am most passionate about space and the application of robotics on lunar and Martian surfaces.
          </p>
          <p className="m-6 text-md laptop:text-xl"> I am currently taking classes to finish my undergraduate degree and 
            considering pursuing a Master&apos;s degree in robotics. In my time outside of the classroom, I work as a lab assistant at the
            {" "}
            <Link href="https://web.northeastern.edu/ipl/">
            <a className="text-link" target="_blank" rel="noopener noreferrer">Introductory Physics Laboratory</a>
            </Link>
            {" "}
            at Northeastern and a robotics researcher at the 
            {" "}
            <Link href="https://siliconsynapse.sites.northeastern.edu/">
            <a className="text-link" target="_blank" rel="noopener noreferrer">Silicon Synapse Lab</a>
            </Link>
            —more about that below!
          </p>

        </div>
      </div>
    </>
  );
};

export default About;