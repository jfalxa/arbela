import React     from 'react';
import Page      from '../generic/Page';
import BoardList from './BoardList';


function UserBoards( { owner, boards } )
{
    return (

        <Page title={ `${ owner.name }'s boards` }>
            <BoardList boards={ boards } />
        </Page>

    );
}


export default UserBoards;
