import React from "react";
import { Button } from "react-bootstrap";
import "./Blog.css"; // Import CSS for blog styles

const Blog = ({ blog }) => {
  const { title, description, thumbnail, link } = blog;
  return (
    <div className='col-md-4 pt-3'>
      <div className='blog-card'>
        <div style={{ textAlign: "center" }}>
          <img className='img-fluid' style={{ height: "100%" }} src={thumbnail} alt={title} />
        </div>
        <div className='blog-details text-center py-3'>
          <h3>{title}</h3>
          <p>{description.slice(0, 100)}...</p>

          <Button variant='success' href={link} target='_blank'>
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
