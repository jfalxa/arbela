import React       from 'react';
import { Link }    from 'react-router-dom';
import Page        from '../generic/Page';
import Box         from '../generic/Box';
import SearchLinks from '../links/SearchLinks';


// <Box row>
//     <button onClick={ onJoinBoard }>Join board</button>
//     <button onClick={ onLeaveBoard }>Leave board</button>
//     <Link to={ `/boards/${ slug }/members` }>(members)</Link>
// </Box>

function BoardLinks( { search, board, loadingBoard, onVote, onSearch, onJoinBoard, onLeaveBoard } )
{
    if ( loadingBoard && !board )
    {
        return <p>Loading...</p>;
    }

    const { title, slug, description } = board;

    return (

        <Page>

            <h2>{ title }</h2>

            <p>{ description }</p>

            <Box alignSelf="stretch" justify="space-around">
                <input placeholder="Search..." value={ search } onChange={ onSearch } />
                <Link to={ `/boards/${ slug }/new-link` }>Post link to { title }</Link>
            </Box>

            <SearchLinks
                search={ search }
                board={ board }
                onVote={ onVote } />

        </Page>

    );
}


export default BoardLinks;

