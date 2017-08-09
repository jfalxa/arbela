import { gql, graphql } from 'react-apollo';


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

    const props =
    {
        loadingBoards : data.loading,
        ownedBoards   : data.user.boards,
        joinedBoards  : data.user.joinedBoards
    };

    return props;
}


function mapOptions( { match } )
{
    return { variables: { link: match.params.id }, fetchPolicy: 'cache-and-network' };
}


export default graphql( userBoards, { props: mapProps, options: mapOptions } );

