import { gql, graphql } from 'react-apollo';


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
    }
}`;


function mapProps( { data } )
{
    if ( data.loading && !data.user )
    {
        return { availableBoards: { loading: true } };
    }

    const availableBoards =
    {
        data    : data.user.boards,
        loading : data.loading
    };

    return { availableBoards };
}


function mapOptions()
{
    return { fetchPolicy: 'cache-and-network' };
}


export default graphql( availableBoards, { props: mapProps, options: mapOptions } );

