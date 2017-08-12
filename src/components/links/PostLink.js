import React               from 'react';
import LinkCreator         from './LinkCreator';
import withUser            from '../auth/withUser';
import withCreateLink      from './withCreateLink';
import withAvailableBoards from './withAvailableBoards';


class PostLink extends React.Component
{
    handleSubmit = ( link, boards ) =>
    {
        const { user, createLink, history } = this.props;

        const boardLinks = boards.map( boardID => createLink( link, user.id, boardID ) );

        Promise.all( boardLinks )
            .then( res => console.log( 'Links created', res ) )
            .then( history.goBack )
            .catch( err => console.log( 'Failed creating link', err ) );
    }


    render()
    {
        const { boards, loadingUser, loadingBoards } = this.props;

        return (

            <LinkCreator
                boards={ boards }
                loadingUser={ loadingUser }
                loadingBoards={ loadingBoards }
                onSubmit={ this.handleSubmit } />

        );
    }
}


export default withUser( withAvailableBoards( withCreateLink( PostLink ) ) );
