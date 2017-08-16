import React          from 'react';
import { compose }    from 'react-apollo';
import UserBoards     from './UserBoards';
import withUser       from '../auth/withUser';
import withLoader     from '../generic/withLoader';
import withUserBoards from './withUserBoards';


function ShowUserBoards( { userBoards } )
{
    const { owner, joinedBoards, ownedBoards } = userBoards.data;

    return (

        <UserBoards
            owner={ owner }
            joinedBoards={ joinedBoards }
            ownedBoards={ ownedBoards } />

    );
}


const connect = compose(
    withUser,
    withUserBoards,
    withLoader( p => p.user.loading || p.userBoards.loading )
);


export default connect( ShowUserBoards );
