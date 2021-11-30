import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactText from '../ContactText/ContactText';

const Contact = () => {
    return (
        <div className='bg'>
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <ContactText></ContactText>
                    </div>
                    <div className="col-md-6">
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Contact;