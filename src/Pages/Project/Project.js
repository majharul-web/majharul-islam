import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { projectName, projectType, image1, id } = project;
  return (
    <div className='col-md-4 pt-3'>
      <div style={{ textAlign: "center" }}>
        <img className='img-fluid' style={{ height: "100%" }} src={image1} alt='projectName' />
      </div>
      <div className='text-center py-3'>
        <h3>{projectName}</h3>
        <h5>{projectType}</h5>
        <Link to={`/projectDetails/${id}`}>
          <Button variant='success'>See Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
