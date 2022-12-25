import Footer from "../../components/footer";
import { BlogSidebar } from "./sidebar"
import "./blog.css";
import { useEffect, useState } from "react";
import { blogsData } from "../../mockData/blogs";
import { Link } from "react-router-dom";


export const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState("1");

  const onSearch = (query) => {
  }

  const onSelectCategory = (categories) => {
  }

  const handelPageChange = (e) => {
    const { name } = e.currentTarget
    setCurrentPage(name);
  }

  useEffect(() => {
    //mock data request 
    setBlogs(blogsData);
  }, [])

  return <><div className="blog_wrapper">
    <section className="blog_header">
      <h2>blog</h2>
      <p>our thoughts about everything</p>
    </section>
    <div className="blog_content">
      <BlogSidebar onSearch={onSearch} onSelectCategory={onSelectCategory} />
      <main className="blog_main">
        {blogs.map(blog => {
          return <Link key={blog.id} className="blog_main_item">
            <img src={require("../../mockData/blogImages/" + blog.img)} alt={blog.title} />
            <span>{`${blog.date} . ${blog.readTime}`}</span>
            <h5>{blog.title}</h5>
          </Link>
        })}
        <div className="blog_main_footer">
          <div className="blog_pagination">
            {["1", "2", "...", "11", "12"].map((page) => {
              const itemClass = currentPage === page ? "blog_pagination__item blog_pagination__item__active" : "blog_pagination__item"
              return (
                <button
                  key={page}
                  name={page}
                  className={itemClass}
                  onClick={handelPageChange}
                >
                  {page}
                </button>
              )
            })}
            <button className="blog_pagination__item blog_pagination__item__next"> {"next ->"} </button>
          </div>
        </div>
      </main>
    </div>
  </div>
    <Footer />
  </>
}