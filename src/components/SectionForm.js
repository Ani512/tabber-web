import React from 'react';

class SectionForm extends React.Component
{
    constructor ( props )
    {
        super( props );

        this.state = {

        };
    }
    onSectionChange = ( e ) =>
    {
        this.setState( () =>
        ( {
            title: e.target.value
        } ) );
    };
    onSubmit = ( e ) =>
    {
        e.preventDefault();

        this.props.addExpToDash( {
            title: this.state.title
        } );
    };
    render ()
    {
        return (
            <form onSubmit={ this.onSubmit }>
                <input type="text" placeholder="Section Name" onChange={ this.onSectionChange } />
                <button>Add</button>
            </form>
        );
    }
}

export default SectionForm;