import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const login = (user) => {
    setUser(user);
     };

  const logout = () => {
    setUser(null);
    // localStorage.removeItem("user"); // Clear local storage
    localStorage.removeItem("token"); // Clear token if needed
    
  };


  return (
    <AuthContext.Provider value={{ user, login, logout}}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
