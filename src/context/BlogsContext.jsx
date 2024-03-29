import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useAuth } from './auth';

function BlogsContext() {
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
  }, []); // Empty dependency array to fetch only once

  useEffect(() => {
    const fetchMyBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/blog/:${auth.user._id}`);
        setMYPosts(response.data.data);
      } catch (error) {
        console.error("Error my posts data:", error); // Handle errors gracefully
      }
    };

    fetchMyBlog();
  }, []); // Empty dependency array to fetch only once



  return (
<BlogsContext.Provider values={{AllPosts, MYPosts}} ></BlogsContext.Provider>
    )
}

export default BlogsContext