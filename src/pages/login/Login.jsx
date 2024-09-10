import "./styleLogin.css";
import { FormControl } from "react-bootstrap";
import {  useForm } from "react-hook-form";
import {  useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import Navpar from "../../components/NAv/Navpar";

function Login() {
 const [masssa , setmasssa] = useState();
  const { register, handleSubmit, getValues, formState: { errors }, setError } = useForm();
  const auth = useAuth()
  const navigate = useNavigate('')
  
  
  async function onSubmit(values) {

    // try {const response = await axios.post("http://localhost:8000/users/login", values, {headers: { "Content-Type": "application/json" },});
    //   localStorage.setItem("token", response.data.data.token);
    //   auth.login(response.data.data.user);
    //   navigate('/users/dashboard');
    // } catch (error) {setmasssa(error +  "Login failed");}


    let fake = {  username: 'emilys',password: 'emilyspass',token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJtaWNoYWVsdyIsImVtYWlsIjoibWljaGFlbC53aWxsaWFtc0B4LmR1bW15anNvbi5jb20iLCJmaXJzdE5hbWUiOiJNaWNoYWVsIiwibGFzdE5hbWUiOiJXaWxsaWFtcyIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL21pY2hhZWx3LzEyOCIsImlhdCI6MTcxNzYxMTc0MCwiZXhwIjoxNzE3NjE1MzQwfQ.eQnhQSnS4o0sXZWARh2HsWrEr6XfDT4ngh0ejiykfH8",}

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: 'emilys',
        password: 'emilyspass',
      })
    })
    .then(res => res.json())
    .then(console.log).finally(()=>{
      localStorage.setItem("token", fake.token);
        auth.login(fake);
      
      navigate('/users/dashboard')});
    
  }
  return (
    <>
            <Navpar />
    <div className="contener">
      <div className="left-side">
        <form onSubmit={handleSubmit(onSubmit)} ><h1>LogIn</h1>{/* input email */}
          <div className="form-control" style={{backgroundColor:'transparent', border :'none' ,padding:'0'} }><label htmlFor="Email"> Email</label>
            <FormControl aria-describedby="passwordHelpBlock" id="standard-Email-input" type="email" autoComplete="current-password" variant="standard"
            {...register("email", {  required: {value: true,  },  pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,  },})}/>
            {errors.email && errors.email.type === "required" && (  <span style={{ color: "red" ,marginTop:"10px"}}>This is required</span>)}
            {errors.email && errors.email.type === "pattern" && (  <span style={{ color: "red" }}>    Entered value does not match email  </span>)}
            <span style={{ color: "red" }}>    {masssa}  </span>
          </div>

          {/* input password */}
          <div className="form-control " style={{backgroundColor:'transparent', border :'none'  ,padding:'0'}}><label htmlFor="Password"> Password</label>
          <FormControl aria-describedby="passwordHelpBlock" id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard" color="warning"
          {...register("password", { required: {  value: true,},minLength: {  value: 8},  maxLength:{  value: 30},pattern: { value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, },})}/>
            {errors.password && errors.password.type === "required" && (<span style={{ color: "red" , marginTop:"10px" }}>This is required</span> )}
           {errors.password && errors.password.type === "maxLength" && (   <span style={{ color: "red" , marginTop:"10px" }}>Max length exceeded</span> )}
            {errors.password && errors.password.type === "minLength" && (   <span style={{ color: "red" , marginTop:"10px" }}>Min length 8 Character</span> )}
             {errors.password && errors.password.type === "pattern" && (   <span style={{ color: "red" , marginTop:"10px" }}>     Entered value does not match password    </span>)}
             {errors.password && errors.password.type === "pattern" && (   <span style={{ color: "red" , marginTop:"10px" }}>     Entered value does not match password    </span>)}

          </div>
          {/* button */}
          <div className="btn-conteiner">
            <button className="btn-content" href="#">
              <span className="btn-title">Login</span>
              <span className="icon-arrow">
                <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g id="arrow" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                    <path id="arrow-icon-one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"/>
                    <path id="arrow-icon-two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"/>
                    <path id="arrow-icon-three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"/>
                  </g>
                </svg>
              </span>
            </button>
            <a href="/register">I Don`t Have An Account</a>
          </div>
        </form>
      </div>
    </div>
    </>

  );
}

export default Login;
