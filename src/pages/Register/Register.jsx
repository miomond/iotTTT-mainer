import { useForm } from "react-hook-form";
import { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FormControl } from "react-bootstrap";
import Navpar from "../../components/NAv/Navpar";

function Register() {
  const [mass, setMass] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  async function onSubmit(values) {
    try {   const response = await axios.post( "http://localhost:8000/users/register", values,
       { headers: { "Content-Type": "application/json" } }   );  
         console.log("Data sent to the API:", response.data); 
         navigate("/login");
    } catch (error) { setMass(response.data.message || "Registration failed") }
  }
  function remove() {setMass("")}
  function FullName() {setMass("please write your full name ")}
  function emailer() {setMass("please write your email ");}
  function password() {
    setMass("please write your password   which should contain alphabet (upper case letters and lower case letters  )   numbers  special character like $&   ");
  }
  function phone() {setMass("please write your phone number which should contain 11 digits");
  }

  function National() {
    setMass("please write your national id  it should contain 14 digits ");
  }

  function address() {
    setMass("please write your address ");
  }

  return (
    <>
      <Navpar />

      <div className="bod">
        <div className="massege">{mass}</div>
        <div className="conteiner">
          <div className="text">Register</div>

          {/* start form */}

          <form onSubmit={handleSubmit(onSubmit)} className="form-register">
            <div className="form-row">
              <div className="input-data">
                {/* enput User Name */}
                <label
                  className="label"
                  htmlFor="user name"
                  style={{ color: "white" }}
                >
                  {" "}
                  user name
                </label>

                <FormControl
                  className="input-con"
                  id="standard-user-input"
                  type="text"
                  size="large"
                  onFocus={FullName}
                  onBlur={remove}
                  // name='username'
                  autoComplete="current-password"
                  variant="standard"
                  styles={{
                    underline: {
                      borderColor: "#ccc", 
                    },
                    label: {
                      color: "#f60000", 
                    },
                  }}
                  {...register("fullName", {
                    required: {
                      value: true,
                    },
                    maxLength: {
                      value: 30,
                    },
                    minLength: 3,
                  })}
                />

                {errors.fullName && errors.fullName.type === "required" && (
                  <span style={{ color: "white" }}>This is required</span>
                )}
                {errors.fullName && errors.fullName.type === "maxLength" && (
                  <span style={{ color: "white" }}>Max length exceeded</span>
                )}
                {errors.fullName && errors.fullName.type === "minLength" && (
                  <span style={{ color: "white" }}>Min length 3 Character</span>
                )}
              </div>

              <div className="input-data">
                <label
                  className="label"
                  htmlFor="Email"
                  style={{ color: "white" }}
                >
                  Email
                </label>
                <FormControl
                  onFocus={emailer}
                  onBlur={remove}
                  id="standard-Email-input"
                  type="email"
                  helperText="This Input is Required"
                  autoComplete="current-password"
                  variant="standard"
                  {...register("email", {
                    required: {
                      value: true,
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Entered value does not match email format",
                    },
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <span style={{ color: "white" }}>This is required</span>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <span style={{ color: "white" }}>
                    Entered value does not match email format
                  </span>
                )}
              </div>
              <div className="input-data">
                <label
                  className="label"
                  htmlFor="password"
                  style={{ color: "white" }}
                >
                  Password
                </label>
                <FormControl
                  onFocus={password}
                  onBlur={remove}
                  id="standard-password-input"
                  type="password"
                  helperText="This Input is Required"
                  autoComplete="current-password"
                  variant="standard"
                  {...register("password", {
                    required: {
                      value: true,
                    },
                    minLength: {
                      value: 8,
                    },
                    maxLength: {
                      value: 30,
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: "Entered value does not match password format",
                    },
                  })}
                />
                {errors.password && errors.password.type === "required" && (
                  <span style={{ color: "white" }}>This is required</span>
                )}
                {errors.password && errors.password.type === "maxLength" && (
                  <span style={{ color: "white" }}>Max length exceeded</span>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <span style={{ color: "white" }}>Min length 8 Character</span>
                )}
                {errors.password && errors.password.type === "pattern" && (
                  <span style={{ color: "white" }}>
                    Entered value does not match password format
                  </span>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <label
                  className="label"
                  htmlFor="phoneN"
                  style={{ color: "white" }}
                >
                  Phone Number
                </label>

                <FormControl
                  onFocus={phone}
                  onBlur={remove}
                  id="standard-Number-input"
                  type="tel"
                  helperText="This Input is Required"
                  autoComplete="current-password"
                  variant="standard"
                  {...register("phoneNumber", {
                    required: {
                      value: true,
                    },
                    maxLength: {
                      value: 11,
                    },
                    pattern: {
                      value: /^[0-9]+$/,
                    },
                  })}
                />

                {errors.phoneNumber &&
                  errors.phoneNumber.type === "required" && (
                    <span style={{ color: "white" }}>This is required</span>
                  )}
                {errors.phoneNumber &&
                  errors.phoneNumber.type === "maxLength" && (
                    <span style={{ color: "white" }}>Max length exceeded</span>
                  )}
                {errors.phoneNumber &&
                  errors.phoneNumber.type === "pattern" && (
                    <span style={{ color: "white" }}>
                      Entered value does not match Phone Number format
                    </span>
                  )}
              </div>
              <div className="input-data">
                <label
                  className="label"
                  htmlFor="user name"
                  style={{ color: "white" }}
                >
                  National Id
                </label>

                <FormControl
                  onFocus={National}
                  onBlur={remove}
                  id="standard-NationalId-input"
                  type="tel"
                  helperText="This Input is Required"
                  autoComplete="current-password"
                  variant="standard"
                  {...register("nationalId", {
                    required: {
                      value: true,
                    },
                    maxLength: {
                      value: 14,
                    },
                    minLength: {
                      value: 14,
                    },
                  })}
                />

                {errors.nationalId && errors.nationalId.type === "required" && (
                  <span style={{ color: "white" }}>This is required</span>
                )}
                {errors.nationalId &&
                  errors.nationalId.type === "maxLength" && (
                    <span style={{ color: "white" }}>Max length exceeded</span>
                  )}
                {errors.nationalId &&
                  errors.nationalId.type === "minLength" && (
                    <span style={{ color: "white" }}>Min length 14 number</span>
                  )}
              </div>
              <div className="input-data">
                <label
                  className="label"
                  htmlFor="address"
                  style={{ color: "white" }}
                >
                  Address
                </label>

                <FormControl
                  onFocus={address}
                  onBlur={remove}
                  id="standard-Address-input"
                  type="text"
                  helperText="This Input is Required"
                  autoComplete="current-password"
                  variant="standard"
                  {...register("address", {
                    required: {
                      value: true,
                    },
                    maxLength: {
                      value: 30,
                    },
                    minLength: {
                      value: 4,
                    },
                  })}
                />

                {errors.address && errors.address.type === "required" && (
                  <span style={{ color: "white" }}> address is required</span>
                )}
                {errors.address && errors.address.type === "maxLength" && (
                  <span style={{ color: "white" }}>Max length exceeded</span>
                )}
                {errors.address && errors.address.type === "minLength" && (
                  <span style={{ color: "white" }}>Min length 4 Character</span>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="submit-btn">
                <div className="input-data">
                  <div className="inner" />
                  <button className="btn-register">
                    Register
                    <div className="arrow-wrapper">
                      <div className="arrow" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
