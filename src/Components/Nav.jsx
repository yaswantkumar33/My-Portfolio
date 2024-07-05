import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Nav = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shirnk-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <a href="https://www.linkedin.com/in/yaswant-webdeveloper/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yaswantkumar33">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/astro_code33/">
          <FaInstagram />
        </a>
      </div>
      {/* <FaSquareXTwitter /> */}
    </nav>
  );
};

export default Nav;
