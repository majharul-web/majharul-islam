import React from "react";
import { Button } from "react-bootstrap";

const Social = () => {
  const style = {
    backgroundColor: "#dff3f5",
  };
  return (
    <div className='py-5' style={style}>
      <div className='d-flex justify-content-center'>
        <div className='btn-group mb-3'>
          <Button
            size='lg'
            href='https://github.com/majharul-web'
            target='_blank'
            variant='outline-success'
            title='GitHub'
          >
            <img src='https://i.ibb.co.com/xmpj7th/github.png' alt='Github' style={{ height: "20px" }} />
            {/* <i className='fab fa-github'></i> */}
          </Button>

          <Button
            size='lg'
            href='https://codeforces.com/profile/majharul-web'
            target='_blank'
            variant='outline-success'
            title='Codeforces'
          >
            <img
              src='https://i.ibb.co.com/qJ87F6D/code-forces-1.png'
              alt='Codeforces'
              style={{ height: "20px" }}
            />
          </Button>

          <Button
            size='lg'
            href='https://leetcode.com/u/majharul-web'
            target='_blank'
            variant='outline-success'
            title='LeetCode'
          >
            <img src='https://i.ibb.co.com/FXczsDy/leetcode.png' alt='LeetCode' style={{ height: "20px" }} />
          </Button>

          <Button
            size='lg'
            href='https://www.linkedin.com/in/md-majharul-islam-a42b63200/'
            target='_blank'
            variant='outline-success'
            title='Linkedin'
          >
            <img src='https://i.ibb.co.com/Ptqhr7g/linkedin.png' alt='Linkedin' style={{ height: "20px" }} />
            {/* <i className='fab fa-linkedin'></i> */}
          </Button>

          <Button
            size='lg'
            href='https://www.facebook.com/fb.majharul'
            target='_blank'
            variant='outline-success'
            title='Facebook'
          >
            <img src='https://i.ibb.co.com/yNsm6Xh/facebook.png' alt='Facebook' style={{ height: "20px" }} />
            {/* <i className='fab fa-facebook'></i> */}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Social;
