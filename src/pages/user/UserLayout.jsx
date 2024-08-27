import React from 'react'
import { Outlet } from 'react-router-dom'
import Side from '../../components/side/Side'
function UserLayout() {


  return (
    <>
    <Side />
    <div className='userNav'>

    </div>
            <div className="bg">
            </div>
<Outlet/>



    </>
    )
}

export default UserLayout