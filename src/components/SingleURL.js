import React from 'react';
import { connect } from 'react-redux';
import { startDeleteURL } from '../actions/urlActions';

const SingleURL = ( props ) => (
    <div>
        <p>{ props.data.url }</p>
        <button className="btn delete-url" onClick={ ( e ) =>
        {
            e.preventDefault();
            props.dispatch( startDeleteURL( props.data.id, props.sectionId ) );
        } }>X</button>
    </div>
);

export default connect()( SingleURL );