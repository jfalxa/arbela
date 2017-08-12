import React               from 'react';
import LinkSharer          from './LinkSharer';
import withUser            from '../auth/withUser';
import withLink            from './withLink';
import withCreateLink      from './withCreateLink';
import withAvailableBoards from './withAvailableBoards';


class ShareLink extends React.Component
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
        const { link, boards, loadingUser, loadingLink, loadingBoards } = this.props;

        return (

            <LinkSharer
                link={ link }
                boards={ boards }
                loadingUser={ loadingUser }
                loadingLink={ loadingLink }
                loadingBoards={ loadingBoards }
                onSubmit={ this.handleSubmit } />

        );
    }
}


export default withUser( withLink( withAvailableBoards( withCreateLink( ShareLink ) ) ) );
