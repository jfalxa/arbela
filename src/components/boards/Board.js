import React           from 'react';
import { Link }        from 'react-router-dom';
import Page            from '../generic/Page';
import PageInfo        from '../generic/PageInfo';
import Box             from '../generic/Box';
import SearchLinks     from '../links/SearchLinks';
import BoardMemberMenu from './BoardMemberMenu';


const Aside = Box.withComponent( 'aside' ).extend`width: 570px`;


function Board( { search, board, onVote, onSearch, onJoinBoard, onLeaveBoard } )
{
    const { title, slug, description } = board;

    return (

        <Page title={ title }>

            <PageInfo>{ description }</PageInfo>

            <BoardMemberMenu
                board={ slug }
                onJoinBoard={ onJoinBoard }
                onLeaveBoard={ onLeaveBoard } />

            <Aside justify="space-between">
                <input placeholder="Search..." value={ search } onChange={ onSearch } />
                <Link to={ `/boards/${ slug }/new-link` }>Post link to { title }</Link>
            </Aside>

            <SearchLinks
                search={ search }
                board={ board }
                onVote={ onVote } />

        </Page>

    );
}


export default Board;

