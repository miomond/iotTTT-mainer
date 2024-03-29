import { useState  } from "react";
import "./likeButton.css";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LikeButton({data}) {

  const navigate = useNavigate()
  const auth = useAuth();
  const item = data;
  const token = localStorage.getItem("token");
  const [inWishlist, setInWishlist] = useState(false); // Track wishlist state
  const [likeCount, setLikeCount] = useState(data?.likedBy.length);
  const buttonClasses = `Btn ${inWishlist ? "like-active animation" : ""}`;
  
const toggleWishlist = async () => {
if(  auth.user  == null){
navigate("/login")
}else{
  try {const response = await axios.post("http://localhost:8000/users/wishlist/toggle", 
   { _id: item._id , userId: auth.user._id},
    {headers: {  Authorization: `Bearer ${token}`, },});
  setInWishlist(!inWishlist); // Update wishlist state based on response (optional)
} catch (error) {console.error(error);}
}
};





  return (
    <>
  <button className={buttonClasses} onClick={toggleWishlist}>
      <span className="leftContainer">
        <svg fill="white" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
        </svg> <span className="like">Like</span></span>
      <span className={`likeCount ${inWishlist ? "like-active" : ""}`}>{inWishlist? likeCount+1 : likeCount}</span>
  </button>
    </>
  );
}

export default LikeButton;
