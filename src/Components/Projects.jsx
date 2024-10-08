import React from "react";
import { PROJECTS } from "../constants";
import { delay, motion } from "framer-motion";
import Tiltcard from "./Tiltcard";

const Projects = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      {/* <div className=" flex gap-10 justify-center max-md:flex-col max-md:items-center max-lg:flex-wrap max-xl:flex-wrap ">
        {PROJECTS.map((items, index) => (
          <span key={index}>
            <Tiltcard projdetails={items} />
          </span>
          // <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          //   <motion.div
          //     whileInView={{ opacity: 1, x: 0 }}
          //     initial={{ opacity: 0, x: -100 }}
          //     transition={{ duration: index + 0.5 }}
          //     className="w-full lg:w-1/4"
          //   >
          //     <img
          //       src={items.image}
          //       width={150}
          //       height={150}
          //       alt="projectimg"
          //       className=" rounded my-3"
          //     />
          //   </motion.div>
          //   <motion.div
          //     whileInView={{ opacity: 1, x: 0 }}
          //     initial={{ opacity: 0, x: 200 }}
          //     transition={{ duration: index + 0.5 }}
          //     className="w-full max-w-xl lg:w-3/4"
          //   >
          //     <h6 className="mb-2 font-semibold">{items.title}</h6>
          //     <p className="mb-4 text-neutral-400">{items.description}</p>
          //     {items.technologies.map((item, index) => (
          //       <span
          //         key={index}
          //         className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
          //       >
          //         {item}
          //       </span>
          //     ))}
          //   </motion.div>
          // </div>
        ))}
      </div> */}

      <div className="h-96 flex justify-center items-center">
        <h1 className="text-7xl">Coming Soon.........!</h1>
      </div>
    </div>
  );
};

export default Projects;
