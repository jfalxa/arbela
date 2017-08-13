import React             from 'react';
import pick              from 'lodash/pick';
import LinkList          from './LinkList';
import withSearchLinks   from './withSearchLinks';
import withDebounceProps from '../generic/withDebounceProps';


function SearchLinks( { links, loadingLinks } )
{
    return loadingLinks
        ? <p>Loading...</p>
        : <LinkList links={ links } />;
}


// debounce the passing of the search prop so that we don't spam the server with queries
const pickProps = props => pick( props, 'search' );

export default withDebounceProps( pickProps )( withSearchLinks( SearchLinks ) );
