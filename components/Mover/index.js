import { useTheme } from "next-themes";
import { useIsomorphicLayoutEffect } from "../../utils";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Image from "next/image";
import { roll } from "../../animations";

const Mover = ({}) => {

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useIsomorphicLayoutEffect(() => {
    roll(".rolling");
  }, []);

    return (
      <>
        <div
        className={`hidden flex-row sticky ${
          // theme === "dark" ? "bg-gray-800" : "bg-gray-100"
          theme === "dark" ? "bg-cyan-400" : "bg-cyan-400"
        } dark:text-white top-10 z-10 tablet:flex`}
      >
        <div className="rolling">
          {mounted && (
            <Image
            alt="darkmode toggle"
            src="/images/icon.PNG"
            width={32}
            height={32}
            ></Image>
          )}
        </div>
      </div>
      </>
    );
  };
  
  export default Mover;