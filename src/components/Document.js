import React from 'react';


export default function Document( { id, title, url, description } )
{
    return (

        <article>
            <a href={ url }>{ title }</a>
            <p>{ description }</p>
        </article>

    );
}

