import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import EarthCanvas from "./canvas/Earth";
import { GiConsoleController } from "react-icons/gi";

const contact = () => {
  const formref = useRef();
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setloading] = useState(false);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setloading(true);
    emailjs
      .send(
        "service_2joiwxf",
        "template_cs97zkf",
        {
          from_name: form.name,
          to_name: "Yaswant Profile",
          from_email: form.email,
          to_email: "yaswantkumar.s395@gmil.com",
          message: form.message,
        },
        "UMx_T4xzOu1Qh_pIR"
      )
      .then(
        () => {
          setloading(false);
          alert("Thank You .I will get Back To You As Soon As Possible!");
          setform({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setloading(false);
          console.log("error check the code !!!");
          alert("oops !!! something went wrong ");
        }
      );
  };
  return (
    <>
      <h3 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl text-center tracking-tight text-transparent   font-semibold">
        Contact Me
      </h3>
      <div className="xl:mt-12 mt-5 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-transparent p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get In Touch</p>

          <form
            ref={formref}
            onSubmit={handlesubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                onChange={handlechange}
                placeholder="What's Your Name"
                value={form.name}
                className="bg-transparent py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-2 border-purple-700 font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                onChange={handlechange}
                placeholder="Enter Your Email"
                value={form.email}
                className="bg-transparent py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-2 border-purple-700 font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                name="message"
                rows="7"
                onChange={handlechange}
                placeholder="What do you want to say !"
                value={form.message}
                className="bg-transparent py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-2 border-purple-700 font-medium"
              />
            </label>
            <button
              className="bg-transparent text-white py-3 px-8 outline-none font-bold shadow-md shadow-purple-500 hover:text-purple-500 rounded-xl w-fit"
              type="submit"
            >
              {loading ? "sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          className="xl:flex-1 clh-auto md:h-[550px] h-[350px] flex-[0.25]"
          variants={slideIn("right", "tween", 0.2, 1)}
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(contact, "contact");
