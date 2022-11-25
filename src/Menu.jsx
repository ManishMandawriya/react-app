import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      {/* <a href="/" className="btn btn-success" id="home">
        Home
      </a>
      <a href="/about" className="btn btn-success" id="abt">
        About Us
      </a>
      <a href="/contact" className="btn btn-success" id="cnt">
        Contact US
      </a> */}
      <NavLink className="btn btn-success" to="/" id="home" > Home</NavLink>
      <NavLink className="btn btn-success" to="/series" id="sbtn" >Series</NavLink>
      <NavLink className="btn btn-success" to="/about" id="abt">About us</NavLink>
      <NavLink className="btn btn-success" to="/contact" id="cnt">Contact Us</NavLink>

    </>
  );
};

export default Menu;
