import React from 'react'
import './contactInfo.css'

import contactUsImg from "../../../assets/contactUs.png";
import phoneSvg from "../../../assets/phoneSvg.svg";
import websiteSvg from "../../../assets/websiteSvg.svg";
import emailSvg from "../../../assets/emailSvg.svg";


function ContactInfo() {
  return (
    <>
     <div className="contact">
          <img src={contactUsImg} alt="" className="img-info" />
          <h3>Address</h3>
          <p>
            Information Technology Institute - Aswan, Aswan - Abu Simbel Road,
            High Dam Area, Aswan Section, Aswan
          </p>
          <h3>Phone</h3>
          <div className="info-contact">
            <div>
              <img src={phoneSvg} alt="" />
              <span>01140014619 </span>
            </div>
            <div>
              <img src={phoneSvg} alt="" />
              <span>01140014619 </span>
            </div>
          </div>
          <h3>Online Service</h3>
          <div className="info-contact">
            <div>
              <img src={websiteSvg} alt="" />
              <span>www.smartHome.com</span>
            </div>
            <div>
              <img src={emailSvg} alt="" />
              <span>shadyadel642@gmail.com</span>
            </div>
          </div>
        </div>
    
    
    </>
  )
}

export default ContactInfo