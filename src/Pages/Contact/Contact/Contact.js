import React from "react";
import { Fade } from "react-reveal";
import ContactForm from "../ContactForm/ContactForm";
import ContactText from "../ContactText/ContactText";

const Contact = () => {
  return (
    <div className='bg'>
      <div className='container py-5'>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-md-6'>
            <Fade left>
              <ContactText />
            </Fade>
          </div>
          <div className='col-md-6'>
            <Fade right>
              <ContactForm />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
