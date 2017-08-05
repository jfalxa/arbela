import React        from 'react';
import LinkList     from './LinkList';
import withAllLinks from './withAllLinks';


function FeedLinks( { loadingLinks, links } )
{
    return (

        <section>

            <h2>All links</h2>

            { links && <LinkList items={ links } /> }
            { loadingLinks && <p>Loading...</p> }

        </section>

    );
}


export default withAllLinks( FeedLinks );
