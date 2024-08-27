import React from "react";
import { HERO_CONTENT } from "./../constants/index";
import profilePic from "../assets/yaswantkumarS.jpg";
import { motion } from "framer-motion";
import useHoverAnimation from "./hooks/useHoverAnimation";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  const pic = (delay) => ({
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: delay },
    },
  });

  // Use the custom hover animation hook
  useHoverAnimation();

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2 navwrapper">
          <div className="flex flex-col items-center lg:items-start sentencediv">
            <motion.h1
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl hover-this"
            >
              <span className="itemhov">Yaswant Kumar S</span>
            </motion.h1>
            <motion.span
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              <span className="typing-animation anim-typewriter">
                Full Stack Web Developer
              </span>
            </motion.span>
            <motion.p
              variants={container(1.8)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter hover-this"
            >
              <span className="itemhov">{HERO_CONTENT}</span>
            </motion.p>
            <div className="vwrap my-5 py-0 font-semibold">
              <div className="vmove">
                <div className="vitem bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
                  The More You Focused On Time -
                </div>
                <div className="vitem bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
                  Past And Future - The More You Miss
                </div>
                <div className="vitem bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
                  The Now The Most Precious Thing
                </div>
                <div className="vitem bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
                  There Is...!
                </div>
              </div>
            </div>
            <div className="cursor hidden md:block"></div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            variants={pic(2.4)}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <img
              src={profilePic}
              alt=""
              className=" rounded-2xl"
              height={400}
              width={400}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
