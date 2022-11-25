import React from "react";
import { useState } from "react";
import { Route, Routes, Switch, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Menu from "./Menu";
import Series from "./Series";
import Hooks from "./Hooks";
import { NavLink } from "react-router-dom";

import Error from "./Error";
// import Navbar from './Navbar'
const App = () => {
  return (
    <>
  <Menu/>
      <Routes>
      <Route > 
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />

        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/series" element={<Series/>} />
        <Route path="/hooks" element={<Hooks/>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
 