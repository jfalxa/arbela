import React        from 'react';
import Page         from '../generic/Page';
import SearchBoards from './SearchBoards';


function BoardSearch( { search, onSearch } )
{
    return (

        <Page>

            <h2>Boards</h2>

            <label htmlFor="board-search">Search</label>
            <input id="board-search" name="board-search" value={ search } onChange={ onSearch } />

            <SearchBoards search={ search } />

        </Page>

    );
}


export default BoardSearch;
