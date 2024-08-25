import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;
const TiltCard = (props) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-500 to-[#0a0032]"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <div className=" flex justify-center items-center mb-2">
          <img
            src={props.projdetails.image}
            alt=""
            className=" object-cover border border-purple-500 p-3 rounded-lg"
            height={100}
            width={200}
          />
        </div>
        <div
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center flex  flex-col  font-bold text-black p-3 items-center justify-evenly"
        >
          <h1 className="mt-2 ">{props.projdetails.title}</h1>
          <p className=" text-[14px]  font-normal">
            {props.projdetails.description}
          </p>
          <div>
            <ul className="flex  gap-2 flex-wrap max-w-38 justify-center  text-center ">
              {props.projdetails.technologies.map((tech, index) =>
                tech.length > 0 ? (
                  <li
                    key={index}
                    className="text-white  text-center bg-purple-700 p-2 rounded-lg  font-semibold shadow-lg text-[12px]"
                  >
                    {tech}
                  </li>
                ) : (
                  " "
                )
              )}
            </ul>
          </div>
          <a className=" flex justify-center items-center gap-2 mt-3 mb-0 bg-black text-white border rounded-lg p-2 shadow-2xl">
            <FaGithub />
            <p>Github</p>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TiltCard;
