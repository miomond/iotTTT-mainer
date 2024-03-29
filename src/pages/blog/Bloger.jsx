import React from "react";

import "./styleBlog.css";
import secondImg1 from "../../assets/inner1.jpeg";
import secondImg2 from "../../assets/dash.png";
import secondImg3 from "../../assets/tv.jpg";
import heroBlog from "../../assets/generative-ai-smart-home-interface-with-controlling-dwevice.jpg";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import PostPage from "../../components/PostsPage/PostPage";
import HeroPost from "../../components/heroPost/HeroPost";
import SearchInput from "../../components/searchInput/SearchInput";

import { useSpring, animated } from "@react-spring/web";
import LandinngFooterSection from "../../components/footer/LandinngFooterSection";
import Navpar from "../../components/NAv/Navpar";

// const itemData = [
//   {
//     img: `${secondImg1}`,
//     title: "Control your living room ",
//     paragraph:
//       "Imagine your all device controller become on your smart phone with one click away its time to say goodbye for tv remote controller who keep hiding from you every single time you need it ",
//   },
//   {
//     img: `${secondImg2}`,
//     title: "Control your office ",
//     paragraph:
//       "with our automated temperature sensors controlling the Air conditioner its time to say its never too cold nor too hot  to be able to focus more on your job avoiding any boring useless waste of time movement  ",
//   },
//   {
//     img: `${secondImg3}`,
//     title: "Control Your Kitchen",
//     paragraph:
//       "with us your kitchen can be more enjoyable because finally you can make sure that nothing will be burnt or got out the oven early because you always can know when its done and can stop the heat once its done even if you were outside the kitchen",
//   },
// ];








function Bloger() {
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {const response = await axios.get("http://localhost:8000/blog/allblog");
        setItemData(response.data.data);
      } catch (error) {console.error("Error fetching data:", error); // Handle errors gracefully
      }};
      fetchData();
    }, []); // Empty dependency array to fetch only once
  
  
  const props = useSpring({
    from: { size: "20%" },
    to: { size: "100%" },
    config: { duration: 3000 },
  });
  return (
    <>
      <Navpar />
      <section className="master" style={props}>
        {" "}
        <h1>Blog Smart Home</h1>{" "}
        <p>
          {" "}
          our creative solution is always there for people to to higher their
          quality of life so we always hope to be able to support more devices &
          categories here you can find our latest and greatest achievement in
          the IOT felid{" "}
        </p>{" "}
      </section>{" "}
      <SearchInput />{" "}
      <div className=" parent-post d-flex flex-lg-row-reverse flex-wrap   h-auto justify-content-around     ">
        <div className="post w-50 ">
          {" "}
          <img  className="w-100"  src={heroBlog} alt="" />
        </div>
        <div className="content-post" style={{ width: "600px" }}>
          {" "}
          <h1>
            Invest in the intelligence of your home, and enjoy an
            unparalleledlife experience.{" "}
          </h1>{" "}
          <p>
            {" "}
            Elevate your living space with cutting-edge IoT technology,
            transforming your home into a smart sanctuary tailored to your
            lifestyle. Unlock a new realm of possibilities, where innovation
            meets tranquility, enriching your everyday experiences like never
            before{" "}
          </p>
        </div>
      </div>
      <h1 className="bestBlog">Our Recent Blogs</h1>
      <hr className="lineBestblog" />
      <div
        className="parent-second  d-flex justify-content-around w-100 flex-wrap "
        style={{ width: "fit-content", height: "fit-content" }}
      >
        {itemData.map((item, i) => {
          return (
            <div>
              {" "}
              <HeroPost item={item} i={i} />{" "}
            </div>
          );
        })}
      </div>
            {itemData.map((item, i) => {
        return( <PostPage item={item} i={i} />)
      })}
      <LandinngFooterSection />
    </>
  );
}

export default Bloger;
