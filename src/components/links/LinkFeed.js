import React    from 'react';
import Page     from '../generic/Page';
import LinkList from './LinkList';


function LinkFeed( { links, onVote } )
{
    return (

        <Page title="Link feed">

            <LinkList
                links={ links }
                onVote={ onVote } />

        </Page>

    );
}


export default LinkFeed;

