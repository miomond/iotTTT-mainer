import React, { useState } from 'react'
import './formEdit.css'
import imgEdit from '../../../assets/EditFormSvg.svg'
import { useAuth } from '../../../context/auth'
import axios from 'axios';
import { useForm } from 'react-hook-form';




function FormEdit() {
  const auth = useAuth();
const user = auth.user;
console.log(user._id);

const {
  formState:{errors,isSubmitting} ,
   register , 
   setError ,
    handleSubmit}= useForm({
  defaultValues:{
    fullName:user.fullName,
    email:user.email,
    phoneNumber:user.phoneNumber,
    nationalId:user.nationalId,
    address:user.address,
  }
})








 const localStorageToken = localStorage.getItem("token"); 

//  const handleSubmit = async (event) => {
//    event.preventDefault(); 
//    try {
//     const response = await axios.put(`http://localhost:8000/users/update/${user._id}`, 
//       user, {headers: {Authorization:`Bearer ${localStorageToken}`}});

//     if (response.data.success) {console.log("success");}
//     else {  console.log("failed");}
//   } catch (error) {console.error(error);
//   }
// };


const onSubmit = async(data)=>{
   try {
    const response = await axios.put(`http://localhost:8000/users/update/${user._id}`, 
      data, {headers: {Authorization:`Bearer ${localStorageToken}`}});

    if (response.data.success) {
      auth.login(data);
      
    }
    else {  console.log("failed");}
  } catch (error) {console.error(error);
  }
}

  return (
<>
  <section className='section-edit-form'>
    <div>
      <img className="img" src={imgEdit} alt="" />
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="edit-info-user">
      <h1>Edit Your Information</h1>
      <div className="form-info"><label htmlFor="fullName">Full Name</label>
        <input className="input-data" type="text" name="fullName" id=""  {...register("fullName",{value:user.fullName})} placeholder="Enter Your Full Name" autoComplete="off"/>
      </div>
      <div className="form-info"><label htmlFor="Email">Email</label>
        <input className="input-data" type="email" name="Email" id="" {...register("email",{value:user.email})} placeholder="Enter Your Email" autoComplete="off"/>
      </div>
      <div className="form-info"><label htmlFor="Phone Number">Phone Number</label>
        <input className="input-data" type="tel" name="phone Number" id="" {...register("phoneNumber",{value:user.phoneNumber})} placeholder="Enter Your phone Number" autoComplete="off"/>
      </div>
      <div className="form-info"><label htmlFor="National Id">National Id</label>
        <input className="input-data" type="tel" name="National Id" id="" {...register("nationalId",{value:user.nationalId})} placeholder="Enter Your National Id" autoComplete="off"/>
      </div>
      <div className="form-info"><label htmlFor="Address">Address</label>
        <input className="input-data" type="text" name="Address" id="" {...register("address",{value:user.address})} placeholder="Enter Your Address" autoComplete="off"/>
      </div>
      <button className="button-setting"  type='submit'>Update Data</button>
    </form>
  </section>





</>
  )
}

export default FormEdit