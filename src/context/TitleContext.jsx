// TitleContext.js
import { useLocation } from 'react-router-dom';


import React, { createContext, useState, useEffect } from 'react';


export const TitleContext = createContext();

export const TitleContextProvider = ({ children }) => {
  const [currentRouteName, setCurrentRouteName] = useState(window.location.pathname.replace(/^\//, '')); // Initial value based on current route


let value = 0;

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentRouteName(window.location.pathname.replace(/^\//, ''));
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <TitleContext.Provider value={{ current: currentRouteName }}>
      {children}
    </TitleContext.Provider>
  );
};

