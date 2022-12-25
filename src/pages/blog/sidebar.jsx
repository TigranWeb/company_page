import { useState, useEffect } from "react";
import {blogCategories} from "../../mockData/blogs";

export const BlogSidebar = (props) => {
  const { onSearch, onSelectCategory } = props
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const hanselSelectCategory = (e) => {
    const { name: newCategory } = e.currentTarget;
    if (newCategory === "All categories") {
      setSelectedCategories([]);
      return
    }
    setSelectedCategories(categories => {
     let  newCategoryList = [];
      if(selectedCategories.includes(newCategory)){
      newCategoryList = [...categories].filter(item=>item !== newCategory);
     }else{
       newCategoryList = [...categories, newCategory];
     }
     onSelectCategory(newCategoryList)
     return newCategoryList;

    })
  }

  const handelSearch = (e) => {
    const { value } = e.currentTarget.value;
    onSearch(value);
  }

  useEffect(() => {
    // categories should be requested from server
    setCategoryList((prev) => {
      return ["All categories", ...blogCategories]
    });
  }, [])

  return <aside className="blog_sidebar">
    <input className="search_bar" onChange={handelSearch} type="search" placeholder="Search..." />
    <div>
      <h4 className="blog_category_header">Categories</h4>
      <div className="blog_categories">
        {categoryList.map(category => {
          let activeClass = "blog_category_button";
          console.log("AAAAAAAAAAAAAA")
          if (selectedCategories.length === 0 && category === "All categories") {
            activeClass += " blog_category_button__active"
          } 
            if (selectedCategories.includes(category) && category !== "All categories") activeClass += " blog_category_button__active"
          return <button className={activeClass} key={category} onClick={hanselSelectCategory} name={category}>{category}</button>
        })}
      </div>
    </div>
  </aside>
}