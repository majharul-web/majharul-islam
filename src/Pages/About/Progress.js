import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const Progress = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='w-75'>
                <div className="row">
                    <div className="col-md-4 text-end">
                        <h5>HTML</h5>
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
                        <h5>CSS</h5>
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
                        <h5>Bootstrap</h5>
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
                        <h5>Material UI</h5>
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
                        <h5>Javascript</h5>
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
                        <h5>React.js</h5>
                    </div>
                    <div className="col-md-8">
                        <ProgressBar
                            completed={80}
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
                            customLabel="80%"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-end">
                        <h5>Node.js</h5>
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
                        <h5>Express.js</h5>
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
                        <h5>Mongo DB</h5>
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