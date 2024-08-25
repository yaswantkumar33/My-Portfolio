import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
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
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <img src="" alt="" />
        <div
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center  font-bold text-black"
        >
          <h4>{props.projdetails.title}</h4>
          <p className="gap-4 flex flex-wrap p-3 text-center items-center justify-center">
            {props.projdetails.technologies.map(
              (value, index) => (
                <span
                  className=" bg-purple-600 text-white p-2 rounded-lg"
                  key={index}
                >
                  {value}
                </span>
              )
              //   console.log(value);
            )}
          </p>
          <div className="flex  justify-center gap-5">
            <button className="bg-purple-600 rounded-lg p-2 text-white">
              Preview
            </button>
            <button className="bg-black text-white rounded-lg p-2">
              Github
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TiltCard;
