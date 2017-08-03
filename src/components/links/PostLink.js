import React          from 'react';
import LinkForm       from './LinkForm';
import withCreateLink from './createLink';


class PostLink extends React.Component
{
    state =
    {
        title       : '',
        url         : '',
        description : ''
    }


    handleChange = ( e ) =>
    {
        this.setState( { [e.target.name]: e.target.value } );
    }


    handleSubmit = ( e ) =>
    {
        e.preventDefault();

        const { createLink }              = this.props;
        const { title, url, description } = this.state;

        createLink( { title, url, description } )
            .then( res => console.log( 'Link created', res ) )
            .catch( err => console.log( 'Failed creating link', err ) );
    }


    render()
    {
        const { title, url, description } = this.state;

        return (

            <LinkForm
                title={ title }
                url={ url }
                description={ description }
                onChange={ this.handleChange }
                onSubmit={ this.handleSubmit } />

        );
    }
}


export default withCreateLink( PostLink );
