import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import garage from "../../../assets/garage-svgrepo-com.svg";
import cardistace from "../../../assets/car.png";
import carparked from "../../../assets/cari.png";

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
import io from 'socket.io-client';
// const socket=io.connect('http://127.0.0.1:8001');

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const [Loc, setLock] = useState(false);
  // const handleLockChange = (locker) => {
  //   setLock(locker.target.checked);
  //   socket.emit('subscribe', { 'topic':"data"})
  //   socket.emit('subscribe', { 'topic':"ultra"})
  //   socket.emit('subscribe', { 'topic':"pir"})
  //   socket.emit('subscribe', { 'topic':"flame"})
  //   socket.emit('subscribe', { 'topic':"soilmois"})
  
  // };

  const [Ligh, setLight] = useState(false);
  const handleLightChange = (ligh) => { setLight(ligh.target.checked)
      // if(ligh.target.checked)
      //       socket.emit('publish', { 'topic': "LED1", 'payload': "LED1 ON" });
      //     else 
      //     socket.emit('publish', { 'topic': "LED1", 'payload': "LED1 OFF" });
      
          
        
  };
  const [Light2, setLight2] = useState(false);
  const handleLighteChange = (Light2) => {
    setLight2(Light2.target.checked);
  //   if(Light2.target.checked)
  //           socket.emit('publish', { 'topic': "LED2", 'payload': "LED2 ON" });
  //         else 
  //         socket.emit('publish', { 'topic': "LED2", 'payload': "LED2 OFF" });
};


  const [Fa, setFa] = useState(false);
  const handleFaChange = (fan) => {
    setFa(fan.target.checked);
  };
  const [Door, setDoor] = useState(false);
  const handleDoorChange = (Door) => {
    setDoor(Door.target.checked);
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

  const [planting , setPlanting]= useState(10);
  const handleplanting = (planting) => {
    setPlanting(!planting)
  };



  const [degree, Setdegree] = useState("15");




  const temp = {
    labels: ["Hot", "Cold"],
    datasets: [
      {
        label: "temperature",
        data: [degree, 35],
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
        data: [humi, 30], //// the variables of wet and dry
        backgroundColor: ["rgb(255, 14, 8)", "rgba(54, 162, 235, 1)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const [secure , setSecure]= useState(false);
  const [distance , setDistance] = useState(1000);
  const [smoke , setSmoke] = useState(0);
  

// useEffect(()=>
// {
//   socket.on('mqtt',function(data)
//   {
//     if(data.topic=="data"){
//       console.log(data)
//     Setdegree(data.payload.split(".")[0]);
//     SetHumi(data.payload.split(",")[1]);
//     }
//     if(data.topic=="soilmois"){
//       console.log(data)
//     setPlanting(data.payload.split(".")[0]);
//     }
//     if(data.topic=="ultra"){
//       console.log(data)
//     setDistance(data.payload.split(".")[0]);
//     }
//     if(data.topic=="pir"){
//       console.log(data)
//     setSecure(data.payload.split(".")[0]);
//     }
//     if(data.topic=="flame"){
//       console.log(data)
//     setSmoke(data.payload.split(".")[0]);
//     }
    
//   });
// },[socket])
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
                <input type="checkbox"  />
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
                  <input type="checkbox" onChange={handleLighteChange} checked={Light2}/>
                  <span className="slider" />
                </label>
              </div>
            </div>
            <div className="lights">
              <div className=" d-flex   align-content-center">
                {!Fa ? (<i className=" fa-solid      fa-fan" />) : (<img src={fanSvg} className="iconImg" alt="" />)}
                <h6 className="card1-h">fan</h6>
              </div>
              <div className="">
                <label className="switcher toggel-light">
                  <input type="checkbox" onChange={handleFaChange} checked={Fa}/>
                  <span className="slider" />
                </label>
              </div>
            </div>
            <div className="lights">
              <div className=" d-flex   align-content-center">
                { !Door ?(<i className="fa-solid   fa-door-open" />):(<i className="fa-solid   fa-door-closed" />)}
                <h6 className="card1-h">Door </h6>
              </div>
              <div className="">
                <label className="switcher toggel-light">
                  <input type="checkbox" onChange={handleDoorChange} checked={Door} />
                  <span className="slider" />
                </label>
              </div>
            </div>

            <hr className="hr" />
            <div className="two-buttons">
              {!m ? (<button className="All-ON control-btns" onClick={hanleAllONS}>All OFF</button>) : (<button className="control-btns " onClick={hanleAllOFFS}>All ON</button>)}
            </div>
          </div>
          <div>
            <div className="  chart p-4 mt-4 "> <Doughnut data={temp} /> <div className="degree">{degree}°C </div></div>
            <div className="  chart p-4 mt-4 "> <Doughnut data={humidity} /> <div className="degree">{humi}°C </div></div>
          </div>

          <div className="  partalarm ">
            <div  className=" alarmy  ">
              <div  className={secure==1 ?(" single  d-flex  danger "):(" single  d-flex   ")}>
                <button  onTouchStart={decorate} className="btn border-0 ">
                    <div>{secure==1 ? (  <img className="alarm" src={ninja} alt="" />):(<img className="alarm" src={Secure} alt="" />)}</div>
                </button>
                <h6 className="ms-2 ">{secure==1?( <p className="alarming">an intruder detected </p>):(<p className="alarming">your home is secure </p>)}</h6>
              </div>
              <div  className={!distance>=10 ? "single d-flex wid  danger" : "single d-flex " }>
                <button  onTouchStart={decorate} className="btn border-0 ">
                    <div>{!distance>=10 ? (<img className="alarm" src={carparked} alt="" />):(<img className="alarm" src={cardistace} alt="" />)}</div>
                </button>
                <h6 className=" ms-2  ">{distance}
                {!distance>=10?(<p className="alarming" > you almost parked still got space </p>):(<p className="alarming">stop you car is parked</p>)}
                </h6>
                </div>
            {/* ---------------repeate----------- */}
              <div  className={planting==1024?(" single  d-flex  danger "):(" single  d-flex   ")}>
                <button onTouchStart={()=> handleplanting(planting)} className=" btn border-0">
                    <div>{planting == 1024? (  <img className="alarm" src={dryplant} alt="" />):(<img className="alarm" src={plants} alt="" />)}</div>
                </button>
                <h6 className=" ms-2  ">  {planting} {planting>=1024? (<p className="alarming">your plant needs water </p>):(<p className="alarming"> your plant is hydrated efficiently </p>)} </h6>
                </div>
              <div  className={smoke?(" single  d-flex  danger "):(" single  d-flex   ")}>
                <button onTouchStart={decorate} className="btn  border-0">
                    <div>{smoke ?(<img className="alarm" src={nino} alt="" />):(<img className="alarm" src={secursuccesfully} alt="" />)}</div>
                </button>
                <h6 className=" ms-2 "><div>{smoke ?(<h6 className="alarming" >  danger danger fire detected </h6>):(<h6 className="alarming danger" > fire detection connected</h6>)}</div> </h6>
                </div></div><div  className=" d-flex  ">
              
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
