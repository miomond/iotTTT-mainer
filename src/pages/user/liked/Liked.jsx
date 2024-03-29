import React from "react";
import axios from "axios";
import UserP from "../../../components/userPost/UserP";
import { useState, useEffect } from "react";
import SHPost from "../blugin/SHPost";
import { useAuth } from "../../../context/auth";
function Liked() {
    const auth = useAuth()
    const userId = auth.user._id
    const [wishlist, setWishlist] = useState([]); // State to store retrieved wishlist items
    const localStorageToken = localStorage.getItem("token"); // Get token from local storage
  
    useEffect(() => {
      const fetchWishlist = async () => {
        try {
          const response = await axios.get(
            "http://localhost:8000/users/wishlist", // Replace with your actual backend route
            {
              headers: {
                Authorization: `Bearer ${localStorageToken}`, // Include token in headers
              },
            }
          );
          console.log(response);
  
          setWishlist(response.data.data); // Update wishlist state with retrieved data
        } catch (error) {
          console.error(error);
          // Handle potential errors (e.g., display error message to user)
        }
      };
  
      fetchWishlist(); // Fetch wishlist on component mount
    }, []); // Empty dependency array for initial fetch on mount
console.log(wishlist);






const wosh = [
  {
    "_id": {
      "$oid": "6603f150a2dd9bd31b2fd1bf"
    },
    "title": "would ",
    "body": "would you please work",
    "image": "http://localhost:8000/1711534416585-smart-home-with-internet-of-things (2).jpg",
    "likes": 0,
    "likedBy": [
      "660328b59a997ba31438660c",
      {
        "_id": "6603f150a2dd9bd31b2fd1bf"
      },
      {
        "_id": "6603f150a2dd9bd31b2fd1bf"
      },
      {
        "_id": "6603f150a2dd9bd31b2fd1bf"
      }
    ],
    "comments": [],
    "userId": {
      "$oid": "660328b59a997ba31438660c"
    },
    "__v": 3
  }

]


  return (
    <>
      <div className="contents">
        <div
          className="parent-second  d-flex justify-content-around w-100 flex-wrap "
          style={{ width: "fit-content", height: "fit-content" }}
        >
          {
            wosh.map((item, i) => (
              <div > 
                <SHPost item={item} i={i} />
              </div>
            ))
        }
        </div>
      </div>
    </>
  );
}

export default Liked;
