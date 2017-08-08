import React               from 'react';
import Board               from './Board';
import withUser            from '../auth/withUser';
import withJoinBoard       from './withJoinBoard';
import withLeaveBoard      from './withLeaveBoard';
import withBoardLinks      from './withBoardLinks';
import withUpdateScore     from './withUpdateScore';
import withRemoveBoardLink from './withRemoveBoardLink';


class ShowBoard extends React.Component
{
    handleJoinBoard = () =>
    {
        const { user, board, joinBoard } = this.props;

        joinBoard( board.id, user.id )
            .then( res => console.log( 'Joined board', res ) )
            .catch( err => console.log( 'Failed joining board', err ) );
    }


    handleLeaveBoard = () =>
    {
        const { user, board, leaveBoard } = this.props;

        leaveBoard( board.id, user.id )
            .then( res => console.log( 'Leaved board', res ) )
            .catch( err => console.log( 'Failed leaving board', err ) );
    }


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
        const { updateScore, user } = this.props;

        updateScore( boardLink.id, boardLink.score + vote, user.id )
            .then( res => console.log( 'Vote was registered', res ) )
            .catch( err => console.log( 'Failed voting', err ) );
    }


    render()
    {
        const { board, loadingBoard } = this.props;

        return (

            <Board
                board={ board }
                loadingBoard={ loadingBoard }
                onVote={ this.handleVote }
                onJoinBoard={ this.handleJoinBoard }
                onLeaveBoard={ this.handleLeaveBoard }
                onRemoveLink={ this.handleRemoveLink } />

        );
    }
}


export default withUser( withBoardLinks( withJoinBoard( withLeaveBoard( withUpdateScore( withRemoveBoardLink( ShowBoard ) ) ) ) ) )
