import React        from 'react';
import Page         from '../generic/Page';
import SearchBoards from './SearchBoards';


function BoardSearch( { search, onSearch } )
{
    return (

        <Page>

            <h2>Boards</h2>

            <input name="board-search" placeholder="Search..." value={ search } onChange={ onSearch } />

            <SearchBoards search={ search } />

        </Page>

    );
}


export default BoardSearch;
