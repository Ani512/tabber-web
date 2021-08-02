import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Home = ( props ) =>
(
    <div>
        <h3>{ props.section.title }</h3>
        <NavLink to={ `/${ props.section.id }/addURL` }><button>+</button></NavLink>
    </div>
);

const mapStateToProps = ( state, props ) => (
    {
        section: state.sections.find( ( sec ) => sec.id === props.match.params.id )
    } );

export default connect( mapStateToProps )( Home );