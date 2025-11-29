import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Project.css"; // Import the CSS file for the project card styles

const Project = ({ project }) => {
  const { projectName, projectType, image1, id } = project;
  return (
    <div className='col-md-4 pt-3'>
      <div className='project-card'>
        <div style={{ textAlign: "center" }}>
          <img className='img-fluid' style={{ height: "100%" }} src={image1} alt={projectName} />
        </div>
        <div className='project-details text-center py-3'>
          <h3>{projectName}</h3>
          <h5 className='mb-3'>{projectType}</h5>
          <Link to={`/projectDetails/${id}`}>
            <Button variant='success'>See Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
