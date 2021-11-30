import React from 'react';
import Typewriter from 'typewriter-effect';
import './HomeHead.css';
import im1 from '../../../Images/dev-removebg-preview.png';

const HomeHead = () => {
    return (
        <div className='bg'>
            <div className='text-center pt-5'>
                <p>Hey There,</p>
                <h2 className='fw-bold'>I am Majharul Islam</h2>
                <Typewriter className='text-center'
                    options={{
                        strings: ['Web Developer & Programmer', 'Javascript  Lover', 'React Developer', 'MERN Stack Developer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                <div>
                    <img src={im1} className='img-fluid' alt="not f" />
                </div>

            </div>

        </div>
    );
};

export default HomeHead;