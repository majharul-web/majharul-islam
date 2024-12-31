import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import aboutIm from "../../Images/about.png";
import "./About.css"; // Import the CSS file for animations
import Progress from "./Progress";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the visibility state on mount to start animation
    setIsVisible(true);
  }, []);

  return (
    <div className='bg py-4'>
      <div className='container'>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-md-7'>
            <h2 className={`text-center fs-2 fw-bold py-1 ${isVisible ? "fadeIn" : ""}`}>
              <Typewriter
                options={{
                  strings: ["Who am I?", "What am I Working on?"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className={`py-3 ${isVisible ? "fadeIn" : ""}`} style={{ textAlign: "justify" }}>
              As a Frontend Developer with over 2.5 years of experience, I specialize in creating
              high-quality, responsive, and user-centric web applications. I have a deep expertise in
              JavaScript, React, Next.js, and Tailwind CSS, and I'm also skilled in TypeScript, Node.js, and
              database management (MongoDB, MySQL). With a solid understanding of both front-end and back-end
              development, I thrive in fast-paced, collaborative environments, where my focus on clean,
              maintainable code drives successful outcomes.
              <br />
              <br />
              I have successfully contributed to impactful projects like AeroTrip (B2B OTA platform), where I
              built key features for travel agency workflows, and Automart (E-commerce platform), enhancing
              user experience with seamless cart management and checkout functionality. In addition to my
              technical expertise, I bring a passion for user experience design, ensuring every project is
              both functional and visually appealing.
              <br />
              <br />
              Let’s connect! I’m always open to discussing new opportunities and projects that push the
              boundaries of web development.
            </p>
            <div>
              <Button
                variant='outline-success'
                href='https://drive.google.com/file/d/1s-5dAuqEBIiFd99p67RcLK7feC6xyxpN/view?usp=sharing'
                target='_blank'
              >
                Resume Download
              </Button>
            </div>
          </div>
          <div className={`col-md-5 text-center ${isVisible ? "slideIn" : ""}`}>
            <img className='w-75' src={aboutIm} alt='' />
          </div>
        </div>
      </div>
      <div className='container'>
        <h2 className='fw-bold text-center py-4 text-decoration-underline' style={{ color: "#00CBA9" }}>
          My Skill
        </h2>
        <Progress></Progress>
      </div>
    </div>
  );
};

export default About;
