import React from "react";
import "./Blog.css"; // Import CSS for animations and styling

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Mastering React: Best Practices for 2025",
      description:
        "Discover the latest trends and best practices in React development for creating high-performance and maintainable web applications.",
      date: "January 1, 2025",
      link: "https://www.linkedin.com/posts/your-react-blog-link",
    },
    {
      id: 2,
      title: "Understanding TypeScript: A Beginner's Guide",
      description:
        "Learn how TypeScript enhances JavaScript development with type safety and better tooling for modern web applications.",
      date: "December 28, 2024",
      link: "https://www.linkedin.com/posts/your-typescript-blog-link",
    },
    {
      id: 3,
      title: "Responsive Design with Tailwind CSS",
      description:
        "Explore how Tailwind CSS simplifies responsive design and speeds up development with utility-first classes.",
      date: "December 15, 2024",
      link: "https://www.linkedin.com/posts/your-tailwind-blog-link",
    },
  ];

  return (
    <div className='blog-bg py-5'>
      <h3 className='text-center py-3 fadeIn'>Blog</h3>
      <div className='container'>
        <div className='row'>
          {blogs.map((blog) => (
            <div key={blog.id} className='col-md-4 fadeInCard'>
              <div className='card shadow-sm mb-4'>
                <div className='card-body'>
                  <h5 className='card-title'>{blog.title}</h5>
                  <p className='card-text'>{blog.description}</p>
                  <p className='text-muted small'>{blog.date}</p>
                  <a href={blog.link} target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
                    Visit Blog
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
