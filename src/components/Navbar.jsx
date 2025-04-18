import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import logo from "../assets/election-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        {/* Logo & Title */}
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <p>One Vote One Nation</p>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/afterhome" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/profile" onClick={closeMenu}>Profile</Link></li>
          <li><Link to="/vote" onClick={closeMenu}>Vote</Link></li>
          <li><Link to="/result" onClick={closeMenu}>Result</Link></li>
        </ul>
      </nav>

      {/* Background Overlay (for Mobile Menu) */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
