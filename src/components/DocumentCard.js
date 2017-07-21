import React from 'react';


export default function DocumentCard( { id, title, url, description } )
{
    return (

        <article>

            <header>
                <h3>{ title }</h3>
                <a href={ url }>{ url }</a>
            </header>

            <p>{ description }</p>

        </article>

    );
}

