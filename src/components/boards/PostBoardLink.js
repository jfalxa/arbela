import React            from 'react';
import BoardLinkCreator from './BoardLinkCreator';
import withUser         from '../auth/withUser';
import withBoard        from './withBoard';
import withCreateLink   from '../links/withCreateLink';


class PostBoardLink extends React.Component
{
    handleSubmit = ( link ) =>
    {
        const { board, user, createLink, history } = this.props;

        createLink( link, user.id, board.id)
            .then( res => console.log( 'Link created', res ) )
            .then( history.goBack )
            .catch( err => console.log( 'Failed creating link', err ) );
    }


    render()
    {
        const { board, loadingBoard, loadingUser } = this.props;

        return (

            <BoardLinkCreator
                board={ board }
                loadingBoard={ loadingBoard }
                loadingUser={ loadingUser }
                onSubmit={ this.handleSubmit } />

        );
    }
}


export default withUser( withBoard( withCreateLink( PostBoardLink ) ) );
