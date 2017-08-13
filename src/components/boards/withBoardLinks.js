import { gql, graphql } from 'react-apollo';
import { linkData  }    from '../links/withLink';


export const boardLinks = gql`

    query boardLinks( $slug: String! )
    {
        Board( slug: $slug )
        {
            id
            title
            slug
            description

            links( orderBy: score_DESC )
            {
                ...LinkData
            }
        }
    }

    ${ linkData }

`;


function mapProps( { data } )
{
    const props =
    {
        board             : data.Board,
        loadingBoard      : data.loading,
        refetchBoardLinks : data.refetch
    };

    return props;
}


function mapOptions( { match } )
{
    return { variables: { slug: match.params.slug }, fetchPolicy: 'cache-and-network' };
}


export default graphql( boardLinks, { props: mapProps, options: mapOptions } );

