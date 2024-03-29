import React from 'react'
import Home from "../icons/Home.jsx";
import BlgIcon from "../icons/BlgIcon.jsx";
import ContactIcon from "../icons/ContactIcon.jsx";
import { useState } from "react";
import OGO from "../../assets/internet-of-things-icon-vector.png";
import About from "../../assets/SVG.png";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navpar.css";
import "./responsive.css"
import Unloged from './Unloged.jsx';
import Loged from './Loged.jsx';
import { useNavigate } from 'react-router-dom';

import semiLogo from "../../assets/navStarter.png";
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/auth.jsx';


function Navpar() {
  const  auth = useAuth();
  const [isSigned , setisSigned] = useState(auth.user);
  console.log(auth.user);




  const [rotateValue, setRotateValue] = useState(0);

  return (
    <Navbar collapseOnSelect expand="lg" id="navo"  style={{height:'fit-content' , padding:'0px 10px'}}>
    <img className="semiLogo"  src={semiLogo} alt="semi logo" />
      <Navbar.Brand href="/">
      <img  className="ogo "  style={{ transform: `rotate(${rotateValue}deg)`, width: "50px" }}  src={OGO}  alt="LOGO"  />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className=" me-auto Navy   ">
          <NavLink to="/" className='ah '>
            <Home/> <span className='ms-2'>Home</span>
          </NavLink>
          <NavLink className='ah' to="/Blog">
            <BlgIcon /> <span className='ms-2'>our blogs</span> {" "}
          </NavLink>
          <NavLink className='ah' to="/about">
            {" "}
            <img  style={{width:30}} src={About} alt="about logo"></img><span className='ms-3'>About us</span> 
          </NavLink>
          <NavLink className='ah' to="/contactUs">
            <ContactIcon /> <span className='ms-3'>Contact us</span> {" "}
          </NavLink>
        </Nav>
        <Nav>
          {isSigned ==  null? <Unloged/> : <Loged/>  }
             
        </Nav>
      </Navbar.Collapse>
  </Navbar>  )
}

export default Navpar;
