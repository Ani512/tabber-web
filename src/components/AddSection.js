import React from 'react';
import SectionForm from './SectionForm';

class AddSection extends React.Component
{
    onSubmit = () =>
    {

    };
    render ()
    {
        return (
            <div>
                <p>Add a Section</p>
                <SectionForm />
            </div>
        );
    }
}

export default AddSection;