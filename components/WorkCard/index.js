import React from "react";
import Image from "next/image";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="p-2 laptop:p-2 first:ml-0"
    >
      <div
        className="cursor-pointer rounded-lg overflow-hidden relative transition-all ease-out duration-300 link"
        onClick={onClick}
      >
        <Image
          alt={name}
          className="image-link"
          src={img}
          width={600}
          height={600}
        ></Image>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="mt-2 text-2xl font-medium">
          {name ? name : "Project Name"}
        </h1>
        </div>
      {/* <h2 className="text-xl opacity-50">
        {description ? description : ""}
      </h2> */}
    </div>
  );
};

export default WorkCard;
