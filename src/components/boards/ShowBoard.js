import React               from 'react';
import Board               from './Board';
import withUser            from '../auth/withUser';
import withAddMember       from './withAddMember';
import withRemoveMember    from './withRemoveMember';
import withBoardLinks      from './withBoardLinks';
import withUpdateScore     from './withUpdateScore';
import withDeleteBoardLink from './withDeleteBoardLink';


class ShowBoard extends React.Component
{
    handleJoinBoard = () =>
    {
        const { user, board, addMember } = this.props;

        addMember( board.id, user.id )
            .then( res => console.log( 'Joined board', res ) )
            .catch( err => console.log( 'Failed joining board', err ) );
    }


    handleLeaveBoard = () =>
    {
        const { user, board, removeMember } = this.props;

        removeMember( board.id, user.id )
            .then( res => console.log( 'Leaved board', res ) )
            .catch( err => console.log( 'Failed leaving board', err ) );
    }


    handleDeleteLink = ( linkID ) =>
    {
        const { deleteBoardLink, refetchBoardLinks } = this.props;

        deleteBoardLink( linkID )
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
                onDeleteLink={ this.handleDeleteLink } />

        );
    }
}


export default withUser( withBoardLinks( withAddMember( withRemoveMember( withUpdateScore( withDeleteBoardLink( ShowBoard ) ) ) ) ) )
