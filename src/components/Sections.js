import React from 'react';
import { connect } from 'react-redux';
import Section from './SingleSection';

const Sections = ( props ) =>
(
    <div>
        { props.section.map( ( sec ) => <Section section={ sec } key={ sec.id } /> ) }
    </div>
);

const mapStateToProps = ( state ) =>
{
    return {
        section: state.sectionsReducer
    };
};

export default connect( mapStateToProps )( Sections );