import React           from 'react';
import { Link }        from 'react-router-dom';
import { hasAccess }   from '../../utils/boardAccess';
import Page            from '../generic/Page';
import PageInfo        from '../generic/PageInfo';
import Box             from '../generic/Box';
import SearchLinks     from '../links/SearchLinks';
import BoardMemberMenu from './BoardMemberMenu';


const Aside = Box.withComponent( 'aside' ).extend`width: 570px`;


function Board( { search, board, access, onVote, onSearch, onJoinBoard, onLeaveBoard } )
{
    const { title, slug, description, owner, closed, members } = board;

    return (

        <Page title={ title }>

            <PageInfo>
                { description }
                { access.isOwner && <Link to={ `/boards/${ slug }/edit` }>(edit)</Link> }
            </PageInfo>

            <BoardMemberMenu
                slug={ slug }
                closed={ closed }
                access={ access }
                owner={ owner }
                members={ members.count }
                onJoinBoard={ onJoinBoard }
                onLeaveBoard={ onLeaveBoard } />

            <Aside justify="space-between">
                <input placeholder="Search..." value={ search } onChange={ onSearch } />
                { hasAccess( access ) && <Link to={ `/boards/${ slug }/new-link` }>Post link to { title }</Link> }
            </Aside>

            <SearchLinks
                search={ search }
                board={ board }
                access={ access }
                onVote={ onVote } />

        </Page>

    );
}


export default Board;

