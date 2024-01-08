import React from "react";
import { useTheme } from "next-themes";

const Button = ({ children, type, onClick, classes }) => {
  const { theme } = useTheme();
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ${
          theme === "dark" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"
        }  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${classes}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${
        theme === "dark"
          ? "hover:bg-red-800 text-white"
          : "hover:bg-red-200"
      } hover:scale-105 active:scale-100  tablet:first:ml-0 ${classes} link`}
    >
      {children}
    </button>
  );
};

export default Button;
