import React from "react";
import './landing.css';
import "./landingRES.css";

import img from "../../assets/illustration.png";
import img1 from "../../assets/BlogSvg.svg";
import img2 from "../../assets/BlogCardSvg.svg";
import img3 from "../../assets/BlogCard1Svg.svg";

import { useSpring, animated } from "@react-spring/web";
import LandinngFooterSection from "../../components/footer/LandinngFooterSection";
import Navpar from "../../components/NAv/Navpar";

import { useNavigate } from "react-router-dom";
function LandingPage() {
const navigate = useNavigate()
function go (){
  navigate('/about')
}
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <>
      <Navpar />

      {/* <div> */}
        {" "}
        
        <div className="">
          {/* hero */}
          <animated.div
            className="heroSection  d-flex  flex-column-reverse  flex-lg-row      justify-content-center   mt-5 pt-5  "
            style={props}
          >
            <div className="praHero   d-flex flex-column justify-content-center align-items-center  w-100 mb-3  mt-lg-5">
              <h1>
                Say goodbye to mundane tasks and welcome the convenience and
                intelligence of the future home!
              </h1>
              <p>
                Enjoy a smart home experience that meets all your needs and
                provides you with comfort, security, and intelligence. Imagine
                being able to turn on the air conditioner before you get home,
                turn off the lights when you leave the room, or monitor your
                home remotely using smart surveillance cameras.
              </p>
              <div className="voltage-button">
                <button onClick={go}>Read More</button>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 234.6 61.3"
                  preserveAspectRatio="none"
                  xmlSpace="preserve"
                >
                  <filter id="glow">
                    <feGaussianBlur
                      className="blur"
                      result="coloredBlur"
                      stdDeviation={2}
                    />
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.075"
                      numOctaves="0.3"
                      result="turbulence"
                    />
                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="turbulence"
                      scale={30}
                      xChannelSelector="R"
                      yChannelSelector="G"
                      result="displace"
                    />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="displace" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <path
                    className="voltage line-1"
                    d="m216.3 51.2c-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 6.8-7.3 6.8-3.7 0-3.7-4.6-7.3-4.6-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-0.9-7.3-0.9-3.7 0-3.7-2.7-7.3-2.7-3.7 0-3.7 7.8-7.3 7.8-3.7 0-3.7-4.9-7.3-4.9-3.7 0-3.7-7.8-7.3-7.8-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 3.1-7.3 3.1-3.7 0-3.7 10.9-7.3 10.9-3.7 0-3.7-12.5-7.3-12.5-3.7 0-3.7 4.6-7.3 4.6-3.7 0-3.7 4.5-7.3 4.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-10-7.3-10-3.7 0-3.7-0.4-7.3-0.4-3.7 0-3.7 2.3-7.3 2.3-3.7 0-3.7 7.1-7.3 7.1-3.7 0-3.7-11.2-7.3-11.2-3.7 0-3.7 3.5-7.3 3.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-2.9-7.3-2.9-3.7 0-3.7 8.4-7.3 8.4-3.7 0-3.7-14.6-7.3-14.6-3.7 0-3.7 5.8-7.3 5.8-2.2 0-3.8-0.4-5.5-1.5-1.8-1.1-1.8-2.9-2.9-4.8-1-1.8 1.9-2.7 1.9-4.8 0-3.4-2.1-3.4-2.1-6.8s-9.9-3.4-9.9-6.8 8-3.4 8-6.8c0-2.2 2.1-2.4 3.1-4.2 1.1-1.8 0.2-3.9 2-5 1.8-1 3.1-7.9 5.3-7.9 3.7 0 3.7 0.9 7.3 0.9 3.7 0 3.7 6.7 7.3 6.7 3.7 0 3.7-1.8 7.3-1.8 3.7 0 3.7-0.6 7.3-0.6 3.7 0 3.7-7.8 7.3-7.8h7.3c3.7 0 3.7 4.7 7.3 4.7 3.7 0 3.7-1.1 7.3-1.1 3.7 0 3.7 11.6 7.3 11.6 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-12.9 7.3-12.9 3.7 0 3.7 10.9 7.3 10.9 3.7 0 3.7 1.3 7.3 1.3 3.7 0 3.7-8.7 7.3-8.7 3.7 0 3.7 11.5 7.3 11.5 3.7 0 3.7-1.4 7.3-1.4 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-5.8 7.3-5.8 3.7 0 3.7-1.3 7.3-1.3 3.7 0 3.7 6.6 7.3 6.6s3.7-9.3 7.3-9.3c3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7 8.5 7.3 8.5 3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7-1.5 7.3-1.5 3.7 0 3.7 1.6 7.3 1.6s3.7-5.1 7.3-5.1c2.2 0 0.6 9.6 2.4 10.7s4.1-2 5.1-0.1c1 1.8 10.3 2.2 10.3 4.3 0 3.4-10.7 3.4-10.7 6.8s1.2 3.4 1.2 6.8 1.9 3.4 1.9 6.8c0 2.2 7.2 7.7 6.2 9.5-1.1 1.8-12.3-6.5-14.1-5.5-1.7 0.9-0.1 6.2-2.2 6.2z"
                    fill="transparent"
                    stroke="#fff"
                  />
                  <path
                    className="voltage line-2"
                    d="m216.3 52.1c-3 0-3-0.5-6-0.5s-3 3-6 3-3-2-6-2-3 1.6-6 1.6-3-0.4-6-0.4-3-1.2-6-1.2-3 3.4-6 3.4-3-2.2-6-2.2-3-3.4-6-3.4-3-0.5-6-0.5-3 1.4-6 1.4-3 4.8-6 4.8-3-5.5-6-5.5-3 2-6 2-3 2-6 2-3 1.6-6 1.6-3-4.4-6-4.4-3-0.2-6-0.2-3 1-6 1-3 3.1-6 3.1-3-4.9-6-4.9-3 1.5-6 1.5-3 1.6-6 1.6-3-1.3-6-1.3-3 3.7-6 3.7-3-6.4-6-6.4-3 2.5-6 2.5h-6c-3 0-3-0.6-6-0.6s-3-1.4-6-1.4-3 0.9-6 0.9-3 4.3-6 4.3-3-3.5-6-3.5c-2.2 0-3.4-1.3-5.2-2.3-1.8-1.1-3.6-1.5-4.6-3.3s-4.4-3.5-4.4-5.7c0-3.4 0.4-3.4 0.4-6.8s2.9-3.4 2.9-6.8-0.8-3.4-0.8-6.8c0-2.2 0.3-4.2 1.3-5.9 1.1-1.8 0.8-6.2 2.6-7.3 1.8-1 5.5-2 7.7-2 3 0 3 2 6 2s3-0.5 6-0.5 3 5.1 6 5.1 3-1.1 6-1.1 3-5.6 6-5.6 3 4.8 6 4.8 3 0.6 6 0.6 3-3.8 6-3.8 3 5.1 6 5.1 3-0.6 6-0.6 3-1.2 6-1.2 3-2.6 6-2.6 3-0.6 6-0.6 3 2.9 6 2.9 3-4.1 6-4.1 3 0.1 6 0.1 3 3.7 6 3.7 3 0.1 6 0.1 3-0.6 6-0.6 3 0.7 6 0.7 3-2.2 6-2.2 3 4.4 6 4.4 3-1.7 6-1.7 3-4 6-4 3 4.7 6 4.7 3-0.5 6-0.5 3-0.8 6-0.8 3-3.8 6-3.8 3 6.3 6 6.3 3-4.8 6-4.8 3 1.9 6 1.9 3-1.9 6-1.9 3 1.3 6 1.3c2.2 0 5-0.5 6.7 0.5 1.8 1.1 2.4 4 3.5 5.8 1 1.8 0.3 3.7 0.3 5.9 0 3.4 3.4 3.4 3.4 6.8s-3.3 3.4-3.3 6.8 4 3.4 4 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z"
                    fill="transparent"
                    stroke="#fff"
                  />
                </svg>
                <div className="dots">
                  <div className="dot dot-1" />
                  <div className="dot dot-2" />
                  <div className="dot dot-3" />
                  <div className="dot dot-4" />
                  <div className="dot dot-5" />
                </div>
              </div>
              <div className="tra"></div>
            </div>
            <div className="imgHero  mt-5">
              <img
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                src={img}
                alt=""
              />
            </div>
          </animated.div>
        </div>
      {/* </div> */}
      <div>
        {" "}
        <section className="banner    d-flex flex-column justify-content-center w-100">
          {/* heder */}
          <h2 >
            our job is to ensure you have the luxury of the new technology{" "}
          </h2>
          {/* line  */}
          <hr className="line-banner" />
          {/* start card */}
          <div className="parent-card d-flex flex-column flex-lg-row w-100   align-items-center justify-content-center ">
            {/* card1 */}
            <div className="card1">
              <img src={img1} alt="" />
            </div>
            <div className="card-content d-flex flex-column justify-content-center align-items-center">
              <h3>bring technology to your comfortable home</h3>
              <p>
                enjoy using your smart devices from one dashboard and be one
                step away for every smart thing in your home to control
              </p>
              <button className="learn-more" onClick={go}>
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow" />
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </div>
          </div>
          <div
            className="parent-card d-flex flex-column  flex-lg-row-reverse w-100   align-items-center justify-content-center  "
            id="card-reverse"
          >
            {/* img card */}
            <div className="card1">
              <img src={img2} alt="" />
            </div>
            {/* content card ,header, paragraph, button */}
            <div className="card-content d-flex flex-column justify-content-center align-items-center ">
              <h3>have the knowledge and the aware of what around you </h3>
              <p>
                with us you can enjoy reading all your house sensors from one
                place no need to check every device in its on
              </p>
              <button className="learn-more" onClick={go}>
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow" />
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </div>
          </div>

          <div className="parent-card d-flex flex-column flex-lg-row w-100   align-items-center justify-content-center ">
            {/* card1 */}
            <div className="card1">
              <img src={img3} alt="" />
            </div>
            {/* content card ,header, paragraph, button */}
            <div className="card-content d-flex flex-column justify-content-center align-items-center">
              <h3>bring the luxury technology to your home </h3>
              <p>
                with controlling smart devices you can make your smart device do
                what you wish before you wish it or what you need before you
                need it
              </p>
              <button className="learn-more" onClick={go}>
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow" />
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </div>
          </div>
        </section>{" "}
      </div>
      <div>
        {" "}
        <div className="about-intro w-100" data-aos="fade-down">
          <div className="pragraph d-flex   flex-column    flex-sm-column   flex-lg-row  align-items-center">
            <h1> Our Goals</h1>
            <p>
              is to make sure that every one will have an access to his smart
              devices with no limits and every where to so more people can have
              better quality of life with cost effective methods and no brand
              limitation so you can be able to use the smartest and best device
              in every field
            </p>
          </div>
          <div className="container-img ">
            <h2>
              A world of entertainment possibilities at your home with smart
              home technologies.
            </h2>
          </div>
        </div>
      </div>

      <LandinngFooterSection />
    </>
  );
}

export default LandingPage;
