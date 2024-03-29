import React from 'react'
import { NavLink } from 'react-router-dom'
import Rgis from '../icons/Rgis'

function unloged() {
  return (
<>
<NavLink eventkey={2} to="/login" className="login">Login</NavLink>
              <NavLink eventkey={2} to="/register" className="Register">
                <Rgis /> <span className='ms-2'>Register</span>
                <div className="icon">
                  <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" /><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"/>
                  </svg>
                </div>
              </NavLink>
</>  )
}

export default unloged