import React          from 'react';
import LinkForm       from './LinkForm';
import withCreateLink from './withCreateLink';


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

        const { createLink, history }     = this.props;
        const { title, url, description } = this.state;

        createLink( { title, url, description } )
            .then( res => console.log( 'Link created', res ) )
            .then( () => history.push( '/' ) )
            .catch( err => console.log( 'Failed creating link', err ) );
    }


    render()
    {
        const { title, url, description } = this.state;

        return (

            <section>

                <h2>Post new link</h2>

                <LinkForm
                    title={ title }
                    url={ url }
                    description={ description }
                    onChange={ this.handleChange }
                    onSubmit={ this.handleSubmit } />

            </section>

        );
    }
}


export default withCreateLink( PostLink );
