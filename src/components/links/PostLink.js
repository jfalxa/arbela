import React          from 'react';
import LinkCreator    from './LinkCreator';
import withUser       from '../auth/withUser';
import withCreateLink from './withCreateLink';


class PostLink extends React.Component
{
    handleSubmit = ( link ) =>
    {
        const { user, createLink, history } = this.props;

        createLink( { ...link, author: user.id } )
            .then( res => console.log( 'Link created', res ) )
            .then( () => history.goBack() )
            .catch( err => console.log( 'Failed creating link', err ) );
    }


    render()
    {
        return (

            <LinkCreator
                loadingUser={ this.props.loadingUser }
                onSubmit={ this.handleSubmit } />

        );
    }
}


export default withUser( withCreateLink( PostLink ) );
