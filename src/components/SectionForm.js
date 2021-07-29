import React from 'react';

class SectionForm extends React.Component
{
    constructor ( props )
    {
        super( props );

        this.state = {
            title: props.section ? props.section.title : '',
            error: undefined
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
        if ( !this.state.title || this.state.title.length > 50 )
        {
            this.setState( () => ( { error: 'Please Change Section Name' } ) );
        }
        else 
        {
            this.setState( () => ( { error: undefined } ) );

            this.props.addExpToDash( {
                title: this.state.title
            } );
        }
        e.target.reset();
    };
    render ()
    {
        return (
            <form onSubmit={ this.onSubmit }>
                <input type="text" placeholder="Section Name" value={ this.state.title } onChange={ this.onSectionChange } />
                <button>Add Section</button>
                { this.state.error ? <p>{ this.state.error }</p> : '' }
            </form>
        );
    }
}

export default SectionForm;