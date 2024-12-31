import emailjs from "emailjs-com";
import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import * as Yup from "yup";

const ContactForm = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_r16u215", "template_lc19q78", form.current, "user_OMBP8LcetYWjOWiSW3ALz")
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Your message has been sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("An error occurred, please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: sendEmail,
  });

  return (
    <div>
      <div className='py-5 px-3'>
        <h3 className='text-center py-3 fw-bold'>Contact Form</h3>
        {successMessage && <div className='alert alert-info text-center'>{successMessage}</div>}
        <div className='d-flex justify-content-center'>
          <form className='w-100' ref={form} onSubmit={formik.handleSubmit}>
            <div className='mb-3'>
              <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Name'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className='text-danger' style={{ fontSize: "13px" }}>
                  {formik.errors.name}
                </div>
              ) : null}
            </div>
            <div className='mb-3'>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='Email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className='text-danger' style={{ fontSize: "13px" }}>
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className='mb-3'>
              <input
                type='text'
                name='subject'
                className='form-control'
                placeholder='Subject'
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.subject && formik.errors.subject ? (
                <div className='text-danger' style={{ fontSize: "13px" }}>
                  {formik.errors.subject}
                </div>
              ) : null}
            </div>
            <div className='mb-3'>
              <textarea
                name='message'
                className='form-control'
                placeholder='Message'
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.message && formik.errors.message ? (
                <div className='text-danger' style={{ fontSize: "13px" }}>
                  {formik.errors.message}
                </div>
              ) : null}
            </div>
            <button type='submit' className='btn btn-success' disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
