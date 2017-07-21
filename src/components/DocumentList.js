import React from 'react';
import { gql, graphql } from 'react-apollo';



function Document( { id, title, url, description } )
{
    return (

        <div>
            <a href={ url }>{ title }</a>
            <p>{ description }</p>
        </div>

    );
}


function DocumentList( { data: { loading, allDocuments } } )
{
    if ( loading )
    {
        return <p>Loading...</p>;
    }

    return (

        <section>
            { allDocuments.map( document => <Document { ...document } /> ) }
        </section>

    );
}


const allDocuments = gql`query allDocuments
{
    allDocuments(orderBy: createdAt_DESC)
    {
        id
        title
        url
        description
    }
}`;


export default graphql( allDocuments )( DocumentList );
