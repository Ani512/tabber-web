import React from 'react';
import { Link } from 'react-router-dom';

const Section = ( props ) =>
(
    <div>
        <p>{ props.section.title }</p>
        <Link to={ `/edit/${ props.section.id }` }><button className="go-to-edit-page-button">Edit</button></Link>
    </div>
);

export default Section;