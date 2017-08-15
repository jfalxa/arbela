import pick              from 'lodash/pick';
import { compose }       from 'react-apollo';
import BoardList         from './BoardList';
import withUser          from '../auth/withUser';
import withLoader        from '../generic/withLoader';
import withSearchBoards  from './withSearchBoards';
import withDebounceProps from '../generic/withDebounceProps';


const connect = compose(
    withUser,
    withDebounceProps( props => pick( props, 'search' ) ),
    withSearchBoards,
    withLoader( props => props.loadingBoards )
);


export default connect( BoardList );
