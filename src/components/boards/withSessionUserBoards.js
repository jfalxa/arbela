import { gql, graphql } from 'react-apollo';
import get              from 'lodash/get';


export const userBoards = gql`query
{
    user
    {
        id

        boards( orderBy: createdAt_DESC )
        {
            id
            title
            description
        }

        joinedBoards( orderBy: createdAt_DESC )
        {
            id
            title
            description
        }
    }
}`;



function mapProps( { data } )
{
    const props =
    {
        loadingBoards : data.loading,
        ownedBoards   : get( data, 'user.boards' ),
        joinedBoards  : get( data, 'user.joinedBoards' )
    };

    return props;
}


function mapOptions( { match } )
{
    return { variables: { link: match.params.id }, fetchPolicy: 'cache-and-network' };
}


export default graphql( userBoards, { props: mapProps, options: mapOptions } );

