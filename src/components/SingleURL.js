import React from 'react';
import { connect } from 'react-redux';
import { startDeleteURL } from '../actions/urlActions';

const SingleURL = ( props ) => (
    <div>
        <a href={ props.data.url } target="_blank" rel='noreferrer'>{ props.data.url }</a>
        <button className="btn delete-url" onClick={ ( e ) =>
        {
            e.preventDefault();
            props.dispatch( startDeleteURL( props.data.id, props.sectionId ) );
        } }>X</button>
    </div>
);

export default connect()( SingleURL );