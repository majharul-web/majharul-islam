import React, { useEffect, useState } from "react";
import Project from "../Project/Project";

const PortFolio = () => {
  // get projects
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/majharul-web/majharul-islam/main/public/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  console.log("projects", projects);
  return (
    <div className='bg py-3'>
      <div className='container'>
        <h3 className='text-center text-decoration-underline py-5'>Recent Works</h3>
        <div className='row justify-content-center align-items-center'>
          {projects.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
