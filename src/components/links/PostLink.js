import React             from 'react';
import LinkFormContainer from './LinkFormContainer';
import withUser          from '../auth/withUser';
import withCreateLink    from './withCreateLink';


class PostLink extends React.Component
{
    handleSubmit = ( link ) =>
    {
        const { user, createLink, history } = this.props;

        createLink( { ...link, author: user.id } )
            .then( res => console.log( 'Link created', res ) )
            .then( () => history.push( '/' ) )
            .catch( err => console.log( 'Failed creating link', err ) );
    }


    render()
    {
        return (

            <section>

                <h2>Post new link</h2>

                <LinkFormContainer
                    onSubmit={ this.handleSubmit } />

            </section>

        );
    }
}


export default withUser( withCreateLink( PostLink ) );
