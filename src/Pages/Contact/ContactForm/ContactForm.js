import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_r16u215', 'template_lc19q78', form.current, 'user_OMBP8LcetYWjOWiSW3ALz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset()
    };


    return (
        <div>
            <div className='py-5 px-3'>
                <h3 className='text-center py-3 fw-bold'>Contact Form</h3>
                <div className='d-flex justify-content-center '>

                    <form className='w-100' ref={form} onSubmit={sendEmail}>
                        <div class="mb-3">
                            <input type="text" name="name" class="form-control" placeholder="Name" />
                        </div>
                        <div class="mb-3">
                            <input type="email" name="email" class="form-control" placeholder="Email" />
                        </div>
                        <div class="mb-3">
                            <input type="text" name="name" class="form-control" placeholder="Subject" />
                        </div>
                        <div class="mb-3">
                            <textarea name="message" class="form-control" placeholder="Message" />
                        </div>
                        <button type="submit" class="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default ContactForm;