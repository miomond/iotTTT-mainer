import "./New folder/aboutUsGeneral.css";
import "./New folder/AboutAllSection.css";
import ourvision from "../../assets/Photo-concept-of-home-devices-on-multiple-houses-conected-networked.jpg"
import Voltage from "../../components/voltage/Voltage";
function OurVisionSection() {
  return (
    <section id="Our-vision">
  <div className="container">
    <div className="vision-flex">
      <div>
        <img src={ourvision} className="img1" alt="" />
      </div>
      <div className="content">
        <h2>Our vision</h2>
        <p>
          Like any good guest, ecobee sees a place in your home as a privilege.
          We want to be welcomed in by solving everyday problems with comfort,
          security, and conservation solutions that work so well together, you
          invite us back again, and again. And the more homes we are in, the
          more we can do to help build a sustainable world.
        </p>
        <Voltage/>

      </div>
    </div>
  </div>
</section>

  )
}

export default OurVisionSection