import React from "react";
import { FooterPara } from "./styles";

const Footer = () => {
  return (
    <FooterPara>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/ar5had/visma-meets-arshad'
      >
        Code
      </a>
      <a target='_blank' rel='noopener noreferrer' href='http://iamarshad.com/resume'>
        Resume
      </a>
    </FooterPara>
  );
};

export default Footer;
