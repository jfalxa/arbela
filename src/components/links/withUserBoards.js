import { gql, graphql } from 'react-apollo';
import unionBy          from 'lodash/unionBy';


export const userBoards = gql`query userBoards( $link: ID! )
{
    user
    {
        id

        boards(
            orderBy: createdAt_DESC,
            filter:
            {
                links_none:
                {
                    link:
                    {
                        id: $link
                    }
                }
            }
        )
        {
            id
            title
            description
        }

        joinedBoards(
            orderBy: createdAt_DESC,
            filter:
            {
                links_none:
                {
                    link:
                    {
                        id: $link
                    }
                }
            }
        )
        {
            id
            title
            description
        }
    }
}`;



function mapProps( { data } )
{
    if ( data.loading )
    {
        return { loadingBoards: true };
    }

    const ownedBoards  = data.user.boards;
    const joinedBoards = data.user.joinedBoards;
    const boards       = unionBy( ownedBoards, joinedBoards, 'id' );

    return { loadingBoards: data.loading, boards };
}


function mapOptions( { match } )
{
    return { variables: { link: match.params.id }, fetchPolicy: 'cache-and-network' };
}


export default graphql( userBoards, { props: mapProps, options: mapOptions } );

