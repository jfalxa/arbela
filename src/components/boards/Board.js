import React         from 'react';
import { Link }      from 'react-router-dom';
import Page          from '../generic/Page';
import Box           from '../generic/Box';
import BoardLinkList from './BoardLinkList';


function BoardLinks( { loadingBoard, board, onVote, onJoinBoard, onLeaveBoard, onDeleteLink } )
{
    if ( loadingBoard && !board )
    {
        return <p>Loading...</p>;
    }

    const { title, slug, description, links } = board;

    return (

        <Page>

            <h2>{ title }</h2>

            <Link to={ `/boards/${ slug }/edit` }>(edit)</Link>

            <p>{ description }</p>

            <Box row>
                <Link to={ `/boards/${ slug }/members` }>Members</Link>
                <button onClick={ onJoinBoard }>Join board</button>
                <button onClick={ onLeaveBoard }>Leave board</button>
            </Box>

            <Link to={ `/boards/${ slug }/new-link` }>Post link to { title }</Link>

            <BoardLinkList
                items={ links }
                onVote={ onVote }
                onDeleteLink={ onDeleteLink } />

        </Page>

    );
}


export default BoardLinks;

