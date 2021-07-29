import React from 'react';
// import { connect } from 'react-redux';
import Sections from './Sections';

class Dashboard extends React.Component
{
    state = {

    };
    render ()
    {
        return (
            <div>
                <h2>Dashboard</h2>
                <Sections />
            </div>
        );
    }
}

export default Dashboard;