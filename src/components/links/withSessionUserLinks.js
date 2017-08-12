import { gql, graphql } from 'react-apollo';
import get              from 'lodash/get';


export const sessionUserLinks = gql`query sessionUserLinks
{
    user
    {
        id

        links( orderBy: createdAt_DESC )
        {
            id
            title
            url
            description

            author
            {
                id
                name
            }

            board
            {
                id
                title
                slug
            }
        }
    }
}`;


function mapProps( { data } )
{
    return { loadingLinks : data.loading, links: get( data, 'user.links' ) };
}


export default graphql( sessionUserLinks, { props: mapProps, options: { fetchPolicy: 'cache-and-network' } } );

