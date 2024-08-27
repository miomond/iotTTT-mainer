import React from "react";

import { useLocation } from "react-router-dom";
import LikeButton from "../../components/buttonLike/LikeButton";
import "./gum.css";
import InputComment from "../../components/inputComment/InputComment";
import Navpar from "../../components/NAv/Navpar";
import LandinngFooterSection from "../../components/footer/LandinngFooterSection";

function GumBloger() {
  const loc = useLocation();
  const post = loc.state;
  return (
    <>
      <Navpar />
      <div className="div1-card-head" id="card1">
        <img className="head-img" src={post?.image} alt="" />
        <div className="card-post-max ">
          <h3>{post?.title}</h3>
          <p>{post?.body}</p>
        </div>
        <div className="enteract">
          <LikeButton data={post} /> <InputComment data={post} />
        </div>
      </div>
      <LandinngFooterSection />
    </>
  );
}

export default GumBloger;
