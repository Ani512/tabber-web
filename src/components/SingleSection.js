import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const SingleSection = ( props ) =>
(
    <TableRow sx={{ borderBottom: 'solid 2px #ffb74d' }}>
        <TableCell><NavLink style={{ textDecoration: 'none' }} to={ `/section/${ props.section.id }` }><h3>{props.section.title}</h3></NavLink></TableCell>
        <TableCell align='right'>
            <Link style={{ textDecoration: 'none' }} to={`/edit/${ props.section.id }`}>
                <Button variant='contained' className="go-to-edit-page-button" sx={{ padding: 0, zIndex: 0 }}>Edit</Button>
            </Link>
        </TableCell>
    </TableRow>
);

export default SingleSection;