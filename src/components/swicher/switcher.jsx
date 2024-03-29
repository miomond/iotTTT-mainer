import React, { useState } from 'react'

function switcher({item , i}) {
    const [Loc, setLock] = useState(true);
    const handleLockChange = (loc) => {
      let lo = loc.target.checked;
      {lo ? lo = false : lo = true }
      console.log(lo + 'lock is ');
    };
  
  return (
    <>
 <div className="lights">
              <div className=" d-flex   align-content-center">
                <i className="fa-solid   close-light  fa-lightbulb  d-none" />
                <i className="fa-regular  lamp-light remove  fa-lightbulb  " />
                <h6 className="card1-h">Kitchen</h6>
              </div>
              <div className="">
                <label className="switch toggel-light">
                  <input type="checkbox" />
                  <span className="slider" />
                </label>
              </div>
            </div>
    </>
  )
}

export default switcher