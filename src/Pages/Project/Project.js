import React from 'react';
import { Button } from 'react-bootstrap';

const Project = ({ project }) => {
    const { projectName, projectType, image1 } = project
    return (
        <div className='col-md-4'>
            <div>
                <img src={image1} alt="not" />
            </div>
            <div>
                <h3>{projectName}</h3>
                <h5>{projectType}</h5>
                <Button variant='success'>See Details</Button>
            </div>
        </div>
    );
};

export default Project;