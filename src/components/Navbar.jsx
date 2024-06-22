import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/nfp-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar" id="top">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/camarades"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Camarades
        </NavLink>
        <a
          href="https://www.nouveaufrontpopulaire.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nouveau Front Populaire
        </a>
      </nav>
      <div className={`burger ${isOpen ? "toggle" : ""}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
};

export default Navbar;
