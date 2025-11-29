import { useEffect, useState } from "react";
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
              <strong>Results-driven Fullstack (Frontend-focused) Developer</strong> with{" "}
              <strong>3.5+ years of experience</strong> building{" "}
              <strong>scalable, high-performing web applications</strong> using{" "}
              <strong>Next.js, React, TypeScript, Redux, and Tailwind CSS</strong>. Skilled at transforming
              complex business needs into <strong>clean, intuitive, and responsive interfaces</strong> while
              ensuring <strong>maintainability and performance</strong>. Experienced across{" "}
              <strong>OTA platforms, e-commerce systems, and enterprise dashboards</strong>, improving
              workflow efficiency and user experience.
              <br />
              <br />
              Over the past year, expanded backend expertise through hands-on work with{" "}
              <strong>Python, Django, Node.js, Express.js, SQL, and MongoDB</strong>, and contributed to
              backend API development at <strong>Citycom Travel</strong> using{" "}
              <strong>Golang, Gin, GORM, MySQL, Redis</strong>, and <strong>microservice architecture</strong>
              . Built multiple full-stack projects, strengthened system reliability, and optimized
              data-processing performance. Passionate about{" "}
              <strong>end-to-end development, clean architecture</strong>, and delivering solutions that{" "}
              <strong>drive meaningful business impact</strong>.
              <br />
              <br />
              Let’s connect! I’m always excited to collaborate on{" "}
              <strong>impactful web development projects</strong> and <strong>innovative solutions</strong>.
            </p>

            <div>
              <Button
                variant='outline-success fw-bold'
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
        {/* <h2 className='fw-bold text-center py-4 text-decoration-underline' style={{ color: "#00CBA9" }}>
          My Skill
        </h2> */}
        <Progress />
      </div>
    </div>
  );
};

export default About;
