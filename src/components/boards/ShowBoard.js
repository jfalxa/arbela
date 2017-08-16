import React            from 'react';
import { compose }      from 'react-apollo';
import { Redirect }     from 'react-router-dom';
import Board            from './Board';
import withUser         from '../auth/withUser';
import withLoader       from '../generic/withLoader';
import withSearch       from '../generic/withSearch';
import withBoard        from './withBoard';
import withAddMember    from './withAddMember';
import withRemoveMember from './withRemoveMember';
import withUpdateScore  from '../links/withUpdateScore';


class ShowBoard extends React.Component
{
    handleJoinBoard = () =>
    {
        const { user, board, addMember } = this.props;

        addMember( board.data.id, user.data.id )
            .then( res => console.log( 'Joined board', res ) )
            .then( board.refetch )
            .catch( err => console.log( 'Failed joining board', err ) );
    }


    handleLeaveBoard = () =>
    {
        const { user, board, removeMember } = this.props;

        removeMember( board.data.id, user.data.id )
            .then( res => console.log( 'Leaved board', res ) )
            .then( board.refetch )
            .catch( err => console.log( 'Failed leaving board', err ) );
    }


    render()
    {
        if ( !this.props.board.data )
        {
            return <Redirect to="/" />;
        }

        const { search, board, onSearch } = this.props;

        return (

            <Board
                board={ board.data }
                access={ board.access }
                search={ search }
                onVote={ this.handleVote }
                onSearch={ onSearch }
                onJoinBoard={ this.handleJoinBoard }
                onLeaveBoard={ this.handleLeaveBoard } />

        );
    }
}


const connect = compose(
    withUser,
    withBoard,
    withSearch,
    withAddMember,
    withRemoveMember,
    withUpdateScore,
    withLoader( p => p.user.loading || p.board.loading )
);

export default connect( ShowBoard );
