import React            from 'react';
import BoardList        from './BoardList';
import withSearchBoards from './withSearchBoards';


function SearchBoards( { boards, loadingBoards } )
{
    return loadingBoards
        ? <p>Loading...</p>
        : <BoardList boards={ boards } />;
}


export default withSearchBoards( SearchBoards );
