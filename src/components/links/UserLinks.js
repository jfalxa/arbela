import React         from 'react';
import List          from '../generic/List';
import LinkCard      from './LinkCard';
import withUserLinks from './withUserLinks';


const LinkList = List( LinkCard );


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
