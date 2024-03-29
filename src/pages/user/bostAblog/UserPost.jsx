import React from 'react'
import "../../../components/heroPost/heroPost.css";
import LikeButton from "../../../components/buttonLike/LikeButton";
import CommentButton from "../../../components/commentButton/CommentButton";


    function UserPost( {item , i} ) {
    const post =item;
    return (
        <div className="div1-card1" id="card1" key={i}>
          <img className="postImage" src={post.image} alt=" "  />
          <div className="card-post">
            <h3> {post.title}</h3>
            <p>
              {post.body}
            </p>
            <div className="like-button">
              <LikeButton></LikeButton>
              <CommentButton></CommentButton>
            </div>
          </div>
        
        </div>
      );
    
}

export default UserPost