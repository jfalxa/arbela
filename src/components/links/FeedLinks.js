import React        from 'react';
import LinkList     from './LinkList';
import withAllLinks from './withAllLinks';


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
