import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/authActions';
import '../styles/css/Header.css';

const Header = ( props ) => (
    <div className="header-main">
        <h2>Tabber</h2>
        <div>
            <NavLink exact to="/dash" activeClassName="h-link-active">Home</NavLink>
            <NavLink to="/addSection" activeClassName="h-link-active">Add Section</NavLink>
            <button className="btn logout-btn" onClick={ props.startLogout }>Logout</button>
        </div>
    </div>
);

const mapDispatchToProps = ( dispatch ) => (
    {
        startLogout: () => dispatch( startLogout() )
    }
);

export default connect( undefined, mapDispatchToProps )( Header );