import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/authActions';
import { Box, Grid, Button, Modal } from '@mui/material';
import '../styles/css/Header.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Header = ( props ) =>
{
    const [ modalIsOpen, setIsOpen ] = React.useState( false );

    const openModal = () =>
    {
        setIsOpen( true );
    };

    const closeModal = () =>
    {
        setIsOpen( false );
    };

    return (
        <div className="header-main" style={{ backgroundColor: "#ffb74d", position: 'sticky', paddingTop: '2%' }}>
            <div style={{ marginBottom: '5%' }}>
                <Grid container>
                    <Grid sx={{marginLeft: '5%', marginTop: 1}} item xs={1}><NavLink style={{ textDecoration: 'none' }} exact to="/dash" activeClassName="h-link-active">Home</NavLink></Grid>
                    <Grid sx={{ marginTop: 1 }} item xs={2}><NavLink style={{ textDecoration: 'none', marginLeft: '20%' }} to="/addSection" activeClassName="h-link-active">Add Section</NavLink></Grid>
                    <h1 style={{ marginLeft: '15%', marginTop: 0 }}>Tabber</h1>
                    <Box sx={{ marginLeft: 'auto', marginRight: 5, marginBottom: 5 }}><Button variant="contained" color="error" className="btn logout-btn" onClick={ openModal }>Logout</Button></Box>
                </Grid>
                <Modal
                    open={modalIsOpen}
                    onClose={closeModal}
                    // sx={{ bgcolor: "#e57373" }}
                    aria-labelledby="Logout Modal"
                >
                    <Box sx={style}>
                        <h2 style={{ marginLeft: '15%' }}>Do you want to Logout ?</h2>
                        <Grid container sx={{ margin: 5 }}>
                            <Grid item xs={4} sx={{ marginLeft: '7%' }}><Button variant="contained" color="info" className="btn btn-cancel" onClick={ closeModal }>Cancel</Button></Grid>
                            <Button variant="contained" color="error" className="btn btn-logout" sx={{ marginLeft: 2}} onClick={ () =>
                            {
                                props.startLogout();
                                closeModal();
                            }
                            }>Logout</Button>
                        </Grid>
                    </Box>
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