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
import Voltage from "../../components/voltage/Voltage";


function LandingPage() {
const navigate = useNavigate()
function go (){navigate('/about')}

  const props = useSpring({from: { opacity: 0 },to: { opacity: 1 },config: { duration: 1000 }});

  return (
    <>
      <Navpar />
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
           
              
              <Voltage/>
              <div className="tra"></div>
            </div>
            <div className="imgHero  mt-5">
              <img data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" src={img} alt=""/>
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
