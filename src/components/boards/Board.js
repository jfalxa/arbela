import React    from 'react';
import { Link } from 'react-router-dom';
import Page     from '../generic/Page';
import Box      from '../generic/Box';
import LinkList from '../links/LinkList';


function BoardLinks( { loadingBoard, board, onVote, onJoinBoard, onLeaveBoard } )
{
    if ( loadingBoard && !board )
    {
        return <p>Loading...</p>;
    }

    const { title, slug, description, links } = board;

    return (

        <Page>

            <Box justify="space-between" align="center">
                <h2>{ title }</h2>
                <Link to={ `/boards/${ slug }/edit` }>(edit)</Link>
            </Box>

            <Box row>
                <button onClick={ onJoinBoard }>Join board</button>
                <button onClick={ onLeaveBoard }>Leave board</button>
                <Link to={ `/boards/${ slug }/members` }>(members)</Link>
            </Box>

            <p>{ description }</p>

            <Link to={ `/boards/${ slug }/new-link` }>Post link to { title }</Link>

            <LinkList
                links={ links }
                onVote={ onVote } />

        </Page>

    );
}


export default BoardLinks;

