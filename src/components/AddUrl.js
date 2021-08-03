import React from 'react';
import isURL from 'validator/lib/isURL';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { startAddURL } from '../actions/urlActions';

class AddURL extends React.Component
{
    state = {
        err: true,
        modalIsOpen: false
    };
    validate = ( url ) =>
    {
        if ( isURL( url ) )
        {
            this.setState( () => ( { err: false } ) );
        } else
        {
            this.setState( () => ( { err: true } ) );
        }
    };
    openModal = () =>
    {
        this.setState( () => ( { modalIsOpen: true } ) );
    };

    afterOpenModal = () =>
    {
        // Content to be added after modal is Opened 
        // Usually Style Changes 
    };

    closeModal = () =>
    {
        this.setState( () => ( { modalIsOpen: false } ) );
    };
    render ()
    {
        return (
            <div>
                <form>
                    <h2>{ this.props.section.title }</h2>
                    <h3>Enter a Valid URL</h3>
                    <input placeholder="URL" id="input-url" />
                    <button onClick={ ( event ) =>
                    {
                        event.preventDefault();
                        this.validate( document.getElementById( 'input-url' ).value );
                        this.openModal();
                    } }>Validate</button>
                </form>
                <Modal
                    isOpen={ this.state.modalIsOpen }
                    onAfterOpen={ this.afterOpenModal }
                    onRequestClose={ this.closeModal }
                    contentLabel="Add URL Modal"
                    ariaHideApp={ false }
                >
                    <div>
                        { this.state.err === false ?
                            <div>
                                <h3>The URL entered is VALID</h3>
                                <button className="btn btn-addURL"
                                    onClick={ () =>
                                    {
                                        this.props.dispatch( startAddURL(
                                            {
                                                url: document.getElementById( 'input-url' ).value,
                                                sectionId: this.props.section.id
                                            } ) );
                                        this.props.history.push( `/section/${ this.props.section.id }` );
                                    } }>Add URL</button>
                                <button className="btn btn-cancel" onClick={ this.closeModal }>Cancel</button>
                            </div> :
                            <div>
                                <h3>Invalid URL</h3>
                                <p>Please Enter a Valid URL</p>
                                <button className="btn btn-close" onClick={ this.closeModal }>Close</button>
                            </div>
                        }
                    </div>
                </Modal>
                <NavLink to={ `/section/${ this.props.section.id }` }><button>Cancel</button></NavLink>
            </div>
        );
    }
};

const mapStateToProps = ( state, props ) => (
    {
        section: state.sections.find( ( sec ) => sec.id === props.match.params.id )
    } );

export default connect( mapStateToProps )( AddURL );