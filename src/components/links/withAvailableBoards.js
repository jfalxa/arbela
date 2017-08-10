import { gql, graphql } from 'react-apollo';
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
    if ( data.loading )
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


function mapOptions()
{
    return { fetchPolicy: 'cache-and-network' };
}


export default graphql( availableBoards, { props: mapProps, options: mapOptions } );

