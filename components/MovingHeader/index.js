import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useIsomorphicLayoutEffect } from "../../utils";
import Button from "../Button";
import Image from "next/image";
import { slide } from "../../animations";

const MovingHeader = ({ handleWorkScroll, handleAboutScroll, handleProjectScroll}) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useIsomorphicLayoutEffect(() => {
    slide(".sliding", 430);
  }, []);

  return (
    <>
      <Popover className="sticky top-0 z-10 tablet:hidden">
        {({ open }) => (
          <>
            
            <div
              className={`flex justify-between ${
                theme === "dark" ? "bg-moonsky" : "bg-marssky"
              } dark:text-white`}
            >
              {theme === "dark" ? (
                <div className="sliding">
                    {mounted && (
                      <Image
                      alt="rover"
                      src="/images/header/scaled-pixel-cobra.png"
                      width={71}
                      height={55}
                      ></Image>
                    )}
                </div>
              ) : (
                <div className="sliding">
                  {mounted && (
                    <Image
                    alt="rover"
                    src="/images/header/pixel-persy.png"
                    width={71}
                    height={55}
                    ></Image>
                  )}
                </div>
              )}

              <div className="flex items-center mr-2">
                <Button
                  onClick={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                  }
                  type="header"
                  classes="mb-2 mr-2"
                >
                  <Image
                    alt="darkmode toggle"
                    src={`/images/header/${
                      theme === "dark" ? "moon.svg" : "sun.svg"
                    }`}
                    height={32}
                    width={32}
                  ></Image>
                </Button>

                <Popover.Button>
                  <Image
                    alt="menu"
                    src={`/images/header/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                    height={32}
                    width={32}
                  ></Image>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-1/4 p-1 ${
                theme === "dark" ? "bg-[#262628]" : "bg-[#d5b69d]"
              } shadow-md rounded-md`}
            >
              <div className="grid grid-cols-1 items-center">
                <Button onClick={() => router.push("/")} type="header">
                  Home
                </Button>
                <Button onClick={handleAboutScroll} type="header">About</Button>
                <Button onClick={handleWorkScroll} type="header">Work</Button>
                <Button onClick={handleProjectScroll} type="header">Projects</Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      <div
        className={`hidden flex-row justify-between sticky ${
          theme === "dark" ? "bg-moonsky" : "bg-marssky"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        {theme === "dark" ? (
          <div className="sliding">
              {mounted && (
                <Image
                alt="rover"
                src="/images/header/scaled-pixel-cobra.png"
                width={71}
                height={55}
                ></Image>
              )}
          </div>
        ) : (
          <div className="sliding">
            {mounted && (
              <Image
              alt="rover"
              src="/images/header/pixel-persy.png"
              width={71}
              height={55}
              ></Image>
            )}
          </div>
        )}
        <div className="flex">
          <Button onClick={() => router.push("/")} classes="first:ml-1" type="header">
            Home
          </Button>
          <Button onClick={handleAboutScroll} type="header">About</Button>
          <Button onClick={handleWorkScroll} type="header">Work</Button>
          <Button onClick={handleProjectScroll} type="header">Projects</Button>

          {mounted && theme && (
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              type="header"
            >
              <Image
                alt="darkmode toggle"
                src={`/images/header/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                width={32}
                height={32}
              ></Image>
            </Button>
          )}
          </div>
      </div>
    </>
  );
};

export default MovingHeader;