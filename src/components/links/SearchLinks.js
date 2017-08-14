import React             from 'react';
import { compose }       from 'react-apollo';
import pick              from 'lodash/pick';
import LinkList          from './LinkList';
import withLoader        from '../generic/withLoader';
import withSearchLinks   from './withSearchLinks';
import withDebounceProps from '../generic/withDebounceProps';


const connect = compose(
    withDebounceProps( p => pick( p, 'search' ) ),
    withSearchLinks,
    withLoader( p => p.loadingLinks )
);


export default connect( LinkList );
