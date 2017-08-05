import React         from 'react';
import LinkList      from './LinkList';
import withUserLinks from './withUserLinks';


function UserLinks( { loadingLinks, user, links } )
{
    return (

        <section>

            <h2>{ user }'s links</h2>

            { links && <LinkList items={ links } /> }
            { loadingLinks && <p>Loading...</p> }

        </section>

    );
}


export default withUserLinks( UserLinks );
