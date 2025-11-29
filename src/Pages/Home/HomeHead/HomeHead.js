import Typewriter from "typewriter-effect";
import im1 from "../../../Images/Md_Majharul_Islam-removebg-preview.png";
import "./HomeHead.css";

const HomeHead = () => {
  return (
    <div className='homehead-container fade-in-section'>
      <div className='text-center pt-5'>
        <p className='greeting slide-down'>👋 Hey There,</p>

        <h2 className='fw-bold name-title slide-up'>
          I am <span className='highlight'>Md Majharul Islam</span>
        </h2>

        <div className='typewriter-wrapper fade-up'>
          <Typewriter
            options={{
              strings: [
                "Frontend Developer (React / Next.js)",
                "Fullstack Developer (MERN + Django + Golang)",
                "Crafting High-Performance Web Apps",
                "JavaScript & TypeScript Specialist",
                "Clean UI/UX with Tailwind CSS",
                "Building Scalable Digital Solutions",
                "Passionate Problem Solver",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className='img-wrapper'>
          <img src={im1} alt='Md Majharul Islam' className='img-fluid profile-image float-in' />
        </div>
      </div>
    </div>
  );
};

export default HomeHead;
