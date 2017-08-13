import React        from 'react';
import Page         from '../generic/Page';
import SearchBoards from './SearchBoards';
import withSearch   from '../generic/withSearch';


function ShowBoardSearch( { search, onSearch } )
{
    return (

        <Page title="Boards">

            <input name="board-search" placeholder="Search..." value={ search } onChange={ onSearch } />

            <SearchBoards search={ search } />

        </Page>

    );
}


export default withSearch( ShowBoardSearch );
