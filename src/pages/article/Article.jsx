import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { TbChevronRight } from "react-icons/tb";
import { blogsData } from "../../mockData/blogs";
import "./article.css";


const PathRender = (props) => {

  const { articleName } = props
  return <div className="pathBar_container">
    <Link to="/"><AiFillHome color="#2BB371" /></Link>
    <TbChevronRight color="#3D4E57" />
    <Link to="/blog">Blog</Link>
    <TbChevronRight color="#3D4E57" />
    <span>{articleName || ""}</span>
  </div>
}


export const Article = () => {
  const { articleId } = useParams()
  const [article, setArticle] = useState();
  useEffect(() => {
    // get article data from server
    const currentBlog = blogsData.find(item => item.id === articleId);
    if (currentBlog) {
      setTimeout(() => {
        setArticle(currentBlog);
      }, 1000);
    }
  }, [])

  return (
    <div className="article_container">
      {!article ? <h1 style={{ textAlign: "center" }}>loading ...</h1> :
        <>
          <PathRender articleName={article.title} />
          <main className="article_main">
            <section
              className="article_header"
              style={{ backgroundImage: `url(${require("../../mockData/blogImages/" + article.img)})` }}>
              <div className="article_header__title">
                <h1> {article.title}</h1>
              </div>
            </section>
          </main>
        </>
      }
    </div>
  )
}