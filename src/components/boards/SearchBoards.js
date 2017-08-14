import React             from 'react';
import pick              from 'lodash/pick';
import Loader            from '../generic/Loader';
import BoardList         from './BoardList';
import withSearchBoards  from './withSearchBoards';
import withDebounceProps from '../generic/withDebounceProps';


function SearchBoards( { boards, loadingBoards } )
{
    return (

        <Loader loading={ loadingBoards }>
            <BoardList boards={ boards } />
        </Loader>

    );
}


// debounce the passing of the search prop so that we don't spam the server with queries
const pickProps = props => pick( props, 'search' );

export default withDebounceProps( pickProps )( withSearchBoards( SearchBoards ) );
