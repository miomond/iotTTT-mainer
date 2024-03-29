import "./postPage.css";
import LikeButton from "../buttonLike/LikeButton";
import CommentButton from "../commentButton/CommentButton";
import { useNavigate } from "react-router-dom";
function PostPage({item , i}) {


  const posted = item._id;
  const navigate = useNavigate();
  const post =item;
function go(){
navigate(`/Blog/${posted}`, { state: post })
}




  return (
    <>
      <section className="third-section   d-flex justify-content-center  align-items-center  flex-column flex-wrap p-3">
        <div className=" third-card   d-flex justify-content-center flex-column   flex-lg-row   align-items-center ">
        <div className="postimages">

          <img className="imak" src={post.image}   alt={post.title} />
        </div>
          <div className="third-card-paragraph w-100">
            <h2>{post.title} </h2>
            <p>
            description:{post.body}
            </p>

            <div className="like-button">
            <LikeButton data={item} />
            <button className="readMore" onClick={go}>Read More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PostPage;
