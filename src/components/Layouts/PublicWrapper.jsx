import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PublicWrapper = () => {
  const location= useLocation()
  const storage = localStorage?.getItem("LoginData");

    if(storage && (location.pathname === "/signup" || location.pathname === "/")){
      return <Navigate to={"/home"} />;
    }
    
  return (
      <Outlet/>
  );
};

export default PublicWrapper;
