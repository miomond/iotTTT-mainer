import "./heroPost.css";
import LikeButton from "../buttonLike/LikeButton";
import CommentButton from "../commentButton/CommentButton";
import { useNavigate } from "react-router-dom";





function HeroPost( {item , i} ) {


  const posted = item._id;
  const navigate = useNavigate();
  const post =item;
function go(){
navigate(`/Blog/${posted}`, { state: post })
}



  return (
    <>
  
    <div className="div1-card1" id="card1" key={i}>
      <div className="posters">
      <img className="postImage" src={post.image}   alt={post.title}  />
      </div>
      <div className="card-post">
        <h3> {post.title}</h3>
        <p>
        description:{post.body}
        </p>
        <div className="like-button">
        <LikeButton data={item} />
        <button className="readMore" onClick={go}>Read More</button>

        </div>
      </div>
    
    </div>
    </>
  );
}

export default HeroPost;
