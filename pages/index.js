import { useRef } from "react";
import { useRouter } from "next/router";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import About from "../components/About"
import { useTheme } from "next-themes";
import MovingHeader from "../components/MovingHeader"

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  const textOne = useRef();
  const router = useRouter();

  // Handling Scroll

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop - 70,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop - 70,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleProjectScroll = () => {
    window.scrollTo({
      top: projectRef.current.offsetTop - 70,
      left: 0,
      behavior: "smooth",
    });
  };
  
  useIsomorphicLayoutEffect(() => {
    stagger(
      textOne.current,
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  const { theme } = useTheme();

  // ${theme === "dark" ? "bg-moonsoil text-black" : "bg-marssoil text-white"}
  // ${theme === "dark" ? "bg-[#D9D9D9] text-white" : "bg-[#B76945] text-black"}

  return (
    <div className={`relative
    ${theme === "dark" ? "bg-[#D9D9D9] text-black" : "bg-[#B76945] text-white"}
    `}>

      <Head>
        <title>{data.name}</title>
      </Head>

      <MovingHeader
        handleWorkScroll={handleWorkScroll}
        handleAboutScroll={handleAboutScroll}
        handleProjectScroll={handleProjectScroll}
      />

      <div className="container mx-auto">
        <div className="flex mt-2 tablet:mt-10 justify-center">
          <div>
            <h1
              ref={textOne}
              className="text-5xl tablet:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold"
            >
              Henry Noyes
            </h1>
          </div>
        </div>
        <div className="flex mt-2 justify-center">
          <Socials className="mt-2 laptop:mt-5" />
        </div>


        <div className="mt-10 laptop:mt-10 p-2 laptop:p-0" ref={aboutRef}>
        <About />
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-4xl m-2 text-bold">My Work</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-3 gap-4">
            {data.work.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                onClick={() => router.push(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={projectRef}>
          <h1 className="text-4xl m-2 text-bold">My Projects</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-3 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
