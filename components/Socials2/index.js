import React from "react";
import Button from "../Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Socials2 = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
        <Button onClick={() => window.open('https://drive.google.com/file/d/1y9bC2AiDRQsp9NVcT8l2qy2XVx35V9aY/view')}>
          <FontAwesomeIcon icon={faFile} />
          <p className="ml-2 text-lg">Resume</p>
        </Button>
        <Button onClick={() => window.open('https://github.com/henrynoyes')}>
          <FontAwesomeIcon icon={faGithub} />
          <p className="ml-2 text-lg">Github</p>
        </Button>
        <Button onClick={() => window.open('https://linkedin.com/in/henry-noyes')}>
          <FontAwesomeIcon icon={faLinkedin} />
          <p className="ml-2 text-lg">LinkedIn</p>
        </Button>
        <Button onClick={() => window.open('mailto:hnoyes8@gmail.com')}>
          <FontAwesomeIcon icon={faEnvelope} />
          <p className="ml-2 text-lg">Email</p>
        </Button>
    </div>
  );
};

export default Socials2;
