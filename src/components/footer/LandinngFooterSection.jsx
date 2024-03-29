import "./landinngFooterSection.css";
import addressSvg from "../../assets/addressSvg.svg";
import phoneSvg from "../../assets/phoneSvg.svg";
import emailSvg from "../../assets/emailSvg.svg";

import facebook from "../../assets/facebookSvg.svg";
import instagram from "../../assets/instagramSvg.svg";
import youtube from "../../assets/youtubeSvg.svg";
import linkedin from "../../assets/linkedinSvg.svg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function LandinngFooterSection() {
  const navigate = useNavigate()
  function go (){
    navigate('/contactUs')
  }
  return (
    <footer>
      <div className="first1 w-100">
        <div className="pra-first">
          <h2>our beloved client</h2>
          <p>
          Thank you for entrusting us with your innovative projects and for being the driving 
          force behind our continuous pursuit of excellence in the realm of IoT.
           Together, we're shaping a connected future where possibilities are limitless.
          </p>
        </div>
        <div className="divbtn">
          <button className="button-footer" onClick={go}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
            <div className="text" to="/contactUS">
              contact us
            </div>
          </button>
        </div>
      </div>
      <hr />
      <div className="info-footer">
        <div className="parent-footer">
          <div className="div1">
            <h3>brand</h3>
            <ul>
              <li>
                <a  className="remo"  href="">
                  <img src={addressSvg} alt="address" />
                  <span>Aswan </span>
                </a>
              </li>
              <li>
                <a  className="remo"  href="">
                  {" "}
                  <img src={phoneSvg} alt="phone" />
                  <span>1140014619</span>
                </a>
              </li>
              <li>
                <a  className="remo"  href="">
                  {" "}
                  <img src={emailSvg} alt="email" />
                  <span> shadyadel642@gmail.com </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="div2">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <img src={instagram} alt="instagram" /> <a  className="remo"  href="">instagram</a>
              </li>
              <li>
                <img src={youtube} alt="Youtube" /> <a  className="remo"  href="">Youtube</a>
              </li>
              <li>
                <img src={facebook} alt="facebook" /> <a  className="remo"  href="">facebook</a>
              </li>
              <li>
                <img src={linkedin} alt="linkedin" /> <a  className="remo"  href="">linkedin</a>
              </li>
            </ul>
          </div>
          <div className="div3">
            <h3>Pages</h3>
            <ul>
              <li>
                <NavLink  className='remo' to="/home">what we do</NavLink>
              </li>
              <li>
                <NavLink  className='remo' to="/about"> About</NavLink>
              </li>
              <li>
                <NavLink  className='remo' to="/blog">Blog </NavLink>
              </li>
              <li>
                <NavLink  className='remo' to="/contactUs">ContactUs</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default LandinngFooterSection;
