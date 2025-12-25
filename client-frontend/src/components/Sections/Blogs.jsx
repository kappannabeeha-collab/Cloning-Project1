import "./Blogs.css";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";

const blogs = [
  {
    id: 1,
    title: "Top 5 Wireless Earbuds You Must Try",
    image: blog1,
  },
  {
    id: 2,
    title: "Why Smartwatches Are a Game Changer",
    image: blog2,
  },
  {
    id: 3,
    title: "How to Choose the Perfect Headphones",
    image: blog3,
  },
];

const Blogs = () => {
  return (
    <section className="blogs-section">
      <h2 className="blogs-title">Blogs</h2>

      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} />

            <div className="blog-content">
              <h4>{blog.title}</h4>

              <button className="read-btn">
                Read More
                <span className="arrow">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
