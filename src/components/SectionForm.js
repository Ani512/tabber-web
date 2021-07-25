import React from 'react';

class SectionForm extends React.Component
{
    render ()
    {
        return (
            <form onSubmit={ this.onSubmit }>
                <input type="text" placeholder="Section Name" />
                <button>Add</button>
            </form>
        );
    }
}

export default SectionForm;