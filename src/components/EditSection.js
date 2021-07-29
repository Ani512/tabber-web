import React from 'react';
import { connect } from 'react-redux';
// import Modal from 'react-modal';
import SectionForm from "./SectionForm";
import { removeSection, editSectionName } from '../actions/sectionsActions';

const EditSection = ( props ) => (
    <div>
        <h2>
            Edit Section Name
        </h2>
        <div>
            <SectionForm addExpToDash={ ( section ) =>
            {
                props.dispatch( editSectionName( props.section.id, section ) );
                props.history.push( '/dash' );
            } } />
            <button className="btn btn-edit-page-remove" onClick={ () =>
            {
                props.dispatch( removeSection( { id: props.section.id } ) );
                props.history.push( '/dash' );
            }
            }>Delete Section</button>
        </div>
    </div>
);

const mapStateToProps = ( state, props ) =>
{
    return {
        section: state.sectionsReducer.find( ( sec ) => sec.id === props.match.params.id )
    };
};

export default connect( mapStateToProps )( EditSection );