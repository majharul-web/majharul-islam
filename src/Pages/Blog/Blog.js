import Blog from "./SingleBlog";
const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "🚀 Mastering Communication: Connecting with New Clients",
      description:
        "In the fast-paced business world, effective communication is the cornerstone of success. Whether you're an entrepreneur, a freelancer, or a business professional, your ability to connect with new clients can make or break your endeavors. In this blog post, we'll delve into the intricacies of communication, particularly on LinkedIn, and provide you with valuable insights on how to initiate conversations, craft compelling messages, and master the art of follow-ups.",
      thumbnail:
        "https://media.licdn.com/dms/image/v2/D5622AQHoSHNuOWI7mg/feedshare-shrink_800/feedshare-shrink_800/0/1692538751566?e=1766016000&v=beta&t=UduAIo2RtVUHTQhYQc7pVDXlXQ19aldfmYAFGxtMUAA",
      link: "https://www.linkedin.com/posts/md-majharul-islam-a42b63200_mastering-the-art-of-communication-a-guide-activity-7099022060454125568-oWiV?utm_source=social_share_sheet&utm_medium=member_desktop_web",
    },
    {
      id: 2,
      title: "Binary Search: The Key to Fast and Efficient Searching",
      description:
        "Binary Search is a powerful algorithm used to quickly find the position of a target element in a sorted array. Instead of checking every element, it divides the search space in half with each step, drastically reducing the time it takes to locate the target.",
      thumbnail:
        "https://media.licdn.com/dms/image/v2/D5612AQFdWUQ98j9Iag/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1736054007408?e=1766016000&v=beta&t=PFxM-R4i4jSx-UMutVK2zM1mQxjWJc08zpF72XuF_qA",
      link: "https://www.linkedin.com/pulse/binary-search-ultimate-guide-efficient-searching-md-majharul-islam-ajhec/",
    },
    {
      id: 3,
      title: "🚀 Mastering Unit Testing with the AAA Pattern",
      description: "Unit testing made easy! The AAA pattern—Arrange, Act, Assert—is your secret weapon.",
      thumbnail: "https://i.ibb.co.com/tqpJBjD/1699518417356.jpg",
      link: "https://www.linkedin.com/posts/md-majharul-islam-a42b63200_unittesting-aaa-codequality-activity-7128296902097334272-Lc9t?utm_source=social_share_sheet&utm_medium=member_desktop_web",
    },
  ];

  return (
    <div className='bg py-3'>
      <div className='container'>
        <h3 className='text-center text-decoration-underline py-5'>Recent Blogs</h3>
        <div className='row g-5 justify-content-center align-items-center'>
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
