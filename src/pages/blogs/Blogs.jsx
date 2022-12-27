import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogSidebar } from "./sidebar"
import { blogsData } from "../../mockData/blogs";
import Footer from "../../components/footer";
import "./blogs.css";


export const Blogs = () => {
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

  return <>
    <div className="blogs_wrapper">
      <section className="blogs_header">
        <h2>blog</h2>
        <p>our thoughts about everything</p>
      </section>
      <div className="blogs_content">
        <BlogSidebar onSearch={onSearch} onSelectCategory={onSelectCategory} />
        <main className="blogs_main">
          {blogs.map(blogs => {
            return <Link key={blogs.id} to={`${blogs.id}`} className="blogs_main_item">
              <img src={require("../../mockData/blogImages/" + blogs.img)} alt={blogs.title} />
              <span>{`${blogs.date} . ${blogs.readTime}`}</span>
              <h5>{blogs.title}</h5>
            </Link>
          })}
          <div className="blogs_main_footer">
            <div className="blogs_pagination">
              {["1", "2", "...", "11", "12"].map((page) => {
                const itemClass = currentPage === page ? "blogs_pagination__item blogs_pagination__item__active" : "blogs_pagination__item"
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
              <button className="blogs_pagination__item blogs_pagination__item__next"> {"next ->"} </button>
            </div>
          </div>
        </main>
      </div>
    </div>
    <Footer />
  </>
}