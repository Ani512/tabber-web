import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SectionForm from './SectionForm';
import { startAddSection } from '../actions/sectionsActions';

const AddSection = ( props ) => (
    <div>
        <h3>Add a Section</h3>
        <SectionForm addExpToDash={ ( section ) =>
        {
            props.dispatch( startAddSection( section ) );
            props.history.push( '/dash' );
        } } />
        <Link to="/dash"><button className="btn btn-toDash">Cancel</button></Link>
    </div>
);

export default connect()( AddSection );