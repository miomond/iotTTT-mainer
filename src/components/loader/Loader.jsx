import React from 'react'
import './loader.css'

function Loader() {



  return (
    <>
    <div className='bodyloader'>loader
  <svg className="filter" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <filter id="blurFilter">
      <feGaussianBlur stdDeviation="4.5" />
      <feColorMatrix
        type="matrix"
        values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 19 -9"
      />
    </filter>
  </svg>
  <div className="demo">
    <div className="rings">
      <div className="rings">
        <div className="logo"></div>
      </div>
    </div>
  </div>
  </div>
</>

    
  )
}

export default Loader