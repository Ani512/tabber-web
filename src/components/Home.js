import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startSetURL } from '../actions/urlActions';
import UrlList from './UrlList';

class Home extends React.Component
{
    componentDidMount ()
    {
        this.props.dispatch( startSetURL( this.props.section.id ) );
    }

    render ()
    {
        return (
            <div>
                <div>
                    <h3>{ this.props.section.title }</h3>
                    <NavLink to={ `/section/${ this.props.section.id }/addURL` }><button>+</button></NavLink>
                </div>
                <div>
                    <UrlList section={ this.props.section } />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ( state, props ) => (
    {
        section: state.sections.find( ( sec ) => sec.id === props.match.params.id )
    } );

export default connect( mapStateToProps )( Home );