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
      ".letter",
      0.2,
      { y: 0, x: -100},
      { y: 0, x: 0,}
    );
  }, []);
  

  const { theme } = useTheme();

  // ${theme === "dark" ? "bg-moonsoil text-black" : "bg-marssoil text-white"}
  // ${theme === "dark" ? "bg-[#D9D9D9] text-white" : "bg-[#B76945] text-black"}

  return (
    <div className={`relative
    ${theme === "dark" ? "bg-moonsoil text-black" : "bg-marssoil text-white"}
    `}>

      <Head>
        <title>{data.name}</title>
        <link rel="icon" type="image/x-icon" href="/images/icon.ico" />
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
              className="text-5xl tablet:text-6xl laptop:text-8xl p-1 tablet:p-2"
            >
              <span className="letter font-bungee">H</span>
              <span className="letter font-bungee">e</span>
              <span className="letter font-bungee">n</span>
              <span className="letter font-bungee">r</span>
              <span className="letter font-bungee">y</span>
              {" "}
              <span className="letter font-bungee">N</span>
              <span className="letter font-bungee">o</span>
              <span className="letter font-bungee">y</span>
              <span className="letter font-bungee">e</span>
              <span className="letter font-bungee">s</span>
            </h1>
          </div>
        </div>
        <div className="flex mt-2 justify-center">
          <Socials className="mt-2 laptop:mt-5" />
        </div>


        <div className="mt-10 laptop:mt-10 p-2 laptop:p-1" ref={aboutRef}>
        <About />
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-1" ref={workRef}>
          <h1 className="text-4xl m-2">My Work</h1>

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

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-1" ref={projectRef}>
          <h1 className="text-4xl m-2">My Projects</h1>

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
