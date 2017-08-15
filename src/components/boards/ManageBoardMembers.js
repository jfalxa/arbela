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
        const { board, addMember, refetchBoardMembers } = this.props;

        addMember( board.id, userID )
            .then( res => console.log( 'Added user to board', res ) )
            .then( refetchBoardMembers )
            .catch( err => console.log( 'Failed adding user to board', err ) );
    }


    handleRemoveMember = ( userID ) =>
    {
        const { board, removeMember, refetchBoardMembers } = this.props;

        removeMember( board.id, userID )
            .then( res => console.log( 'Removed user from board', res ) )
            .then( refetchBoardMembers )
            .catch( err => console.log( 'Failed removing user from board', err ) );
    }


    render()
    {
        if ( !this.props.user || !this.props.board )
        {
            return <Redirect to="/" />;
        }

        const { board, owner, members } = this.props;

        return (

            <BoardMembers
                board={ board }
                owner={ owner }
                members={ members }
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
    withLoader( p => p.loadingUser || p.loadingBoard || p.loadingMembers )
);

export default connect( ShowBoard );
