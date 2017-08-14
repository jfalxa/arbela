import React            from 'react';
import { compose }      from 'react-apollo';
import Board            from './Board';
import withUser         from '../auth/withUser';
import withLoader       from '../generic/withLoader';
import withSearch       from '../generic/withSearch';
import withAddMember    from './withAddMember';
import withRemoveMember from './withRemoveMember';
import withBoardLinks   from './withBoardLinks';
import withUpdateScore  from './withUpdateScore';


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


    handleVote = ( link, vote ) =>
    {
        const { updateScore, user } = this.props;

        updateScore( link.id, link.score + vote, user.id )
            .then( res => console.log( 'Vote was registered', res ) )
            .catch( err => console.log( 'Failed voting', err ) );
    }


    render()
    {
        const { search, board, onSearch } = this.props;

        return (

            <Board
                board={ board }
                search={ search }
                onVote={ this.handleVote }
                onSearch={ onSearch }
                onJoinBoard={ this.handleJoinBoard }
                onLeaveBoard={ this.handleLeaveBoard } />

        );
    }
}


const connect = compose(
    withSearch,
    withUser,
    withBoardLinks,
    withAddMember,
    withRemoveMember,
    withUpdateScore,
    withLoader( p => p.loadingBoard )
);

export default connect( ShowBoard );
