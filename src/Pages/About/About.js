import React from 'react';
import { Button } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import aboutIm from '../../Images/about.png';
import Progress from './Progress';

const About = () => {
    return (
        <div className='bg py-4'>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-7">
                        <h2 className='text-center fs-2 fw-bold py-1'>
                            <Typewriter
                                options={{
                                    strings: ['Who am I?', 'What am i Working on?'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>
                        <p className='py-3' style={{ textAlign: 'center' }}>
                            I am a self-taught MERN Stack web developer. I have Skills in web technology and I developed Full-Stack websites and applications using MongoDB, Express, React.js, Node.js with Firebase Authentication. I have a passion for building user-friendly responsive websites and applications. I actively seek out new technologies and stay up-to-date on industry trends and advancements.
                        </p>
                        <div className='text-center'>
                            <Button variant="outline-success" href='https://drive.google.com/file/d/1s-5dAuqEBIiFd99p67RcLK7feC6xyxpN/view?usp=sharing'
                                target='blank'>
                                Resume Download
                            </Button>
                        </div>





                    </div>
                    <div className="col-md-5 text-center">
                        <img className='w-75' src={aboutIm} alt="" />
                    </div>
                </div>
            </div>
            <div className='container'>
                <h2 className='fw-bold  text-center py-4 text-decoration-underline' style={{ color: '#00CBA9' }}>My Skill</h2>

                <Progress></Progress>

            </div>
        </div>
    );
};

export default About;