
import './commentPage.css';
import InputComment from '../inputComment/InputComment';


function CommentPage() {
  return (
    <>
 
    
    

 <div className="div1-card1" id="card1">
      <div className="card-post">
        <h3>Control your home intelligently from anywhere in the world</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          aspernatur mollitia, earum ex perspiciatis sit dolorum. Commodi
          aperiam odio tenetur optio sapiente id rem voluptatem illum officiis
          aut?
        </p>
        {/* start button */}
        <div className="like-button">
          {/* <LikeButton></LikeButton> */}
        </div>



    </div>
    <div>

    <InputComment></InputComment>
    </div>
    
    
    
    </div>
    </>
  )
}

export default CommentPage