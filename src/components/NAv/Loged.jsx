import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import './loged.css'
function loged() {
    const navigate = useNavigate();
const auth = useAuth();
    const handleLogout = () => {
        auth.logout();
        navigate("/login");
      };

  return (

<>
<button eventkey={2} onClick={handleLogout} className="logout">logout</button>
<NavLink eventkey={2} to="/users/dashboard" className="login">dashboard</NavLink>


</>
    )
}

export default loged