import axios from 'axios';
import React, { createContext, useContext, useEffect } from 'react'
import { useState } from 'react'
import { useAuth } from './auth';

const BlogsContext = createContext(null);



export const BlogsProvider = ({children})  =>{
    const auth = useAuth();
    const [AllPosts, setAllPosts] = useState([]);
    const [MYPosts, setMYPosts] = useState([]);


 
  useEffect(() => {
    const fetchAllblog = async () => {
      try {
        const response = await axios.get("http://localhost:8000/blog/allblog");
        setAllPosts(response.data.data);
      } catch (error) {
        console.error("Error allposts data:", error); // Handle errors gracefully
      }
    };

    fetchAllblog();
  }, []); 

  // useEffect(() => {
  //   const fetchMyBlog = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8000/blog/:${auth.user._id}`);
  //       setMYPosts(response.data.data);
  //     } catch (error) {
  //       console.error("Error my posts data:", error); // Handle errors gracefully
  //     }
  //   };

  //   fetchMyBlog();
  // }, []); // Empty dependency array to fetch only once



  return (
<BlogsContext.Provider value={{AllPosts, MYPosts}} >{children}</BlogsContext.Provider>
    )
}



export const useBlog = () => {
  return useContext(BlogsContext);
};
