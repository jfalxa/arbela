import React          from 'react';
import LinkCreator    from './LinkCreator';
import withUser       from '../auth/withUser';
import withCreateLink from './withCreateLink';


class PostLink extends React.Component
{
    handleSubmit = ( link ) =>
    {
        const { user, createLink, history } = this.props;

        createLink( link, user )
            .then( newLink => history.replace( `/links/${ newLink.id }/share` ) )
            .then( () => console.log( 'Link created' ) )
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
