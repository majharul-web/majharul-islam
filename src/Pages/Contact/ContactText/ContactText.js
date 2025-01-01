import React from "react";

const ContactText = () => {
  return (
    <div>
      <p>
        I am always open to discussing new projects, collaborations, or any queries you may have. Please feel
        free to reach out to me using any of the following methods:
      </p>
      <div>
        <ul>
          <li>
            <strong>Email:</strong> <a href='mailto:majharul.live@gmail.com'>majharul.live@gmail.com</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href='https://www.linkedin.com/in/md-majharul-islam-a42b63200/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Md Majharul Islam
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a href='https://github.com/majharul-web' target='_blank' rel='noopener noreferrer'>
              majharul-web
            </a>
          </li>
        </ul>
      </div>
      <p>
        Alternatively, you can use the contact form on this page to get in touch with me directly. I look
        forward to connecting with you.
      </p>
    </div>
  );
};

export default ContactText;
