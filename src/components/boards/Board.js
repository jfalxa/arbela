import React           from 'react';
import { Link }        from 'react-router-dom';
import Page            from '../generic/Page';
import Box             from '../generic/Box';
import SearchLinks     from '../links/SearchLinks';
import BoardMemberMenu from './BoardMemberMenu';


function Board( { search, board, loadingBoard, onVote, onSearch, onJoinBoard, onLeaveBoard } )
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

            <BoardMemberMenu
                board={ slug }
                onJoinBoard={ onJoinBoard }
                onLeaveBoard={ onLeaveBoard } />

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


export default Board;

