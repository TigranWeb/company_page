import Footer from "../../components/footer";
import { BlogSidebar } from "./sidebar"
import "./blog.css";

export const Blog = () => {
  const onSearch = (query) => {
    console.log(query);
  }

  const onSelectCategory = (categories) => {
    console.log(categories)
  }
  return <><div className="blog_wrapper">
    <section className="blog_header">
      <h2>blog</h2>
      <p>our thoughts about everything</p>
    </section>
    <div className="blog_content">
      <BlogSidebar onSearch={onSearch} onSelectCategory={onSelectCategory} />
      <main className="blog_main"> <h1>text</h1></main>
    </div>
  </div>
    <Footer />
  </>
}