import React from "react";
const Data = {
  name: "Arulmozhikumar",
  about:
    "An Aspiring Full Stack Developer.Passionate about building robust web applications with the MERN stack and crafting beautiful user interfaces using Tailwind CSS and other UI libraries.",
  btn: "Resume",
};
const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center ">
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold">{Data.name}</h1>
            <p className="py-6">{Data.about}</p>
            <button className="btn btn-primary">{Data.btn}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
