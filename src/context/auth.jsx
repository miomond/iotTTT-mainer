import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const login = (user) => {
    setUser(user);
    localStorage.setItem('_id', user._id)
    localStorage.setItem('fullName', user.fullName)
    localStorage.setItem('email', user.email)
    localStorage.setItem('password', user.password)
    localStorage.setItem('phoneNumber', user.phoneNumber)
    localStorage.setItem('nationalId', user.nationalId)
    localStorage.setItem('wishLike', user.wishLike)
    localStorage.setItem('likedBlogs', user.likedBlogs)
    localStorage.setItem('role', user.role)
    localStorage.setItem('address', user.address)
    localStorage.setItem('joineDate', user.joineDate)
     };

  const logout = () => {
    setUser(null);
    localStorage.clear();    
  };


  return (
    <AuthContext.Provider value={{ user, login, logout}}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
