import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startSetURL } from '../actions/urlActions';
import UrlList from './UrlList';
import { Button, Grid, Box, TableContainer, Table, TableBody, Paper } from '@mui/material';

class Home extends React.Component
{
    componentDidMount ()
    {
        this.props.dispatch( startSetURL( this.props.section.id ) );
    }

    render ()
    {
        return (
            <Grid sx={{ marginLeft: '25%', marginRight: '30%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Box>
                        <NavLink to={ `/section/${ this.props.section.id }/addURL` } style={{ textDecoration: 'none' }}>
                            <Button variant='contained' color='info'>Add URL</Button>
                        </NavLink>
                    </Box>
                    <Box sx={{ marginLeft: '30%' }}><h3>{ this.props.section.title }</h3></Box>
                </Box>
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            <UrlList section={ this.props.section } />
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        );
    }
}

const mapStateToProps = ( state, props ) => (
    {
        section: state.sections.find( ( sec ) => sec.id === props.match.params.id )
    } );

export default connect( mapStateToProps )( Home );