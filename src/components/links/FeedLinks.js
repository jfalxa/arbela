import React        from 'react';
import List         from '../generic/List';
import LinkCard     from './LinkCard';
import withAllLinks from './withAllLinks';


const LinkList = List( LinkCard );


class FeedLinks extends React.Component
{
    render()
    {
        const { loadingLinks, links } = this.props;

        return (

            <section>

                <h2>All links</h2>

                { links && <LinkList items={ links } /> }
                { loadingLinks && <p>Loading...</p> }

            </section>

        );
    }
}


export default withAllLinks( FeedLinks );
