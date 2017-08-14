import pick              from 'lodash/pick';
import { compose }       from 'react-apollo';
import BoardList         from './BoardList';
import withLoader        from '../generic/withLoader';
import withSearchBoards  from './withSearchBoards';
import withDebounceProps from '../generic/withDebounceProps';


const connect = compose(
    withDebounceProps( props => pick( props, 'search' ) ),
    withSearchBoards,
    withLoader( props => props.loadingBoards )
);


export default connect( BoardList );
