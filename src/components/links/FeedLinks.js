import React        from 'react';
import List         from '../generic/List';
import LinkCard     from './LinkCard';
import withAllLinks from './allLinks';


class FeedLinks extends React.Component
{
    render()
    {
        if ( this.props.loading )
        {
            return <p>Loading...</p>;
        }

        return (

            <section>

                <h2>All links</h2>

                <List
                    data={ this.props.links }
                    renderItem={ LinkCard } />

            </section>

        );
    }
}


export default withAllLinks( FeedLinks );
