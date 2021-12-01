import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const Progress = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='w-75'>
                <div className="row">
                    <div className="col-md-4 text-end">
                        <h3>HTML</h3>
                    </div>
                    <div className="col-md-8">
                        <ProgressBar
                            completed={95}
                            bgColor="#FF4F5A"
                            height="30px"
                            borderRadius="0"
                            labelAlignment="center"
                            baseBgColor="#00CBA9"
                            labelColor="#eee0e0"
                            margin="5px 0"
                            padding="5px"
                            transitionDuration="1s"
                            animateOnRender
                            dir="auto"
                            customLabel="95%"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-end">
                        <h3>CSS</h3>
                    </div>
                    <div className="col-md-8">
                        <ProgressBar
                            completed={90}
                            bgColor="#FF4F5A"
                            height="30px"
                            borderRadius="0"
                            labelAlignment="center"
                            baseBgColor="#00CBA9"
                            labelColor="#eee0e0"
                            margin="5px 0"
                            padding="5px"
                            transitionDuration="1s"
                            animateOnRender
                            dir="auto"
                            customLabel="90%"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-end">
                        <h3>Bootstrap</h3>
                    </div>
                    <div className="col-md-8">
                        <ProgressBar
                            completed={90}
                            bgColor="#FF4F5A"
                            height="30px"
                            borderRadius="0"
                            labelAlignment="center"
                            baseBgColor="#00CBA9"
                            labelColor="#eee0e0"
                            margin="5px 0"
                            padding="5px"
                            transitionDuration="1s"
                            animateOnRender
                            dir="auto"
                            customLabel="90%"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-end">
                        <h3>Material UI</h3>
                    </div>
                    <div className="col-md-8">
                        <ProgressBar
                            completed={70}
                            bgColor="#FF4F5A"
                            height="30px"
                            borderRadius="0"
                            labelAlignment="center"
                            baseBgColor="#00CBA9"
                            labelColor="#eee0e0"
                            margin="5px 0"
                            padding="5px"
                            transitionDuration="1s"
                            animateOnRender
                            dir="auto"
                            customLabel="70%"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-end">
                        <h3>Javascript</h3>
                    </div>
                    <div className="col-md-8">
                        <ProgressBar
                            completed={75}
                            bgColor="#FF4F5A"
                            height="30px"
                            borderRadius="0"
                            labelAlignment="center"
                            baseBgColor="#00CBA9"
                            labelColor="#eee0e0"
                            margin="5px 0"
                            padding="5px"
                            transitionDuration="1s"
                            animateOnRender
                            dir="auto"
                            customLabel="75%"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-end">
                        <h3>React.js</h3>
                    </div>
                    <div className="col-md-8">
                        <ProgressBar
                            completed={67}
                            bgColor="#FF4F5A"
                            height="30px"
                            borderRadius="0"
                            labelAlignment="center"
                            baseBgColor="#00CBA9"
                            labelColor="#eee0e0"
                            margin="5px 0"
                            padding="5px"
                            transitionDuration="1s"
                            animateOnRender
                            dir="auto"
                            customLabel="67%"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-end">
                        <h3>Node.js</h3>
                    </div>
                    <div className="col-md-8">
                        <ProgressBar
                            completed={67}
                            bgColor="#FF4F5A"
                            height="30px"
                            borderRadius="0"
                            labelAlignment="center"
                            baseBgColor="#00CBA9"
                            labelColor="#eee0e0"
                            margin="5px 0"
                            padding="5px"
                            transitionDuration="1s"
                            animateOnRender
                            dir="auto"
                            customLabel="67%"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-end">
                        <h3>Express.js</h3>
                    </div>
                    <div className="col-md-8">
                        <ProgressBar
                            completed={65}
                            bgColor="#FF4F5A"
                            height="30px"
                            borderRadius="0"
                            labelAlignment="center"
                            baseBgColor="#00CBA9"
                            labelColor="#eee0e0"
                            margin="5px 0"
                            padding="5px"
                            transitionDuration="1s"
                            animateOnRender
                            dir="auto"
                            customLabel="65%"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-end">
                        <h3>Mongo DB</h3>
                    </div>
                    <div className="col-md-8">
                        <ProgressBar
                            completed={70}
                            bgColor="#FF4F5A"
                            height="30px"
                            borderRadius="0"
                            labelAlignment="center"
                            baseBgColor="#00CBA9"
                            labelColor="#eee0e0"
                            margin="5px 0"
                            padding="5px"
                            transitionDuration="1s"
                            animateOnRender
                            dir="auto"
                            customLabel="70%"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Progress;