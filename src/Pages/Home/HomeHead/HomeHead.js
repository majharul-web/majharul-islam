import React from "react";
import Typewriter from "typewriter-effect";
import im1 from "../../../Images/Md_Majharul_Islam-removebg-preview.png";
import "./HomeHead.css";

const HomeHead = () => {
  return (
    <div className='homehead-container'>
      <div className='text-center pt-5'>
        <p className='greeting'>👋 Hey There,</p>
        <h2 className='fw-bold name-title'>
          I am <span className='highlight'>Md Majharul Islam</span>
        </h2>
        <Typewriter
          className='text-center typewriter-effect'
          options={{
            strings: [
              "Frontend Developer | React Specialist",
              "Crafting Scalable Web Solutions",
              "JavaScript & TypeScript Enthusiast",
              "Expert in Next.js & Tailwind CSS",
              "Building Seamless User Experiences",
              "MERN Stack Developer",
              "Passionate Problem Solver",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <div>
          <img src={im1} alt='Majharul Islam' className='img-fluid profile-image' />
        </div>
      </div>
    </div>
  );
};

export default HomeHead;
