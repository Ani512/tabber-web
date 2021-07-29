import React from 'react';
import { connect } from 'react-redux';
import SectionForm from './SectionForm';
import { addSection } from '../actions/sectionsActions';

const AddSection = ( props ) => (
    <div>
        <p>Add a Section</p>
        <SectionForm addExpToDash={ ( section ) =>
        {
            props.dispatch( addSection( section ) );
            props.history.push( '/dash' );
        } } />
    </div>
);

export default connect()( AddSection );