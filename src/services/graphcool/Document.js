import { gql } from 'react-apollo';


export const allDocuments = gql`query allDocuments
{
    allDocuments(orderBy: createdAt_DESC)
    {
        id
        title
        url
        description
    }
}`;



export const addDocument = gql`mutation addDocument( $title: String!, $url: String!, $description: String! )
{
    createDocument( title: $title, url: $url, description: $description )
    {
        id
        title
        url
        description
    }
}`;

