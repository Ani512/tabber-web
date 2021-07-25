import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/css/Header.css';

const Header = () => (
    <div className="header-main">
        <h2>Tabber</h2>
        <div>
            <NavLink exact to="/dash" activeClassName="h-link-active">Home</NavLink>
            <NavLink to="/addSection" activeClassName="h-link-active">Add Section</NavLink>
        </div>
    </div>
);

export default Header;