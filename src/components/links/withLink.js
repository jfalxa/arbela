import { gql, graphql } from 'react-apollo';


export const linkData = gql`

    fragment LinkData on Link
    {
        id
        title
        url
        description
        score
        createdAt

        author
        {
            id
            name
        }

        trail
        {
            id

            board
            {
                id
                title
                slug
            }
        }
    }

`;


export const link = gql`

    query link( $id: ID! )
    {
        Link( id: $id )
        {
            ...LinkData
        }
    }

    ${ linkData }

`;


function mapProps( { data } )
{
    return { loadingLink: data.loading, link: data.Link };
}


function mapOptions( { id, match } )
{
    return { variables: { id: id || match.params.id }, fetchPolicy: 'cache-and-network' };
}


export default graphql( link, { props: mapProps, options: mapOptions } );

