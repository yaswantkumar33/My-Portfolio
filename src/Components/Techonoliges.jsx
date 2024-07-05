import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaLaravel } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
const Techonoliges = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
      <h1 className="my-20 text-4xl text-center">
        Languages & <span className=" text-purple-500">Tools</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className=" rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-[#f16529]" />
        </div>
        <div className=" rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoCss3 className="text-7xl text-[#2866f0]" />
        </div>
        <div className=" rounded-2xl border-4 border-neutral-800 p-4">
          <FaBootstrap className="text-7xl text-[#6f11f5]" />
        </div>
        <div className=" rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-[#38bdf8]" />
        </div>
        <div className=" rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptFill className="text-7xl text-yellow-400" />
        </div>
        <div className=" rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className=" rounded-2xl border-4 border-neutral-800 p-5">
          <DiJqueryLogo className="text-[65px] text-[#79cef3] bg-[#343434] rounded-xl" />
        </div>
        <div className=" rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl " />
        </div>
        <div className=" rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
        <div className=" rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-600" />
        </div>
        <div className=" rounded-2xl border-4 border-neutral-800 p-4">
          <FaPhp className="text-7xl text-[#777bb3]" />
        </div>
        <div className=" rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-[#f29111]" />
        </div>
        <div className=" rounded-2xl border-4 border-neutral-800 p-4">
          <FaLaravel className="text-7xl text-red-500" />
        </div>
        <div className=" rounded-2xl border-4  border-neutral-800 p-4">
          <IoLogoFirebase className="text-7xl text-[#ffa001] bg-white rounded-xl p-4" />
        </div>
        <div className=" rounded-2xl border-4 border-neutral-800 p-4">
          <VscVscode className="text-7xl text-[#34a6f2]" />
        </div>
        <div className=" rounded-2xl border-4  border-neutral-800 p-4">
          <FaGithub className=" text-7xl text-black bg-white p-4 rounded-xl" />
        </div>
        <div className=" rounded-2xl border-4  border-neutral-900 p-4 ">
          <FaGitAlt className=" text-7xl text-[#df4c37]" />
        </div>
      </div>
    </div>
  );
};

export default Techonoliges;
