import React        from 'react';
import List         from '../generic/List';
import LinkCard     from './LinkCard';
import withAllLinks from './withAllLinks';


const LinkList = List( LinkCard );


class FeedLinks extends React.Component
{
    render()
    {
        const { loading, links } = this.props;

        return (

            <section>

                <h2>All links</h2>

                { links && <LinkList items={ links } /> }
                { loading && <p>Loading...</p> }

            </section>

        );
    }
}


export default withAllLinks( FeedLinks );
