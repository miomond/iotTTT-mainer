import React from 'react'
import { Outlet } from 'react-router-dom'
import Side from '../../components/side/Side'
import notification from  '../../assets/notification.svg'
import Dropdown from 'react-bootstrap/Dropdown';

function UserLayout() {
 const  itemData = ['first one ' , 'second ', 'third ' , 'fourth ' , 'fifth']


  return (
    <>
    <Side />
    <div className='userNav'>
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      <img  className='notify' src={notification} alt="" /> Notification
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {itemData.length > 0 && (
            itemData.map((item, i) => (
              <Dropdown.Item  key={i} >{item}</Dropdown.Item>  
            ))
          )}
       

      </Dropdown.Menu>
    </Dropdown>

    </div>
            <div className="bg">
            </div>
<Outlet/>



    </>
    )
}

export default UserLayout