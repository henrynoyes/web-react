import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
          © 2024 Henry Noyes
          {/* <Link href="http://www.chetanverma.com">
            <a className="underline underline-offset-1">Henry Noyes</a>
          </Link> */}
        </h1>
      </div>
    </>
  );
};

export default Footer;
