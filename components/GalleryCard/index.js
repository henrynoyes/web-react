import React, { useState }from "react";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import { useTheme } from "next-themes";

const GalleryCard = ({ img, AR_src, w_disp, h_disp, name, linkText, linkURL}) => {

  const [isModalOpen, setModalOpen] = useState(false);
  const { theme } = useTheme();


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  return (
    <div
      className="p-2 first:ml-0"
    >
      <div
        className="rounded-lg overflow-hidden flex items-center justify-center"
        onClick={openModal}
      >
        <img
          alt={name}
          className="image-solo"
          src={img}
        />
      </div>
      <div className="flex items-center justify-center">
        <h1 className="mt-2 text-xl tablet:text-2xl">
          {name}
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="mt-2 text-lg tablet:text-xl">
          <Link href={linkURL}>
            <a className={theme === "dark" ? "text-link-red" : "text-link-blue"} target="_blank" rel="noopener noreferrer">{linkText}</a>
          </Link>
        </h2>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="flex-row">
              <Button type="cancel" onClick={closeModal}>
                <img
                  alt="close"
                  src="/images/header/cancel-white.svg"
                  width={32}
                  height={32}
                />
              </Button>
              <img alt={name} src={img} 
              width={(window.innerWidth < 768 ? window.innerHeight : window.innerWidth) * 0.35 * AR_src}
              height={(window.innerWidth < 768 ? window.innerHeight : window.innerWidth) * 0.35}/>
            </div>
          </div>
        </div>
      )}
    
    </div>
  );
};

export default GalleryCard;
