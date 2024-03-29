import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {  useForm } from "react-hook-form";

function Side() {
  function gone (){
    navigate('/users/profile')
  }
  const auth = useAuth();
  const navigate = useNavigate("");
  const user = auth.user._id;

  const handleLogout = () => {
    auth.logout();
    navigate("/login");
  };
  const handleHome = () => {
    navigate("/");
  };
  const edit = () => {
    navigate(`/users/userSettings`);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [show, setShow] = useState(false);
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
      <div className="contaminator">
        <div id="NAV">
          <NavLink to="dashboard" className=" ato">
            <i className="fa-solid    fa-dashboard" /> <span>Dashboard</span>
          </NavLink>
          <NavLink className="ato  " to="profile">
            <i className="fa-solid   fa-face-grin-stars" />{" "}
            <span> Profile</span>
          </NavLink>
         <NavLink className="ato" to="allBlog">
            <i className="fa-solid   fa-blog" /> <span>blogs</span>
          </NavLink>
         
          <Button className="ato " id="api" variant=" bg-transparent " onClick={handleShow}> <i className="fa-solid     fa-podcast" /> <span>post a blog</span></Button>

           {/* <button className="ato" onClick={gone}>
            <i className="fa-solid fa-heart"> </i> <span>Favorite</span>
          </button> */}
       
          <Button className="ato " id="api" variant=" bg-transparent " onClick={handleHome}> <i className="fa-solid     fa-home" /> <span>Home</span></Button>

          <div className="NAVspacer" />
          <Button className="ato" onClick={edit}   variant=" bg-transparent" >
            <IoIosSettings className="icon" /> <span>settings</span>
          </Button>
          <button className="ato" id="bu" onClick={handleLogout}> <i className="fa-solid   fa-sign-out" /> <span>log out</span></button>

        </div>
      </div>



      <Modal show={show} onHide={handleClose}   centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title" className="m-3">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="body" className="m-3">Body</label>
              <textarea
                className="form-control"
                id="body"
                rows="3"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="image" className="m-3">Image</label>
              <input
                type="file"
                className="form-control"
                id="image"
                onChange={handleImageChange}
              />
            </div>
            <Button variant="primary" className="m-3" type="submit">
              Create Blog
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Side;
