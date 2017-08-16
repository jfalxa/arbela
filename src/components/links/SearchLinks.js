import React             from 'react';
import pick              from 'lodash/pick';
import { compose }       from 'react-apollo';
import LinkList          from './LinkList';
import withUser          from '../auth/withUser';
import withLoader        from '../generic/withLoader';
import withSearchLinks   from './withSearchLinks';
import withDebounceProps from '../generic/withDebounceProps';


function SearchLinks( { links, access, onVote } )
{
    return (

        <LinkList
            links={ links.data }
            access={ access }
            onVote={ ( link, vote ) => onVote( link, vote, links.refetch ) } />

    );
}


const connect = compose(
    withUser,
    withDebounceProps( p => pick( p, 'search' ) ),
    withSearchLinks,
    withLoader( p => p.user.loading || p.links.loading )
);


export default connect( SearchLinks );
