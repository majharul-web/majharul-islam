import React, { useEffect, useState } from 'react';
import Project from '../../Project/Project';
import './Projects.css';


const Projects = () => {
    const style = {
        backgroundColor: "#dff3f5"
    }

    // get projects
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/majharul-web/majharul-islam/main/public/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);



    return (
        <div style={style} className='py-5'>
            <div className="container">
                <h3 className='text-decoration-underline'>Recent Works</h3>
                <div className="row">
                    {
                        projects.map(project => <Project key={project.id} project={project}></Project>)
                    }
                </div>
            </div>



        </div>
    );
};

export default Projects;