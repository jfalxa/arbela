import React         from 'react';
import LinkList      from './LinkList';
import withUserLinks from './withUserLinks';


class UserLinks extends React.Component
{
    render()
    {
        const { loadingLinks, links } = this.props;

        return (

            <section>

                { links && <LinkList items={ links } /> }
                { loadingLinks && <p>Loading...</p> }

            </section>

        );
    }
}


export default withUserLinks( UserLinks );
