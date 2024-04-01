import React from "react";
import { motion } from "framer-motion";
const Data = {
  name: "Arulmozhikumar",
  about:
    "An Aspiring Full Stack Developer.Passionate about building robust web applications with the MERN stack and crafting beautiful user interfaces using Tailwind CSS and other UI libraries.",
  btn: "Resume",
};
const Hero = () => {
  return (
    <>
      <div className="min-h-screen hero bg-base-200">
        <div className="text-center hero-content ">
          <motion.div
            className="md:w-1/2"
            initial={{
              opacity: 0,

              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
              },
            }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl font-bold">{Data.name}</h1>
            <p className="py-6">{Data.about}</p>
            <a href="/Arulmozhikumar.pdf" download="Arulmozhikumar.pdf">
              <button className="btn btn-primary">{Data.btn}</button>
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
