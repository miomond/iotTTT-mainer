import React from "react";
import SHPost from "../user/blugin/SHPost";
import './postform.css'
import { useBlog } from "../../context/Blogser";

function TotalBlogs() {
  const blogsUser = useBlog()
const blogs = blogsUser.AllPosts


  return (
    <>
      <div className="contents">
        <div className="parent-second  d-flex justify-content-around w-100 flex-wrap " style={{ width: "fit-content", height: "fit-content" }}>
          {blogs.length > 0 && (blogs.map((item, i) => (<div key={i}> <SHPost item={item} i={i} /></div>)))}
        </div>
      </div>
    </>
  );
}

export default TotalBlogs;
