import { useRef } from "react";
import GalleryCard from "../../components/GalleryCard";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import Footer from "../../components/Footer";
import CustomHead from "../../components/CustomHead";
import { useTheme } from "next-themes";
import PageHeader from "../../components/PageHeader"

const MaatPage = () => {
  
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

      <PageHeader/>

      <div className="container mx-auto">
        <div className="flex mt-10 justify-center">
          <div>
            <h1
              ref={textOne}
              className="text-5xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-ubuntu w-4/5 mob:w-full"
            >
              MAAT Energy
            </h1>
          </div>
        </div>


        <div className="flex justify-center mt-4 p-2 laptop:p-1">
          <p className="tablet:w-2/3 m-6 text-sm laptop:text-lg">
          I worked full-time as a plasma engineer co-op at the energy startup MAAT Energy for 6 months. MAAT Energy focuses on using atmospheric microwave plasma to pyrolyze methane gas into hydrogen and carbon black. 
          This offers a low-cost, environmentally-friendly alternative to conventional hydrogen production methods such as steam reforming and electrolysis. During my time at MAAT, 
          I operated various plasma reactors to perform daily experiments and researched methods to optimize gas conversion. I also used modeling software such as COMSOL to design applicator structures that 
          enhanced radio frequency strength in a specified region. Through my research we developed several novel techniques for microwave plasma ignition that were successfully implemented on a large-scale 6kW system. 
          My time at MAAT concluded with the submission of a detailed SBIR report that I assisted in writing, reporting over 95% methane conversion (up from ~65% when I joined) and around 60% energy efficiency (up from 20-30%).
          </p>
        </div>
        
        <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
          <GalleryCard
            img="/images/work/maat/plasma.jpg"
            AR_src={1}
            w_disp={1}
            h_disp={0.66}
            name="Microwave Plasma"
            linkText="Microwave to Hydrogen and Carbon for Decarbonization"
            linkURL="https://www.maatenergy.com"
          />
          <GalleryCard
            img="/images/work/maat/model.png"
            AR_src={1.54}
            w_disp={1}
            h_disp={0.65}
            name="RF Modeling in COMSOL"
            linkText="Novel Plasma Catalysis Reformer of CO2 for Power to Jet Fuel and Energy Storage"
            linkURL="https://www.sbir.gov/sbirsearch/detail/2282195"
          />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default MaatPage;