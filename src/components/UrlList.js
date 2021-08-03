import React from 'react';
import { connect } from 'react-redux';
import SingleURL from './SingleURL';

const UrlList = ( props ) => (
    <div>
        { props.urls.map( ( url ) => <SingleURL data={ url } key={ url.id } sectionId={ props.section.id } /> ) }
    </div>
);

const mapStateToProps = ( state ) =>
{
    return {
        urls: state.urls,
    };
};

export default connect( mapStateToProps )( UrlList );