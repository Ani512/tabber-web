import React from 'react';
import isURL from 'validator/lib/isURL';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startAddURL } from '../actions/urlActions';
import { Grid, Button, Modal, TextField, Box } from '@mui/material';

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

    closeModal = () =>
    {
        this.setState( () => ( { modalIsOpen: false } ) );
    };
    render ()
    {
        return (
            <Grid sx={{ marginLeft: '35%', marginRight: '25%' }}>
                <form style={{ marginBottom: '5%' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box><h2>{ this.props.section.title }</h2></Box>
                        <Box><h3>Enter a Valid URL</h3></Box>
                        <Box sx={{ marginBottom: '5%' }}><TextField label="URL" id="input-url" variant='outlined' fullWidth /></Box>
                        <Box>
                            <Button variant="contained" color="success" sx={{ margin: '0' }} onClick={ ( event ) =>
                            {
                                event.preventDefault();
                                this.validate( document.getElementById( 'input-url' ).value );
                                this.openModal();
                            } }>Validate</Button>
                        </Box>
                    </Box>
                </form>
                <Modal
                    open={this.state.modalIsOpen}
                    onClose={this.closeModal}
                    aria-labelledby="Add URL Modal"
                >
                    <Box sx={style}>
                        { this.state.err === false ?
                            <Grid sx={{ marginLeft: '20%' }}>
                                <h3>The URL entered is VALID</h3>
                                <Button className="btn btn-addURL" variant='contained' color='success'
                                    onClick={ () =>
                                    {
                                        this.props.dispatch( startAddURL(
                                            {
                                                url: document.getElementById( 'input-url' ).value,
                                                sectionId: this.props.section.id
                                            } ) );
                                        this.props.history.push( `/section/${ this.props.section.id }` );
                                    } }>Add URL</Button>
                                <Button variant="contained" color='info' className="btn btn-cancel" onClick={ this.closeModal } sx={{ marginLeft: '10%' }}>Cancel</Button>
                            </Grid> :
                            <Grid sx={{ marginLeft: '30%' }}>
                                <h3>Invalid URL</h3>
                                <p>Please Enter a Valid URL</p>
                                <Button variant='contained' color='info' className="btn btn-close" onClick={ this.closeModal }>Close</Button>
                            </Grid>
                        }
                    </Box>
                </Modal>
                <NavLink to={ `/section/${ this.props.section.id }` } style={{ textDecoration: 'none' }}><Button variant='contained' color='info'>Cancel</Button></NavLink>
            </Grid>
        );
    }
};

const mapStateToProps = ( state, props ) => (
    {
        section: state.sections.find( ( sec ) => sec.id === props.match.params.id )
    } );

export default connect( mapStateToProps )( AddURL );