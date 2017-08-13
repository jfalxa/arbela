import React       from 'react';
import BoardSearch from './BoardSearch';


class ShowAllBoards extends React.Component
{
    state =
    {
        search : ''
    }


    handleSearch = ( e ) =>
    {
        this.setState( { search: e.target.value } )
    }


    render()
    {
        return (

            <BoardSearch
                search={ this.state.search }
                onSearch={ this.handleSearch } />

        );
    }
}


export default ShowAllBoards;
