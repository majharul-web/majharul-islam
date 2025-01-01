import React from "react";
import "./Blog.css"; // Custom CSS for styling and animations

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Mastering React: Best Practices for 2025",
      description:
        "Discover the latest trends and best practices in React development for creating high-performance and maintainable web applications.",
      date: "January 1, 2025",
      image: "https://via.placeholder.com/400x250?text=React+Blog",
      link: "https://www.linkedin.com/posts/your-react-blog-link",
    },
    {
      id: 2,
      title: "Understanding TypeScript: A Beginner's Guide",
      description:
        "Learn how TypeScript enhances JavaScript development with type safety and better tooling for modern web applications.",
      date: "December 28, 2024",
      image: "https://via.placeholder.com/400x250?text=TypeScript+Blog",
      link: "https://www.linkedin.com/posts/your-typescript-blog-link",
    },
    {
      id: 3,
      title: "Responsive Design with Tailwind CSS",
      description:
        "Explore how Tailwind CSS simplifies responsive design and speeds up development with utility-first classes.",
      date: "December 15, 2024",
      image: "https://via.placeholder.com/400x250?text=Tailwind+CSS+Blog",
      link: "https://www.linkedin.com/posts/your-tailwind-blog-link",
    },
  ];

  return (
    <div className='blog-section bg py-5'>
      <div className='container'>
        <h3 className='section-title text-center mb-5 fadeIn'>Blog</h3>
        <div className='row justify-content-center'>
          {blogs.map((blog) => (
            <div key={blog.id} className='col-lg-4 col-md-6 col-sm-12 mb-4'>
              <div className='blog-card shadow-lg slideIn'>
                <div className='blog-image'>
                  <img src={blog.image} alt={blog.title} className='img-fluid rounded-top' />
                </div>
                <div className='blog-content'>
                  <h5 className='blog-title'>{blog.title}</h5>
                  <p className='blog-description'>{blog.description}</p>
                  <p className='blog-date'>{blog.date}</p>
                  <a
                    href={blog.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary blog-link'
                  >
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
