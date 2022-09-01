import React from 'react';
import { Button, TextField, Grid } from '@mui/material';

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
            this.setState( () => ( { error: 'Invalid Section name. Please Edit Section Name' } ) );
        }
        else 
        {
            this.setState( () => ( { error: undefined } ) );

            this.props.addExpToDash( {
                title: this.state.title
            } );
        }
        document.getElementById("add-section-textarea").value = "";
    };

    render ()
    {
        return (
            <Grid sx={{ marginLeft: 5, marginTop: 5 }}>
                <TextField id="add-section-textarea" label="Section Name" value={ this.state.title } variant="outlined" onChange={this.onSectionChange} />
                <Button sx={{margin: 2}} variant="contained" color="info" onClick={this.onSubmit}>Add Section</Button>
                { this.state.error ? <p>{ this.state.error }</p> : '' }
            </Grid>
        );
    }
}

export default SectionForm;