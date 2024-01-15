import { useRef } from "react";
import GalleryCard from "../../components/GalleryCard";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import Footer from "../../components/Footer";
import Head from "next/head";
import { useTheme } from "next-themes";
import PageHeader from "../../components/PageHeader"

// Local Data
import data from "../../data/portfolio.json";

const CobraPage = () => {
  
  const textOne = useRef();
  
  useIsomorphicLayoutEffect(() => {
    stagger(
      textOne.current,
      1,
      { y: -40, x: -10, transform: "scale(0.8)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  const { theme } = useTheme();

  return (
    <div className={`relative
    ${theme === "dark" ? "bg-moonsoil text-black" : "bg-marssoil text-white"}
    `}>

      <Head>
        <title>{data.name}</title>
        <link rel="icon" type="image/x-icon" href="/images/icon.ico" />
      </Head>

      <PageHeader/>

      <div className="container mx-auto">
        <div className="flex mt-10 justify-center">
          <div>
            <h1
              ref={textOne}
              className="text-5xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-mont w-4/5 mob:w-full"
            >
              COBRA
            </h1>
          </div>
        </div>


        <div className="flex justify-center mt-4 p-2 laptop:p-1">
          <p className="tablet:w-2/3 m-6 text-sm laptop:text-lg">
          I was a member of the Northeastern University team competing in the 2022 NASA Big Idea Challenge which focused on creating novel mobility solutions for robotic exploration on the lunar south pole. 
          Our team built COBRA, the Crater Observing Bio-inspired Rolling Articulator. COBRA is an 11-DOF modular snake robot capable of sidewinding and tumbling down crater slopes. 
          I was responsible for designing and constructing the power system, which consists of individual LiPo batteries connected to voltage regulators that power each module. 
          I also assisted in writing the proposal and technical reports and rigorously testing the system. At the Big Idea Forum, we presented our unique rover locomotion in the deserts of Pasadena, California along with 
          6 other university teams. At the conclusion of the conference, we were awarded the Artemis Award for “the concept with the best potential to contribute to and be integrated into an Artemis mission.” 
          Since then, we have received additional funding from other sources to continue developing the current system and to manufacture a second, more space-rated prototype.
          </p>
        </div>
        
        <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-3 gap-4">
          <GalleryCard
            img="/images/work/cobra/desert.png"
            AR_src={1}
            w_disp={1}
            h_disp={1}
            name="NASA Article"
            linkText="Northeastern University Slithers to the Top with Big Idea Alternative Rover Concept"
            linkURL="https://www.nasa.gov/feature/northeastern-university-slithers-to-the-top-with-big-idea-alternative-rover-concept"
          />
          <GalleryCard
            img="/images/work/cobra/natgeo.png"
            AR_src={1.35}
            w_disp={1}
            h_disp={0.74}
            name="Nat Geo Article"
            linkText="'Snakes' on the moon? These helpers could soon join our lunar mission."
            linkURL="https://www.nationalgeographic.com/science/article/lunar-robot-snakes-explore-the-moon-nasa"
          />
          <GalleryCard
            img="/images/work/cobra/isec.jpeg"
            AR_src={1.5}
            w_disp={1}
            h_disp={0.66}
            name="WIRED Article"
            linkText="Rovers Are So Yesterday. It’s Time to Send a Snakebot to Space"
            linkURL="https://www.wired.com/story/rovers-are-so-yesterday-its-time-to-send-a-snakebot-to-space/"
          />
          <GalleryCard
            img="/images/work/cobra/coil.jpeg"
            AR_src={1.5}
            w_disp={1}
            h_disp={0.66}
            name="Northeastern Global News Article"
            linkText="Northeastern students designed a snake robot that could help NASA find water on the moon"
            linkURL="ttps://news.northeastern.edu/2022/12/07/snake-robot-nasa-moon/"
          />
          <GalleryCard
            img="/images/work/cobra/asme-poster.png"
            AR_src={1.33}
            w_disp={1}
            h_disp={0.75}
            name="ASME SMRDC 2023"
            linkText="COBRA Receives 1st Place Prize in Undergraduate Division"
            linkURL="https://sites.google.com/site/asmemrc/design-competition-showcase/2023-finalists"
          />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default CobraPage;