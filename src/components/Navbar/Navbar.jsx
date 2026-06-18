import "./Navbar.css"
import { navLinks } from "../../data/siteData";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">

        <div className="logo">
          <h2>
            <span>Envir</span>
            <span>Galaxy</span>
          </h2>
          <p>Technology</p>
        </div>

        <ul className={ menuOpen ? "nav-links active" : "nav-links"}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <button className="nav-btn">
          Let's Talk
        </button>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;