import { gql, graphql } from 'react-apollo';
import unionBy          from 'lodash/unionBy';


export const availableBoards = gql`query availableBoards( $link: ID! )
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
    if ( data.loading || !data.user )
    {
        return { loadingBoards: true };
    }

    const props =
    {
        loadingBoards : data.loading,
        boards        : unionBy( data.user.boards, data.user.joinedBoards, 'id' )
    };

    return props;
}


function mapOptions( { match } )
{
    return { variables: { link: match.params.id }, fetchPolicy: 'cache-and-network' };
}


export default graphql( availableBoards, { props: mapProps, options: mapOptions } );

