import { useEffect } from "react";
import { useState } from "react";
import "./InpComment.css";
import { json, useLocation, useParams } from "react-router-dom";
import LikeButton from "../../../components/buttonLike/LikeButton";
import Comment from "./Comment";
import Comments from "./Comments";
import CommentButton from "../../../components/commentButton/CommentButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/auth";
import InputComment from "../../../components/inputComment/InputComment";
function FullBlog() {
  const auth = useAuth();
  const user = auth.user;
  const { register, handleSubmit, getValues, formState: { errors }, setError,} = useForm();
  const token = localStorage.getItem("token");
  const loc = useLocation();
  const post = loc.state;
  const [itemComment, setItemComment] = useState([]);
  const navigate = useNavigate();
  const [comment, setcomment] = useState("");

const [ Commands ,setCommands] = useState([]);




///////////////////////////comment ///////////////////////////////////
  useEffect(() => {
    const fetchData = async () => {try {const response = await axios.get(`http://localhost:8000/comment/comments/${post._id}`);
         setCommands(response.data.data);} catch (error) {console.error("Error fetching data:", error);}};
    fetchData(); }, []); 

  const onComment = async (event) => {
    event.preventDefault();
    const formData = new FormData(); 
    formData.append("comment", comment);
    formData.append("userId", user._id);
    formData.append("blogId", post._id); 
    try {
const response = await axios.post("http://localhost:8000/comment/addComment", formData, {
         headers: {"Content-Type": "application/json"},
      });
      console.log(response);
      setcomment("");
    } catch (error) {console.error(error);}};

    const [input, setInput] = useState("");
    const [arr, setArr] = useState([]);
    function addInput() {
      setArr([...arr, { text: input, done: false }]);
    }
/////////////////////////////////////////end comment ///////////////////////////////////

















  return (
    <>
      <div className=" blogPart   ">
        <div className=" d-flex  justify-content-center  w-100 ">
          <img src={post.image} alt="" className="fullpostImage m-5" />
        </div>
        <div className=" d-flex  justify-content-center  flex-column  align-content-center  w-100 ">
          <h1 className=" text-center ">{post.title}</h1>
          <p>{post.body}</p>
        </div>
        <div className="postedBy">
          <LikeButton data={post} />{" "}
        

<InputComment  data={post}/>
        </div>
      
      </div>
    </>
  );
}

export default FullBlog;

