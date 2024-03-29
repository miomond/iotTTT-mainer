import React from "react";
import axios from "axios";
import UserP from "../../components/userPost/UserP";
import { useState, useEffect } from "react";
import SHPost from "../user/blugin/SHPost";
import './postform.css'

function TotalBlogs() {
  const [itemData, setItemData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/blog/allblog");
        setItemData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error); // Handle errors gracefully
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch only once





  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null); // Assume image is a file object



  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("image", image); // Assuming image is a file object
    formData.append("userId", user); // Replace with actual user ID

    try {
      const response = await axios.post("http://localhost:8000/blog/addBlog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data); // Handle successful response (e.g., close modal, show success message)
      setTitle("");
      setBody("");
      setImage(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]); // Assuming single file selection
  };


  return (
    <>


      <div className="contents">
        <div
          className="parent-second  d-flex justify-content-around w-100 flex-wrap "
          style={{ width: "fit-content", height: "fit-content" }}
        >
          {itemData.length > 0 && (
            itemData.map((item, i) => (
              <div key={i}> {/* Add a key for each item */}
                <SHPost item={item} i={i} />
              </div>
            ))
            
          )}
        </div>
      </div>
    </>
  );
}

export default TotalBlogs;
