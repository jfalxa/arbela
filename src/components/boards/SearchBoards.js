import pick              from 'lodash/pick';
import { compose }       from 'react-apollo';
import BoardList         from './BoardList';
import withLoader        from '../generic/withLoader';
import withSearchBoards  from './withSearchBoards';
import withDebounceProps from '../generic/withDebounceProps';


const withSearch = compose(
    withDebounceProps( props => pick( props, 'search' ) ),
    withSearchBoards,
    withLoader( props => props.loadingBoards )
);


export default withSearch( BoardList );
