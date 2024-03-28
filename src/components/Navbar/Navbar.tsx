import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.svg" alt="Logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li><a href="#qui-sommes-nous">Qui sommes-nous ?</a></li>
          <li><a href="#nos-valeurs">Nos valeurs</a></li>
          <li><a href="#reservez">Réservez !</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
