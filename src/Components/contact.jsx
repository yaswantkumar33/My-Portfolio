// import React, { useRef, useState } from "react";
// import { CONTACT } from "../constants";
// import { motion } from "framer-motion";
// import { slideIn } from "../utils/motion";
// import { styles } from "../styles";
// const contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };
//   return (
//     // <div className="border-b border-neutral-900 pb-20">
//     //   <h2 className="text-center text-4xl my-10">Get In Touch</h2>
//     //   <div className="text-center tracking-tighter">
//     //     <p className="my-4">{CONTACT.address}</p>
//     //     <p className="my-4">{CONTACT.phoneNo}</p>
//     //     <a href="#" className=" underline">
//     //       {CONTACT.email}
//     //     </a>
//     //   </div>
//     // </div>
//     <div
//       className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
//     >
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className="mt-12 flex flex-col gap-8"
//         >
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Name</span>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your good name?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your email</span>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your web address?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Message</span>
//             <textarea
//               rows={7}
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="What you want to say?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>

//           <button
//             type="submit"
//             className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default contact;
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import EarthCanvas from "./canvas/Earth";
const contact = () => {
  const formref = useRef();
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handlechange = () => {};
  const handlesubmit = () => {};
  return (
    <>
      <h3 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl text-center tracking-tight text-transparent   ">
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
                value={form.name}
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
              {false ? "sending..." : "Send"}
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
