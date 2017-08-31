import React         from 'react';
import { Link }      from 'react-router-dom';
import { hasAccess } from '../../utils/boardAccess';
import Page          from '../generic/Page';
import PageInfo      from '../generic/PageInfo';
import Box           from '../generic/Box';
import SearchLinks   from '../links/SearchLinks';


const Aside = Box.withComponent( 'aside' ).extend`width: 570px`;


function Board( { search, board, access, onVote, onSearch } )
{
    const { title, slug, description, owner } = board;

    return (

        <Page title={ title }>

            <PageInfo>
                { description }
                { access.isOwner && <Link to={ `/${ owner.name }/${ slug }/edit` }>(edit)</Link> }
            </PageInfo>

            <Aside justify="space-between">
                <input placeholder="Search..." value={ search } onChange={ onSearch } />
                { hasAccess( access ) && <Link to={ `/${ owner.name }/${ slug }/new-link` }>Post link to { title }</Link> }
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

