import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { startLogout } from '../actions/authActions';
import '../styles/css/Header.css';

const Header = ( props ) =>
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
        <div className="header-main">
            <h2>Tabber</h2>
            <div>
                <NavLink exact to="/dash" activeClassName="h-link-active">Home</NavLink>
                <NavLink to="/addSection" activeClassName="h-link-active">Add Section</NavLink>
                <button className="btn logout-btn" onClick={ openModal }>Logout</button>
                <Modal
                    isOpen={ modalIsOpen }
                    onAfterOpen={ afterOpenModal }
                    onRequestClose={ closeModal }
                    contentLabel="Logout Modal"
                    ariaHideApp={ false }
                >
                    <div>
                        <h2>Do you want to Logout ?</h2>
                        <button className="btn btn-logout" onClick={ () =>
                        {
                            props.startLogout();
                            closeModal();
                        }
                        }>Logout</button>
                        <button className="btn btn-cancel" onClick={ closeModal }>Cancel</button>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

const mapDispatchToProps = ( dispatch ) => (
    {
        startLogout: () => dispatch( startLogout() )
    }
);

export default connect( undefined, mapDispatchToProps )( Header );