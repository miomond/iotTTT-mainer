import React, { useEffect } from "react"; 
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/Landing/LandingPage";
import Bloger from "./pages/blog/Bloger.jsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";
import UserLayout from "./pages/user/UserLayout.jsx";
import Dashboard from "./pages/user/dashboard/Dashboard.jsx";
import { useAuth } from "./context/auth.jsx";
import { RequireAuth } from "./context/RequireAuth.jsx";
import FormEdit from "./pages/user/editForm/FormEdit.jsx";
import Profile from "./pages/user/profile/Profile.jsx";
import TotalBlogs from "./pages/blog/TotalBlogs.jsx";
import FullBlog from "./pages/user/blugin/FullBlog.jsx";
import AboutUs from "./pages/about-us-page/AboutUs.jsx";
import GumBloger from "./pages/blog/GumBloger.jsx";
import NotFound from "./components/404/NotFound.jsx";

function App() {

  let auth = useAuth();
  const navigate = useNavigate();

useEffect(() => {
  if (localStorage.getItem('_id') !== null) { 
      let data = {"_id": localStorage.getItem('_id'),   "fullName": localStorage.getItem('fullName'),
    "email": localStorage.getItem('email'),             "password": localStorage.getItem('password'),
    "phoneNumber": localStorage.getItem('phoneNumber'), "nationalId": localStorage.getItem('nationalId'),
    "wishLike":localStorage.getItem('wishLike'),        "likedBlogs":localStorage.getItem('likedBlogs'),
    "role": localStorage.getItem('role'),               "address": localStorage.getItem('address'),
    "joineDate": localStorage.getItem('joineDate')
}

auth.login(data);
    navigate('/users/dashboard');
  }
}, [localStorage.getItem('_id')])

 return (
   

  
      <Routes>
        <Route path="/"          element={<LandingPage />} />
        <Route path="/Blog"      element={<Bloger />} />
        <Route path="/Blog/:id"      element={<GumBloger />} />
        <Route path="/about"     element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login"     element={<Login />} />
        <Route path="/register"  element={<Register />} />
        <Route path="/users"     element={<RequireAuth><UserLayout /></RequireAuth>}           >
          <Route path="dashboard" element={ <Dashboard />}  />
          <Route path="profile"   element={<Profile/>}    />
          <Route path="allBlog"   element={<TotalBlogs />} />
          <Route path="allBlog/:id" element={<FullBlog/>} />
          <Route path="userSettings" element={<FormEdit/>} /> 
        </Route>
      <Route path="*"   element={<NotFound />} />
      </Routes>
 
  
  );
}

export default App;
