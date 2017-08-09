import { gql, graphql } from 'react-apollo';


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
    if ( data.loading || !data.user )
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

