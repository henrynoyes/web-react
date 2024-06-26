import { useRef } from "react";
import GalleryCard from "../../components/GalleryCard";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import Footer from "../../components/Footer";
import CustomHead from "../../components/CustomHead";
import { useTheme } from "next-themes";
import SimplePageHeader from "../../components/SimplePageHeader"

// Local Data
import data from "../../data/portfolio.json";

const PageName = () => {
  
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

      <CustomHead />

      <SimplePageHeader/>

      <div className="container mx-auto">
        <div className="flex mt-10 justify-center">
          <div>
            <h1
              ref={textOne}
              className="text-5xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-bold w-4/5 mob:w-full"
            >
              Main Text
            </h1>
          </div>
        </div>


        <div className="flex justify-center mt-4 p-2 laptop:p-1">
          <p className="tablet:w-2/3 m-6 text-sm laptop:text-lg">
            Description
          </p>
        </div>
        
        <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
          <GalleryCard
            img="/images/"
            AR_src={1}
            w_disp={1}
            h_disp={1}
            name=""
            linkText=""
            linkURL=""
          />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default PageName;