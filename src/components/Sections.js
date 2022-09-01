import React from 'react';
import { connect } from 'react-redux';
import SingleSection from './SingleSection';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';

const Sections = ( props ) =>
(
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
            </TableHead>
            <TableBody>
            { props.section.map( ( sec ) => <SingleSection section={ sec } key={ sec.id } /> ) }
            </TableBody>
        </Table>
    </TableContainer>
);

const mapStateToProps = ( state ) =>
{
    return {
        section: state.sections
    };
};

export default connect( mapStateToProps )( Sections );