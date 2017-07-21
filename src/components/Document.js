import React              from 'react';
import withDeleteDocument from '../graphcool/deleteDocument';


function Document( { id, title, url, description, deleteDocument } )
{
    return (

        <article>
            <a href={ url }>{ title }</a>
            <p>{ description }</p>
            <button onClick={ () => deleteDocument( id ) }>X</button>
        </article>

    );
}


export default withDeleteDocument( Document );
