import React               from 'react';
import BoardLinks          from './BoardLinks';
import withBoardLinks      from './withBoardLinks';
import withRemoveBoardLink from './withRemoveBoardLink';


class ShowBoardLinks extends React.Component
{
    handleRemoveLink = ( linkID ) =>
    {
        const { board, removeBoardLink, refetchBoardLinks } = this.props;

        removeBoardLink( board.id, linkID )
            .then( res => console.log( 'Link removed from board', res ) )
            .then( refetchBoardLinks )
            .catch( err => console.log( 'Failed removing link from board', err ) );
    }


    render()
    {
        const { board, loadingBoard } = this.props;

        return (

            <BoardLinks
                board={ board }
                loadingBoard={ loadingBoard }
                onRemoveLink={ this.handleRemoveLink } />

        );
    }
}


export default withBoardLinks( withRemoveBoardLink( ShowBoardLinks ) );
