import React, { useState } from "react";
import "./Dashboard.css";
import garage from "../../../assets/garage-svgrepo-com.svg";
import lock from "../../../assets/lock-slash-svgrepo-com.svg";
import lock1 from "../../../assets/lock-svgrepo-com.svg";
import dryplant from '../../../assets/dryplant.svg'
import nino from '../../../assets/alert.png'
import secursuccesfully from '../../../assets/securedSuccesfullyi.png'
import ninja from "../../../assets/ninja.svg";
import Secure from "../../../assets/secure.svg";
import plants from "../../../assets/plant.svg"
import { useSprings } from "@react-spring/web";
import { set, useForm } from "react-hook-form";
import fanSvg from "../../../assets/fan-svgrepo-com.svg";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const [Loc, setLock] = useState(false);
  const handleLockChange = (locker) => {
    setLock(locker.target.checked);
  };

  const [Ligh, setLight] = useState(false);
  const handleLightChange = (ligh) => {
    setLight(ligh.target.checked);
  };

  const [Light2, setLight2] = useState(false);
  const handleLighteChange = (ligh) => {
    setLight2(ligh.target.checked);
  };
  const [Fa, setFa] = useState(false);
  const handleFaChange = (fan) => {
    setFa(fan.target.checked);
  };
  const [m, setM] = useState(false);

  const hanleAllONS = () => {
    setM(true);
    setFa(m);
    setLight2(m);
    setLight(m);
  };
  const hanleAllOFFS = () => {
    setM(false);
    setFa(m);
    setLight2(m);
    setLight(m);
  };
  const [degree, Setdegree] = useState("15");

  const temp = {
    labels: ["Hot", "Cold"],
    datasets: [
      {
        label: "temperature",
        data: [degree, 15],
        backgroundColor: ["rgb(255, 14, 8)", "rgba(54, 162, 235, 1)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  function decorate() {
    let h = document.getElementById("identefier");
    h.style.display = "block";
  }

  const [humi, SetHumi] = useState("25");

  const humidity = {
    labels: ["dry", "wet"],
    datasets: [
      {
        label: "humidity",
        data: [humi, 15], //// the variables of wet and dry
        backgroundColor: ["rgb(255, 14, 8)", "rgba(54, 162, 235, 1)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="contents">
        <div className="partion ">
          <div className="part1 mt-4 d-flex   align-content-center  justify-content-between  flex-nowrap align-content-center">
            <div className="d-flex  align-content-center justify-content-center p-4">
              {!Loc ? (
                <img src={lock} alt="" className="garage-svg" />
              ) : (
                <img src={lock1} alt="" className="garage-svg" />
              )}
              <h6 className="card1-h">Security system</h6>
            </div>
            <div className="d-flex  align-content-center justify-content-center p-4">
              <label className="switcher">
                <input type="checkbox" onChange={handleLockChange} />
                <span className="slider" />
              </label>
            </div>
          </div>
          <div className="part1 mt-4 d-flex  justify-content-between  flex-nowrap align-content-center">
            <div className="d-flex  align-content-center justify-content-center p-4">
              <img src={garage} alt="" className="garage-svg" />
              <h6 className="card1-h">Garage</h6>
            </div>
            <div className="d-flex  align-content-center justify-content-center p-4">
              <label className="switcher">
                <input type="checkbox" />
                <span className="slider" />
              </label>
            </div>
          </div>
        </div>

        <div className="maintools">
          <div className="part2 p-4 mt-4">
            <h5 className="card1-h">Lights - interior</h5>
            <div className="lights">
              <div className=" d-flex   align-content-center">
                {!Ligh ? (
                  <i className="close-light fa-solid fa-lightbulb " />
                ) : (
                  <i className="lamp-light  fa-regular fa-lightbulb" />
                )}
                <h6 className="card1-h">out side Lights </h6>
              </div>
              <div className="">
                <label className="switcher toggel-light">
                  <input
                    type="checkbox"
                    onChange={handleLightChange}
                    checked={Ligh}
                  />
                  <span className="slider" />
                </label>
              </div>
            </div>
            <div className="lights">
              <div className=" d-flex   align-content-center">
                {!Light2 ? (
                  <i className="close-light fa-solid fa-lightbulb " />
                ) : (
                  <i className="lamp-light  fa-regular fa-lightbulb" />
                )}

                <h6 className="card1-h">inside lights </h6>
              </div>
              <div className="">
                <label className="switcher toggel-light">
                  <input
                    type="checkbox"
                    onChange={handleLighteChange}
                    checked={Light2}
                  />
                  <span className="slider" />
                </label>
              </div>
            </div>
            <div className="lights">
              <div className=" d-flex   align-content-center">
                {!Fa ? (
                  <i className=" fa-solid      fa-fan" />
                ) : (
                  <img src={fanSvg} className="iconImg" alt="" />
                )}
                <h6 className="card1-h">fan</h6>
              </div>
              <div className="">
                <label className="switcher toggel-light">
                  <input
                    type="checkbox"
                    onChange={handleFaChange}
                    checked={Fa}
                  />
                  <span className="slider" />
                </label>
              </div>
            </div>
            <div className="lights">
              <div className=" d-flex   align-content-center">
                <i className="close-light fa-solid fa-lightbulb " />
                <h6 className="card1-h">out side Lights </h6>
              </div>
              <div className="">
                <label className="switcher toggel-light">
                  <input type="checkbox" disabled={true} />
                  <span className="slider" />
                </label>
              </div>
            </div>

            <hr className="hr" />
            <div className="two-buttons">
              {!m ? (
                <button className="All-ON control-btns" onClick={hanleAllONS}>
                  All OFF
                </button>
              ) : (
                <button className="control-btns " onClick={hanleAllOFFS}>
                  All ON
                </button>
              )}
            </div>
          </div>
          <div>
            <div className="  chart p-4 mt-4 ">
              <Doughnut data={temp} />
              <div className="degree">{degree}°C </div>
            </div>
            <div className="  chart p-4 mt-4 ">
              <Doughnut data={humidity} />
              <div className="degree">{humi}°C </div>
            </div>
          </div>

          <div className="  partalarm ">
            <div  className=" d-flex  ">
              <div  className=" d-flex   ">
                <button  onTouchStart={decorate} className="btn border-0 ">
                    <div>{!m ? (  <img className="alarm" src={ninja} alt="" />) : (  <img className="alarm" src={Secure} alt="" />)}</div>
                </button>
                <h2 className=" ms-2 mt-4 ">security</h2>
              </div>
            {/* ---------------repeate----------- */}
            <div  className=" d-flex   ">
                <button onTouchStart={decorate} className=" btn border-0">
                    <div>{!m ? (  <img className="alarm" src={plants} alt="" />) : (  <img className="alarm" src={dryplant} alt="" />)}</div>
                </button>
                <h2 className=" ms-2  mt-4">farming </h2>
              </div>
               <div  className=" d-flex   ">
                <button onTouchStart={decorate} className="btn  border-0">
                    <div>{!m ? (  <img className="alarm" src={nino} alt="" />) : (  <img className="alarm" src={secursuccesfully} alt="" />)}</div>
                </button>
                <h2 className=" ms-2 mt-4">secure</h2>
              </div>
              
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
