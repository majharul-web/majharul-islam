import emailjs from "emailjs-com";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const ErrorMessage = ({ touched, error }) =>
  touched && error ? (
    <div className='text-danger' style={{ fontSize: "13px" }}>
      {error}
    </div>
  ) : null;

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setIsSubmitting(true);

      // Prepare the template parameters
      const templateParams = {
        to_name: "MD Majharul Islam", // Replace with the recipient name
        from_name: values.name,
        message: values.message,
        from_email: values.email, // Optional: Add sender's email
        subject: values.subject, // Optional: Pass the subject if the template supports it
      };

      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(() => {
          setSuccessMessage("Your message has been sent successfully!");
          resetForm();
        })
        .catch(() => setSuccessMessage("An error occurred, please try again."))
        .finally(() => setIsSubmitting(false));
    },
  });

  return (
    <div className='py-5 px-3'>
      {successMessage && (
        <div className='alert alert-success text-center' aria-live='polite'>
          {successMessage}
        </div>
      )}
      <div className='d-flex justify-content-center'>
        <form className='w-100' onSubmit={formik.handleSubmit}>
          {["name", "email", "subject", "message"].map((field, idx) => (
            <div className='mb-3' key={idx}>
              {field === "message" ? (
                <textarea
                  name={field}
                  className='form-control'
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formik.values[field]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  className='form-control'
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formik.values[field]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              )}
              <ErrorMessage touched={formik.touched[field]} error={formik.errors[field]} />
            </div>
          ))}
          <button type='submit' className='btn btn-success' disabled={isSubmitting} aria-busy={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
