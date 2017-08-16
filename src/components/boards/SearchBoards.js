import React             from 'react';
import pick              from 'lodash/pick';
import { compose }       from 'react-apollo';
import BoardList         from './BoardList';
import withUser          from '../auth/withUser';
import withLoader        from '../generic/withLoader';
import withSearchBoards  from './withSearchBoards';
import withDebounceProps from '../generic/withDebounceProps';


function SearchBoards( { boards } )
{
    return <BoardList boards={ boards.data } />;
}


const connect = compose(
    withUser,
    withDebounceProps( props => pick( props, 'search' ) ),
    withSearchBoards,
    withLoader( p => p.boards.loading )
);


export default connect( SearchBoards );
