import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import "./ProjectDetails.css"; // Import CSS for animations and styling

const ProjectDetails = () => {
  const { id } = useParams();

  const [projects, setProjects] = useState([]);
  const [exactProject, setExactProject] = useState({});

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/majharul-web/majharul-islam/main/public/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  useEffect(() => {
    if (projects.length) {
      const exactProject = projects.find((project) => project.id == id);
      setExactProject(exactProject);
    }
  }, [id, projects]);

  const { projectName, projectType, image1, liveLink, clientCode, serverCode, desc, technology } =
    exactProject;

  return (
    <div className='bg py-5'>
      <div className='container'>
        <h3 className='text-center fw-bold py-3 fadeIn'>{`Details Of ${projectName}`}</h3>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-md-6'>
            <img className='img-fluid img-thumbnail slideIn' src={image1} alt='' />
          </div>
          <div className='col-md-6'>
            <div className='fadeIn'>
              <h5>
                <span className='fw-bold'>Project Name: </span>
                {projectName}
              </h5>
              <h6>
                <span className='fw-bold'>Project Type: </span>
                {projectType}
              </h6>
              <p>
                <span className='fw-bold'>Technology Used: </span>
                {technology}
              </p>
              <p>
                <span className='fw-bold'>Features: </span>
                {desc}
              </p>

              <div className='d-flex justify-content-center'>
                <div className='btn-group mb-3'>
                  <Button
                    size='lg'
                    href={liveLink}
                    target='_blank'
                    variant='outline-success'
                    className={`animateBtn ${!liveLink ? "disabledBtn" : ""}`}
                    disabled={!liveLink}
                  >
                    Live Site
                  </Button>
                  <Button
                    size='lg'
                    href={clientCode}
                    target='_blank'
                    variant='outline-success'
                    className={`animateBtn ${!clientCode ? "disabledBtn" : ""}`}
                    disabled={!clientCode}
                  >
                    Client Code
                  </Button>
                  <Button
                    size='lg'
                    href={serverCode}
                    target='_blank'
                    variant='outline-success'
                    className={`animateBtn ${!serverCode ? "disabledBtn" : ""}`}
                    disabled={!serverCode}
                  >
                    Server Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
