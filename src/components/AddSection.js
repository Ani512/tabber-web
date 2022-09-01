import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SectionForm from './SectionForm';
import { Button, Grid } from '@mui/material';
import { startAddSection } from '../actions/sectionsActions';

const AddSection = ( props ) => (
    <div style={{ marginLeft: '35%' }}>
        <h3 style={{ marginLeft: '10%', marginTop: '5%' }}>Add a Section</h3>
        <SectionForm addExpToDash={ ( section ) =>
        {
            props.dispatch( startAddSection( section ) );
            props.history.push( '/dash' );
        } } />
        <Grid sx={{marginLeft: 5, marginTop: 2}}>
            <Link to="/dash" style={{ textDecoration: 'none' }}><Button className="btn btn-toDash" variant='contained' color='info'>Cancel</Button></Link>
        </Grid>
    </div>
);

export default connect()( AddSection );