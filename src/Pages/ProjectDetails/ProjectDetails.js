import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const { id } = useParams();

    const [projects, setProjects] = useState([]);
    const [exactProject, setExactProject] = useState({})
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/majharul-web/majharul-islam/main/public/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    useEffect(() => {
        if (projects.length) {
            const exactProject = projects.find(project => project.id == id);
            setExactProject(exactProject);
        }
    }, [projects])

    const { projectName, projectType, image1, } = exactProject;

    return (
        <div className='bg py-5'>
            <div className="container">
                <h3 className='text-center fw-bold py-3'>Details Of {projectName}</h3>
                <div>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <img className='img-fluid img-thumbnail' src={image1} alt="" />
                        </div>
                        <div className="col-md-6">
                            <div>
                                <h5>Project Name: {projectName}</h5>
                                <h6>Project Type: {projectType}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProjectDetails;