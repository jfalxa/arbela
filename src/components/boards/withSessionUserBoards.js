import { gql, graphql } from 'react-apollo';
import get              from 'lodash/get';
import { boardData }    from './withBoard';


export const userBoards = gql`

    query
    {
        user
        {
            id

            boards( orderBy: createdAt_DESC )
            {
                ...BoardData
            }

            joinedBoards( orderBy: createdAt_DESC )
            {
                ...BoardData
            }
        }
    }

    ${ boardData }

`;


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

