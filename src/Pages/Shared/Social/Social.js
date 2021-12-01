import React from 'react';
import { Button } from 'react-bootstrap';

const Social = () => {
    const style = {
        backgroundColor: "#dff3f5"

    }
    return (
        <div className="py-5" style={style}>
            <div className="d-flex justify-content-center">
                <div className="btn-group mb-3">

                    <Button size="lg" href="https://github.com/majharul-web" target="_blank" variant="outline-success">
                        <i className="fab fa-github"></i>
                    </Button>

                    <Button size="lg" href="https://www.linkedin.com/in/md-majharul-islam-a42b63200/" target="_blank" variant="outline-success">
                        <i className="fab fa-linkedin"></i>
                    </Button>

                    <Button size="lg" href="https://www.facebook.com/Majharuljony357" target="_blank" variant="outline-success">
                        <i className="fab fa-facebook"></i>
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default Social;