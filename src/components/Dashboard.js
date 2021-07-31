import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Sections from './Sections';
import { totalSections } from '../selectors/sections';

class Dashboard extends React.Component
{
    state = {

    };
    render ()
    {
        return (
            <div>
                <h2>Dashboard</h2>
                { this.props.totalNumberOfSections < 1 ?
                    <div>
                        <p>Please add a Section to Continue</p>
                        <Link to="/addSection"><button className="btn btn-to-add-sec">Add Section</button></Link>
                    </div>
                    : '' }
                <Sections />
            </div>
        );
    }
}

const mapStateToProps = ( state, props ) =>
{
    return {
        totalNumberOfSections: totalSections( state.sectionsReducer )
    };
};

export default connect( mapStateToProps )( Dashboard );