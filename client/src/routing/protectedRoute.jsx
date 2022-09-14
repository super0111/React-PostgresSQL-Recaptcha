import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from '../utils/user';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = getUser();
    console.log(user)
    if (!user) {
      if (!isLoggedIn) {
        navigate("/login");
      }
    }
  }, []);
 

  return (
    <div className="main-admin-wrapper">
      <div className="side-bar-wrapper">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  )

};
export default ProtectedRoute;