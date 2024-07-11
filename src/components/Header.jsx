import React from "react";
import { useAuth } from "../utils/AuthContext";
import { Link } from "react-router-dom";
import { LogOut, LogIn } from "react-feather";
import logo from "../assets/logo.png"; // Adjust the path as needed

const Header = () => {
  const { user, handleLogout } = useAuth();
  return (
    <div id="header--wrapper">
      {user ? (
        <>
          <img src={logo} alt="Logo" className="logo" />
          <span>Welcome {user.name}</span>
          <LogOut className="header--link" onClick={handleLogout} />
        </>
      ) : (
        <>
          <Link to="/">
            <LogIn className="header--link" />
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
