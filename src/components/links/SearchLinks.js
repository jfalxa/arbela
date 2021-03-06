import pick              from 'lodash/pick';
import { compose }       from 'react-apollo';
import LinkListContainer from './LinkListContainer';
import withUser          from '../auth/withUser';
import withLoader        from '../generic/withLoader';
import withSearchLinks   from './withSearchLinks';
import withDebounceProps from '../generic/withDebounceProps';


const connect = compose(
    withUser,
    withDebounceProps( p => pick( p, 'search' ) ),
    withSearchLinks,
    withLoader( p => p.user.loading || p.links.loading )
);


export default connect( LinkListContainer );
