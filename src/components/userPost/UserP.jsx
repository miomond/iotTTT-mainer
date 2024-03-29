import "./postP.css";
import LikeButton from "../buttonLike/LikeButton"; // Assuming LikeButton handles likes

function UserP({ item, i }) {
  const post = item;
  console.log(post.likes);
  console.log(post._id);

  return (
    <>
      <section className="third-section d-flex justify-content-center align-items-center flex-column flex-wrap p-3">
        <div className=" postContainer third-card d-flex justify-content-center flex-column flex-lg-row align-items-center">
          <img className="userBlogPhoto" src={post.image} alt={post.title} /> {/* Set image source and alt text */}
          <div className="third-card-paragraph w-100">
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <div className="like-button">
              <LikeButton likes={post.likes} id={post._id} /> {/* Pass likes count to LikeButton */}

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserP;
