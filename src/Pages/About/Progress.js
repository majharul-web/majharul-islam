import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

const skills = [
  { name: "JavaScript", progress: 90 },
  { name: "TypeScript", progress: 70 },
  { name: "React", progress: 90 },
  { name: "Next.js", progress: 85 },
  { name: "Redux (RTK, RTK Query)", progress: 80 },
  { name: "Node.js", progress: 65 },
  { name: "Express.js", progress: 60 },
  { name: "MongoDB", progress: 65 },
  { name: "C", progress: 60 },
  { name: "C++", progress: 65 },
  { name: "DSA", progress: 60 },
  { name: "Tailwind CSS", progress: 85 },
  { name: "Bootstrap", progress: 80 },
  { name: "HTML", progress: 95 },
  { name: "CSS", progress: 90 },
  { name: "Sass", progress: 70 },
  { name: "SQL (PostgreSQL)", progress: 50 },
  { name: "React Native", progress: 55 },
];

const Progress = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className='w-75'>
        {skills.map((skill, index) => (
          <div className='row my-3' key={index}>
            <div className='col-md-4 text-end'>
              <h5>{skill.name}</h5>
            </div>
            <div className='col-md-8'>
              <ProgressBar
                completed={skill.progress}
                customLabel={`${skill.progress}%`}
                bgColor='#FF4F5A'
                height='30px'
                borderRadius='0'
                labelAlignment='center'
                baseBgColor='#00CBA9'
                labelColor='#eee0e0'
                margin='5px 0'
                padding='5px'
                transitionDuration='1s'
                animateOnRender
                dir='auto'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
