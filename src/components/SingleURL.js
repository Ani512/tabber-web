import React from 'react';
import { connect } from 'react-redux';
import { startDeleteURL } from '../actions/urlActions';
import { Button, TableCell, TableRow } from '@mui/material';

const SingleURL = ( props ) => (
    <TableRow sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <TableCell><a href={ props.data.url } target="_blank" rel='noreferrer'>{ props.data.url }</a></TableCell>
        <TableCell>
            <Button variant='contained' color='error' sx={{ padding: 0, margin: 0 }} className="btn delete-url" onClick={ ( e ) =>
                {
                    e.preventDefault();
                    props.dispatch( startDeleteURL( props.data.id, props.sectionId ) );
        }        }>X
            </Button>
        </TableCell>
    </TableRow>
);

export default connect()( SingleURL );