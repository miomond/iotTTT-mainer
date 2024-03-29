
import "./New folder/aboutUsGeneral.css";
import "./New folder/AboutAllSection.css";
import BetterTomorrow from "../../assets/better-tomorrow_2x.webp"
import Voltage from "../../components/voltage/Voltage";
function BetterTomorrowSection() {
  return (
    <section id="better-tomorrow">
  <div className="container">
    <div className="vision-flex">
      <div>
        <img src= {BetterTomorrow} className="img1" alt="" />
      </div>
      <div className="content">
        <h2>Better together for a better tomorrow.</h2>
        <p className="p-better-tomorrow">
          ecobee believes our technology should be accessible to everyone.
          That’s why we partner with local housing organizations, cities, and
          NGOs to find effective ways to put our technology to work in the
          communities in need. A smart thermostat can mean saving on energy
          bills to those who need it most, without sacrificing the comfort of
          home. Since 2018, our Income Qualified (IQ) program has distributed
          over 20,000 smart thermostats to improve comfort at home.
        </p>
        <hr />
        <p className="p-better-tomorrow">
          Let’s do some good. If you know of an organization or initiative in
          your community that we can help with our products, data, time or
          talent, let us know.
        </p>
        <Voltage/>
      </div>
    </div>
  </div>
</section>

  )
}

export default BetterTomorrowSection