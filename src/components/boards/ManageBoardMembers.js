import React            from 'react';
import { compose }      from 'react-apollo';
import { Redirect }     from 'react-router-dom';
import BoardMembers     from './BoardMembers';
import withUser         from '../auth/withUser';
import withLoader       from '../generic/withLoader';
import withBoard        from './withBoard';
import withAddMember    from './withAddMember';
import withRemoveMember from './withRemoveMember';
import withBoardMembers from './withBoardMembers';


class ShowBoard extends React.Component
{
    state =
    {
        searchedUser: ''
    }


    handleSearchUser = ( searchedUser ) =>
    {
        this.setState( { searchedUser } );
    }


    handleAddMember = ( userID ) =>
    {
        const { board, members, addMember } = this.props;

        addMember( board.data.id, userID )
            .then( res => console.log( 'Added user to board', res ) )
            .then( members.refetch )
            .catch( err => console.log( 'Failed adding user to board', err ) );
    }


    handleRemoveMember = ( userID ) =>
    {
        const { board, members, removeMember } = this.props;

        removeMember( board.data.id, userID )
            .then( res => console.log( 'Removed user from board', res ) )
            .then( members.refetch )
            .catch( err => console.log( 'Failed removing user from board', err ) );
    }


    render()
    {
        const { user, board, members } = this.props;

        if ( !user || !board.data )
        {
            return <Redirect to="/" />;
        }

        return (

            <BoardMembers
                board={ board.data }
                members={ members.data }
                searchedUser={ this.state.searchedUser }
                onSearchUser={ this.handleSearchUser }
                onAddMember={ this.handleAddMember }
                onRemoveMember={ this.handleRemoveMember } />

        );
    }
}


const connect = compose(
    withUser,
    withBoard,
    withBoardMembers,
    withAddMember,
    withRemoveMember,
    withLoader( p => p.loadingUser || p.members.loading || p.board.loading )
);

export default connect( ShowBoard );
