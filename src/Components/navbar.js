import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="nav">
    <ul className="Items">
      <li className="Fonts">
        <NavLink
          className="text-decoration-none"
          to="/"
        >
          <h3 className="Fonts"> ⮌ </h3>
        </NavLink>
        <h5 className="mt-1 Fonts">Crypto Trades</h5>
      </li>
      <li className="Icons">
        <h1>🎤</h1>
        <h1 className="px-2">⚙︎</h1>
      </li>
    </ul>
  </nav>
);

export default Nav;
