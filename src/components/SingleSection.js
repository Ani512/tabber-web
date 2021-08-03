import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Section = ( props ) =>
(
    <div>
        <NavLink to={ `/section/${ props.section.id }` }> { props.section.title } </NavLink>
        <Link to={ `/edit/${ props.section.id }` }><button className="go-to-edit-page-button">Edit</button></Link>
    </div>
);

export default Section;