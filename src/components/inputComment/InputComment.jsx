import React, { useEffect, useState } from "react";
import "./inputComment.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import axios from "axios";

function InputComment({ data }) {
  const navigate = useNavigate();
  const auth = useAuth();
  const item = data;
  const token = localStorage.getItem("token");

  // perfect comment calling
  const [incomments, setincomments] = useState([]); // Track wishlist state

  const getcomments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/comment/comments/${item?._id}`
      );
      setincomments(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error); // Handle errors gracefully
    }
  };
  getcomments();
  //////////////////

  ///////////////perfected commenting ////////////////////
  const commenting = async () => {
    if (auth.user == null) {
      navigate("/login");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8000/comment/addComment",
          { blogId: item?._id, comment: input, userId: auth.user._id },
          { headers: { "Content-Type": "application/json" } }
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////
  function removeLi(index) {
    if (auth.user == null) {
      navigate("/login");}else{
    const fetchData = async () => {
      try {
        const response = await axios.delete(
          `http://localhost:8000/comment/comments/${index}`
        );
        setincomments(response.data.data);
        getcomments()
      } catch (error) {
        console.error("Error fetching data:", error); // Handle errors gracefully
      }
    };
    fetchData();
  }
    // const updatedArr = [...arr];
    // updatedArr.splice(index, 1);
    // setArr(updatedArr);
  }

  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);

  // function addInput() {
  //   setArr([...arr, { text: input, done: false }]);
  // }

  function changeInput(e) {
    setInput(e.target.value);
  }

  function beDone(index) {
    const updatedArr = [...arr];
    updatedArr[index].done = !updatedArr[index].done;
    setArr(updatedArr);
  }

  function clearTextarea() {
    setInput("");
  }

  return (
    <>
      <div className="con">
        <div id="myDIV" className="header">
          <input
            className="inputs"
            onChange={changeInput}
            type="text"
            id="myInput"
            placeholder="Title..."
          />
          <button className="bt" id="bt" onClick={commenting}>
            <span className="msg" id="msg"></span>
            Add
          </button>
        </div>
        <div id="myUL">
        {incomments?.length > 0 && (
            incomments.map((item, index) => {
            return (
              <div key={index} className="container-comment">
                <textarea
                  id="texter"
                  className={item.done ? "checked" : ""}
                  onClick={() => beDone(index)}
                  value={item?.comment}
                  readOnly
                  style={{width: "560px"}}
                />

                <button
                  class="button-del-comment"
                  onClick={() => removeLi(item?._id)}
                >
                  <span>Delete!</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-miterlimit="2"
                      stroke-linejoin="round"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        fill-rule="nonzero"
                        d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            );
          }))}
        </div>
      </div>
    </>
  );
}

export default InputComment;
