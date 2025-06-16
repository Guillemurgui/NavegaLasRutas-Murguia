// src/components/NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Podés crear estilos si querés

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🛒 Mi Tienda
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/category/remeras">Remeras</Link>
        </li>
        <li>
          <Link to="/category/buzos">Buzos</Link>
        </li>
        <li>
          <Link to="/category/pantalones">Pantalones</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
