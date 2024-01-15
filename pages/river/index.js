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

const RiverPage = () => {
  
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
      </Head>

      <PageHeader/>

      <div className="container mx-auto">
        <div className="flex mt-10 justify-center">
          <div>
            <h1
              ref={textOne}
              className="text-5xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-librecaslon w-4/5 mob:w-full"
            >
              RIVeR Lab
            </h1>
          </div>
        </div>


        <div className="flex justify-center mt-4 p-2 laptop:p-0">
          <p className="tablet:w-2/3 m-6 text-sm laptop:text-lg">
          I worked full-time as a robotics engineer co-op at Northeastern&apos;s RIVeR Lab for 6 months. I developed software for a DARPA-funded mixed reality project focused on perceptually-enabled task guidance. 
          The goal of the program is to
          {" "}
          <i>“develop methods, techniques, and technology for artificially intelligent assistants that provide just-in-time visual and audio feedback to help with task execution.”</i>
          {" "}
          During my time on the project, I wrote a software architecture in ROS2 and Python to efficiently collect and store streams of data from the Microsoft HoloLens 2 headset. 
          I also created an automated object annotation pipeline using OptiTrack motion capture. This was used to generate large amounts of annotated egocentric data to train object detection models 
          such as YOLO and Detectron2. I assisted in the training and gained substantial experience in the fields of machine learning and computer vision, especially in an egocentric context.
          </p>
        </div>
        
        <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
          <GalleryCard
            img="/images/work/river/ptg-logo.png"
            AR_src={1.96}
            w_disp={1}
            h_disp={0.51}
            name="PTG Program"
            linkText="Perceptually-enabled Task Guidance (PTG)"
            linkURL="https://www.darpa.mil/program/perceptually-enabled-task-guidance"
          />
          <GalleryCard
            img="/images/work/river/ptg-display.png"
            AR_src={1}
            w_disp={1}
            h_disp={0.66}
            name="Lincoln Labs Article"
            linkText="Lincoln Laboratory partners with DARPA to test augmented-reality assistance systems"
            linkURL="https://www.ll.mit.edu/news/lincoln-laboratory-partners-darpa-test-augmented-reality-assistance-systems"
          />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default RiverPage;