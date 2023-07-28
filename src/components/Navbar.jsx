import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className={`header`}>
      
      <div className="leftSection">
        
        <p className="name">Pavithra </p>

      
        <button className="nowAvailableButton">Now Available</button>
      </div>

    
      <div className="RightSection">
      
        <img
          src="logo.jpeg"
          alt="Logo 1"
          className="logoImage"
        />
        <img
          src="ti.jpeg"
          alt="Logo 2"
          className="logoImage"
        />
        <img
          src="si.jpeg"
          alt="Logo 3"
          className="logoImage"
        />
      </div>
    </div>
  );
};

export default Navbar;