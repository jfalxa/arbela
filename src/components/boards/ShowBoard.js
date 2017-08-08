import React               from 'react';
import Board               from './Board';
import withBoardLinks      from './withBoardLinks';
import withUpdateScore     from './withUpdateScore';
import withRemoveBoardLink from './withRemoveBoardLink';


class ShowBoard extends React.Component
{
    handleRemoveLink = ( linkID ) =>
    {
        const { board, removeBoardLink, refetchBoardLinks } = this.props;

        removeBoardLink( board.id, linkID )
            .then( res => console.log( 'Link removed from board', res ) )
            .then( refetchBoardLinks )
            .catch( err => console.log( 'Failed removing link from board', err ) );
    }


    handleVote = ( boardLink, vote ) =>
    {
        const { updateScore } = this.props;

        updateScore( boardLink.id, boardLink.score + vote )
            .then( res => console.log( 'Vote was registered', res ) )
            .catch( err => console.log( 'Failed voting' ) );
    }


    render()
    {
        const { board, loadingBoard } = this.props;

        return (

            <Board
                board={ board }
                loadingBoard={ loadingBoard }
                onVote={ this.handleVote }
                onRemoveLink={ this.handleRemoveLink } />

        );
    }
}


export default withBoardLinks( withUpdateScore( withRemoveBoardLink( ShowBoard ) ) );
