import { gql, graphql } from 'react-apollo';
import get              from 'lodash/get';
import unionBy          from 'lodash/unionBy';


export const availableBoards = gql`query availableBoards
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
    if ( data.loading && !data.user )
    {
        return { availableBoards: { loading: true } };
    }

    const joinedBoards = get( data, 'user.boards' );
    const ownedBoards  = get( data, 'user.joinedBoards' );

    const availableBoards =
    {
        data    : unionBy( ownedBoards, joinedBoards, 'id' ),
        loading : data.loading
    };

    return { availableBoards };
}


function mapOptions()
{
    return { fetchPolicy: 'cache-and-network' };
}


export default graphql( availableBoards, { props: mapProps, options: mapOptions } );

