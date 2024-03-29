import React from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import LandingPage from "./pages/Landing/LandingPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Bloger from "./pages/blog/Bloger.jsx";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import About from "./pages/about-us-page/About.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";
import UserLayout from "./pages/user/UserLayout.jsx";
import Dashboard from "./pages/user/dashboard/Dashboard.jsx";
import UserBlogs from "./pages/user/blogs/UserBlogs.jsx";
import { AuthProvider } from "./context/auth.jsx";
import { useAuth } from "./context/auth.jsx";
import { RequireAuth } from "./context/RequireAuth.jsx";
import FormEdit from "./pages/user/editForm/FormEdit.jsx";
import Profile from "./pages/user/profile/Profile.jsx";
import TotalBlogs from "./pages/blog/TotalBlogs.jsx";
import FullBlog from "./pages/user/blugin/FullBlog.jsx";
import AboutUs from "./pages/about-us-page/AboutUs.jsx";
import UserP from "./components/userPost/UserP.jsx";
import Liked from "./pages/user/liked/Liked.jsx";
import GumBloger from "./pages/blog/GumBloger.jsx";
function App() {
  let auth = useAuth();



 

 return (
    <AuthProvider  >
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
        <Route path="likedBlog" element={<Liked />} />
        <Route path="userSettings" element={<FormEdit/>} /> 

        </Route>
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
