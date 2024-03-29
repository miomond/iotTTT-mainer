import React from "react";
import "./profile.css";
import { useAuth } from "../../../context/auth";
function Profile() {
  const auth = useAuth();
  console.log(auth.user);

  const userData = auth.user;

  return (
    <>
      <section className="contents">
        <div className="profile ">
          <div className="row ps-5 ms-5">
            <div className="col-sm-4">
              <p className="mb-0">
                {" "}
                <i className="fa-solid fa-user me-3 " /> Full Name:
              </p>
            </div>
            <div className="col-sm-2">
              <p className=" mb-0 text-white">{userData.fullName}</p>
            </div>
          </div>
          <hr className="w-75 ms-5" />
          <div className="row ps-5 ms-5 ">
            <div className="col-sm-4">
              <p className="mb-0">
                {" "}
                <i className="fa-solid fa-envelope me-3" />
                Email:
              </p>
            </div>
            <div className="col-sm-2">
              <p className=" mb-0 text-white">{userData.email}</p>
            </div>
          </div>
          <hr className="w-75 ms-5" />
          <div className="row ps-5 ms-5">
            <div className="col-sm-4">
              <p className="mb-0">
                {" "}
                <i className="fa-solid fa-phone me-3" /> Phone:
              </p>
            </div>
            <div className="col-sm-2">
              <p className=" mb-0 text-white"> {userData.phoneNumber}</p>
            </div>
          </div>
          <hr className="w-75 ms-5" />
          <div className="row ps-5 ms-5">
            <div className="col-sm-4">
              <p className="mb-0">
                {" "}
                <i className="fa-solid fa-passport me-3" /> National Id:
              </p>
            </div>
            <div className="col-sm-2">
              <p className=" mb-0 text-white">{userData.nationalId}</p>
            </div>
          </div>
          <hr className="w-75 ms-5" />
          <div className="row ps-5 ms-5">
            <div className="col-sm-4">
              <p className="mb-0">
                {" "}
                <i className="fa-solid fa-location me-3" />
                Address:
              </p>
            </div>
            <div className="col-sm-2">
              <p className=" mb-0 text-white">{userData.address}</p>
            </div>
          </div>
        </div>
      </section>
    </>
   
  );
}

export default Profile;
