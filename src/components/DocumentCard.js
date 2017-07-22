import React    from 'react';
import { Link } from 'react-router-dom';


export default function DocumentCard( { id, title, url, description } )
{
    return (

        <article>

            <header>
                <Link to={ `/edit/${ id }` }>{ title }</Link>
                <Link to={ url }>{ url }</Link>
            </header>

            <p>{ description }</p>

        </article>

    );
}

