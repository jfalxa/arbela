import React         from 'react';
import LinkList      from './LinkList';
import withUserLinks from './withUserLinks';


class UserLinks extends React.Component
{
    render()
    {
        const { loadingLinks, user, links } = this.props;

        return (

            <section>

                <h2>{ user }'s links</h2>

                { links && <LinkList items={ links } /> }
                { loadingLinks && <p>Loading...</p> }

            </section>

        );
    }
}


export default withUserLinks( UserLinks );
