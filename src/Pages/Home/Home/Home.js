import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className='text-center'>
            <h3>This is Home</h3>
            <Typewriter
                options={{
                    strings: ['I am Majharul Isam', 'React Developer'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    );
};

export default Home;