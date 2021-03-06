import React from 'react';
import {IconContext} from "react-icons";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const AboutUsPage = () => (
    <div>
      <h1 className="about-title">Developed and Designed by Deepesh Kumar</h1>
      <div className="icons">
      <a href="https://github.com/deepesh389" target="_blank"  >
         <FaGithub size={70} />
     </a>
      <a href="https://www.linkedin.com/in/deepesh-kumar-640932161/" target="_blank" style={{color:'#2867B2'}} >
         <FaLinkedin size={70} />
     </a>
      </div>
    </div>
  );
  export default AboutUsPage;