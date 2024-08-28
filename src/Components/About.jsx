import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { delay, motion } from "framer-motion";
import resume from "../assets/portfolioresume.pdf";
// import portfolioresume from "";
const About = () => {
  console.log(resume);
  return (
    <div className="border-bottom border-neutral-900 pb-4 ">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-purple-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.9 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className=" rounded-2xl" src={aboutImg} alt="Aboutimg" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.9 }}
          className="w-full lg:w-1/2 "
        >
          <div className="flex flex-col justify-center items-center">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            <motion.p
              className="my-2 max-w-xl py-6"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 200 }}
              transition={{ duration: 1.5 }}
            >
              To Know Me Professionally check my resume below !{" "}
            </motion.p>
          </div>
          <motion.div
            className="flex flex-col justify-center items-center"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 2.5 }}
          >
            <button
              className="bg-transparent text-white py-3 px-8 outline-none font-bold border border-purple-600 shadow-md shadow-purple-500 hover:text-purple-500 rounded-xl w-fit"
              type="submit"
            >
              <a href={resume} target="_blank">
                Resume !
              </a>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
