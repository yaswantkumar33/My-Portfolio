import React from "react";
import { EXPERIENCES } from "./../constants/index";
import { delay, motion } from "framer-motion";

const experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="my-20 text-center text-4xl">Experience</div>
      <div>
        {EXPERIENCES.map((experieince, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center ">
              <div className="w-full lg:w-1/4">
                <motion.p
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: index + 0.5 }}
                  className="mb-2 text-sm text-neutral-400"
                >
                  {experieince.year}
                </motion.p>
              </div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 200 }}
                transition={{ duration: index + 0.5 }}
                className=" w-full max-w-xl lg:3/4"
              >
                <h6 className="mb-2 font-semibold">
                  {experieince.role} -{" "}
                  <span className="text-sm text-purple-100">
                    {experieince.company}
                  </span>
                </h6>
                <p className="mb-4 text-neutral-400">
                  {experieince.description}
                </p>
                {experieince.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default experience;
