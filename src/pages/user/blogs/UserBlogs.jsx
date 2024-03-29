import React, { useState } from 'react'
import './userBlog.css'
import PostPage from '../../../components/PostsPage/PostPage';
import  secondImg1 from "../../../assets/inner1.jpeg";
import secondImg2 from "../../../assets/dash.png";
import secondImg3 from "../../../assets/tv.jpg";
import axios from 'axios';

function UserBlogs() {
  
  const user = JSON.parse(localStorage.getItem('user'));
  // const userName = user.fullName;
  console.log(user.data);
  const [post, setPost] = useState([]);
  const baseURL = "http://localhost:5000//allBlog/";
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {  setPost(response.data);
     
    });
  }, []);
  console.log(post);



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
      handleClose();
      setTitle("");
      setBody("");
      setImage(null);
      navigate("/users/allBlog");
    } catch (error) {
      console.error(error);
      // Handle errors (e.g., display error message to user)
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]); // Assuming single file selection
  };


  return (

    <>
    <div  style={{    width:'80%', height:'fit-content'}}    className='     posty' >
        
        {
            itemData.map((item,i)=>{
              return(
              <PostPage item={item}  i={i} />
            )
            })
          }


hi









    </div>


        </>

  )
}

export default UserBlogs