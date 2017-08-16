import React             from 'react';
import { compose }       from 'react-apollo';
import Page              from '../generic/Page';
import LinkListContainer from './LinkListContainer';
import withUser          from '../auth/withUser';
import withLoader        from '../generic/withLoader';
import withFeedLinks     from './withFeedLinks';


function FeedLinks( { links, onVote } )
{
    return (

        <Page title="Link feed">

            <LinkListContainer
                links={ links }
                onVote={ onVote } />

        </Page>

    );
}


const connect = compose(
    withUser,
    withFeedLinks,
    withLoader( p => p.user.loading || p.links.loading )
);


export default connect( FeedLinks );
