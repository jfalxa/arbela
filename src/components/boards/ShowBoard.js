import React            from 'react';
import Board            from './Board';
import withUser         from '../auth/withUser';
import withAddMember    from './withAddMember';
import withRemoveMember from './withRemoveMember';
import withBoardLinks   from './withBoardLinks';
import withUpdateScore  from './withUpdateScore';


class ShowBoard extends React.Component
{
    state =
    {
        search : ''
    }


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


    handleSearch = ( e ) =>
    {
        this.setState( { search: e.target.value } );
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
        const { board, loadingBoard } = this.props;

        return (

            <Board
                board={ board }
                search={ this.state.search }
                loadingBoard={ loadingBoard }
                onVote={ this.handleVote }
                onSearch={ this.handleSearch }
                onJoinBoard={ this.handleJoinBoard }
                onLeaveBoard={ this.handleLeaveBoard } />

        );
    }
}


export default withUser( withBoardLinks( withAddMember( withRemoveMember( withUpdateScore( ShowBoard ) ) ) ) )
