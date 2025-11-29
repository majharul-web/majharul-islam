import ProgressBar from "@ramonak/react-progress-bar";
import "./Skills.css";

// ---- Top skills (Circular) ----
const topSkills = [
  { name: "JavaScript", progress: 90 },
  { name: "React.js", progress: 90 },
  { name: "Next.js", progress: 85 },
  { name: "TypeScript", progress: 85 },
  { name: "Tailwind CSS", progress: 90 },
  { name: "Redux Toolkit", progress: 85 },
];

// ---- Backend & Tools (Bars) ----
const backendSkills = [
  { name: "Python", progress: 75 },
  { name: "Django (Basic)", progress: 70 },
  { name: "Golang", progress: 75 },
  { name: "Node.js", progress: 70 },
  { name: "Express.js", progress: 70 },
  { name: "MongoDB", progress: 70 },
  { name: "MySQL", progress: 60 },
  { name: "PostgreSQL (Basic)", progress: 50 },
];

// ---- Other skills (Chips) ----
const otherSkills = ["C", "C++", "DSA", "REST APIs", "JWT Auth", "Git", "Linux", "Microservices (Basic)"];

const Skills = () => {
  return (
    <div className='skills-container container pt-2 pb-4'>
      {/* ---------- TOP SKILLS (CIRCULAR) ---------- */}
      <h2 className='section-title text-center mb-5 fw-bold fade-in'>Top Skills</h2>
      <div className='d-flex flex-wrap justify-content-center gap-4'>
        {topSkills.map((skill, idx) => (
          <div
            className='circle-wrapper text-center circle-animate'
            key={idx}
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            <div
              className='circle'
              style={{
                background: `conic-gradient(#FF4F5A ${skill.progress * 3.6}deg, #e6e6e6 0deg)`,
              }}
            >
              <div className='inner-circle'>
                <span className='percent-text'>{skill.progress}%</span>
              </div>
            </div>
            <h6 className='mt-2'>{skill.name}</h6>
          </div>
        ))}
      </div>

      {/* ---------- BACKEND & TOOLS ---------- */}
      <h2 className='section-title text-center mt-5 mb-4 fw-bold fade-in'>Backend & Tools</h2>
      <div className='w-75 mx-auto'>
        {backendSkills.map((skill, idx) => (
          <div className='my-3 slide-left' key={idx} style={{ animationDelay: `${idx * 0.15}s` }}>
            <h6 className='mb-1'>{skill.name}</h6>
            <ProgressBar
              completed={skill.progress}
              bgColor='#FF4F5A'
              baseBgColor='#00CBA9'
              height='20px'
              customLabel={`${skill.progress}%`}
              labelColor='#333'
              labelSize='12px'
            />
          </div>
        ))}
      </div>

      {/* ---------- OTHER SKILLS (CHIPS) ---------- */}
      <h2 className='section-title text-center mt-5 mb-3 fw-bold fade-in'>Other Skills</h2>
      <div className='d-flex flex-wrap justify-content-center gap-2'>
        {otherSkills.map((skill, idx) => (
          <span className='skill-chip chip-animate' key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
