import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SectionForm from "./SectionForm";
import { startRemoveSection, startEditSectionName } from '../actions/sectionsActions';
import { Grid, Button, Box, Modal } from '@mui/material';

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

const EditSection = ( props ) =>
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
        <Grid sx={{ marginLeft: '35%', marginTop: '10%' }}>
            <h2 style={{ marginLeft: '2%' }}>Edit Section Name</h2>
            <Grid>
                <SectionForm addExpToDash={ ( section ) =>
                {
                    props.dispatch( startEditSectionName( props.section.id, section ) );
                    props.history.push( '/dash' );
                } }
                    section={ props.section } />
                <Grid sx={{ marginTop: '2%' }}> 
                    <Button variant='contained' color='error' className="btn delete-section-confirm" onClick={ openModal }>Delete Section</Button>
                    <Modal
                        open={modalIsOpen}
                        onClose={closeModal}
                        aria-labelledby="Example Modal"
                    >
                        <Box sx={style}>
                            <h2 style={{ marginLeft: '25%', marginTop: 0 }}>Confirm Delete ?</h2>
                            <p style={{ marginLeft: '5%' }}>You will lose ALL the data stored in the section</p>
                            <Grid sx={{ marginLeft: '25%', marginTop: '7%' }}>
                                <Button variant='contained' color='error' className="btn btn-edit-page-remove" onClick={ () =>
                                {
                                    props.dispatch( startRemoveSection( { id: props.section.id } ) );
                                    closeModal();
                                    props.history.push( '/dash' );
                                }
                                }>Delete</Button>
                                <Button variant='contained' color='info' className="btn btn-cancel-delete" sx={{ marginLeft: '5%' }} onClick={ closeModal }>Cancel</Button>
                            </Grid>
                        </Box>
                    </Modal>
                    <Link to="/dash" style={{ textDecoration: 'none', marginLeft: '2%' }}><Button variant='contained' color='info' className="btn btn-toDash">Cancel</Button></Link>
                </Grid>   
            </Grid>
        </Grid>
    );
};

const mapStateToProps = ( state, props ) =>
{
    return {
        section: state.sections.find( ( sec ) => sec.id === props.match.params.id )
    };
};

export default connect( mapStateToProps )( EditSection );