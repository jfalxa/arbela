import React               from 'react';
import BoardLinkCreator    from './BoardLinkCreator';
import withUser            from '../auth/withUser';
import withBoard           from './withBoard';
import withCreateBoardLink from './withCreateBoardLink';


class PostBoardLink extends React.Component
{
    handleSubmit = ( link ) =>
    {
        const { board, user, createBoardLink, history } = this.props;

        createBoardLink( board.id, link, user.id )
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


export default withUser( withBoard( withCreateBoardLink( PostBoardLink ) ) );
