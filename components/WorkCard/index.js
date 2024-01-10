import React from "react";
import Image from "next/image";

const WorkCard = ({ img, name, onClick }) => {
  return (
    <div
      className="p-2 first:ml-0"
    >
      <div
        className="cursor-pointer rounded-lg overflow-hidden relative"
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
          {name}
        </h1>
        </div>
    </div>
  );
};

export default WorkCard;
