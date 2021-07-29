import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import SectionForm from "./SectionForm";
import { removeSection, editSectionName } from '../actions/sectionsActions';

const EditSection = ( props ) =>
{
    const [ modalIsOpen, setIsOpen ] = React.useState( false );

    const openModal = () =>
    {
        setIsOpen( true );
    };

    const afterOpenModal = () =>
    {
        // Content to be added after modal is Opened 
        // Usually Style Changes 
    };

    const closeModal = () =>
    {
        setIsOpen( false );
    };

    return (
        <div>
            <h2>
                Edit Section Name
            </h2>
            <div>
                <SectionForm addExpToDash={ ( section ) =>
                {
                    props.dispatch( editSectionName( props.section.id, section ) );
                    props.history.push( '/dash' );
                } }
                    section={ props.section } />
                <button className="btn delete-section-confirm" onClick={ openModal }>Delete Section</button>
                <Modal
                    isOpen={ modalIsOpen }
                    onAfterOpen={ afterOpenModal }
                    onRequestClose={ closeModal }
                    contentLabel="Example Modal"
                    ariaHideApp={ false }
                >
                    <div>
                        <h2>Confirm Delete ?</h2>
                        <p>You will lose ALL the data stored in the section</p>
                        <button className="btn btn-edit-page-remove" onClick={ () =>
                        {
                            props.dispatch( removeSection( { id: props.section.id } ) );
                            closeModal();
                            props.history.push( '/dash' );
                        }
                        }>Delete</button>
                        <button className="btn btn-cancel-delete" onClick={ closeModal }>Cancel</button>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

const mapStateToProps = ( state, props ) =>
{
    return {
        section: state.sectionsReducer.find( ( sec ) => sec.id === props.match.params.id )
    };
};

export default connect( mapStateToProps )( EditSection );