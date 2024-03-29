import React from "react";
import  './aboutUs.css'
import slider from '../../assets/slider-dec.png'
import aboutRight from '../../assets/about-right-dec.png'
import heading from '../../assets/heading-line-dec.png'
import Navpar from "../../components/NAv/Navpar";
import LandinngFooterSection from "../../components/footer/LandinngFooterSection";
import { NavLink } from "react-bootstrap";
function AboutUs() {
  return (
    <>
    <Navpar/>
    <div
        className="main-banner wow fadeIn  "
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content show-up header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="row mb-5 ">
                      <div className="col-lg-12">
                        <h2>Get Our Latest Best Services Now</h2>
                      </div>
                      <div className="col-lg-12">
                        <div className="white-button first-button scroll-to-section">
                          <a href="#contact">
                            Free Quote <i className="fab fa-apple" />
                          </a>
                        </div>
                        <div className="white-button scroll-to-section">
                          <a href="#contact">
                            Free Quote <i className="fab fa-google-play" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img src={slider} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>












<div id="services" className="services section">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div
          className="section-heading  wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <h4>
          Empowering Smarter Homes <em>Bringing the Power of IoT to</em>  you
          </h4>
          <img src="assets/images/heading-line-dec.png" alt="" />
          <p>
          Whether you want to control lights, fans, or any other appliance with a simple tap or voice command, 
          we have the expertise to make it happen. We go beyond basic on/off functionality,
           enabling you to connect with sensors and create intelligent automations that adapt to your needs.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="service-item first-service">
          <div className="icon" />
          <h4>App Maintenance</h4>
          <p>
           you get support for adding and maintaining your home when ever you need to add or to fix
           any of the added once
          </p>
       
        </div>
      </div>
      <div className="col-lg-3">
        <div className="service-item second-service">
          <div className="icon" />
          <h4>Rocket Speed of App</h4>
          <p>
            You get the fastest smoothest response abroad any device you connect to by our website 
            with the press of a button
          </p>
       
        </div>
      </div>
      <div className="col-lg-3">
        <div className="service-item third-service">
          <div className="icon" />
          <h4>Multiple use case  </h4>
          <p>
            we support sensors like tembruture ,humidity and planting motors for farms 
            and home gardening as well
            
          </p>
       
        </div>
      </div>
      <div className="col-lg-3">
        <div className="service-item fourth-service">
          <div className="icon" />
          <h4>in your hands 24/7</h4>
          <p>
         no more need to trying reaching the remote or looking for the individual feed
          now your need is available in one place 
          </p>
       
        </div>
      </div>
    </div>
  </div>
</div>










<div id="about" className="about-us section">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 align-self-center">
        <div className="section-heading">
          <h4>
            About <em>What We Do</em> &amp; Who We Are
          </h4>
          <img src={heading} alt="" />
          <p>
           we design embeded systems that control devices remotly from a dashboard 
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="box-item">
              <h4>
                <a href="#">Maintance Problems</a>
              </h4>
              
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box-item">
              <h4>
                <a href="#">24/7 Support &amp; Help</a>
              </h4>
              
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box-item">
              <h4>
                <a href="#">Fixing Issues About</a>
              </h4>
              
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box-item">
              <h4>
                <a href="#">Co. Development</a>
              </h4>
              
            </div>
          </div>
          <div className="col-lg-12">
            <p>
              you could always contribute to our project by funding or adding useful source our platform feel free to share it in our platform <NavLink className="blogshare" href="/Blog">here</NavLink> 
            </p>
            <div className="gradient-button">
              <a href="#">start NOW</a>
            </div>
            <span>*No Credit Card Required</span>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="right-image">
          <img src={aboutRight} alt="" />
        </div>
      </div>
    </div>
  </div>
</div>



<LandinngFooterSection/>














    </>
  );
}

export default AboutUs;