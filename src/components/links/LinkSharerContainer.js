import React      from 'react';
import LinkSharer from './LinkSharer';


class LinkSharerContainer extends React.Component
{
    state =
    {
        checked : []
    }


    handleCheck = ( checked ) =>
    {
        this.setState( { checked } );
    }


    handleSubmit = ( link ) =>
    {
        if ( this.state.checked.length === 0 )
        {
            return console.log( "No board selected" );
        }

        const { checked }  = this.state;
        const { onSubmit } = this.props;

        onSubmit( link, checked );
    }


    render()
    {
        const { link, boards } = this.props;

        return (

            <LinkSharer
                link={ link }
                boards={ boards }
                checked={ this.state.checked }
                onCheck={ this.handleCheck }
                onSubmit={ this.handleSubmit } />

        );
    }
}


export default LinkSharerContainer;

