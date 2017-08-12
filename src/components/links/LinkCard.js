import React    from 'react';
import { Link } from 'react-router-dom';
import Box      from '../generic/Box';
import LinkVote from './LinkVote';


const Li = Box.withComponent( 'li' );


function LinkCard( { id, title, url, description, score, author, board, onVote } )
{
    return (

        <Li>

            <LinkVote
                score={ score }
                onVote={ onVote } />

            <Box flex column>

                <h4><Link to={ url } target="blank">{ title }</Link></h4>

                <Box>
                    <p>by <Link to={ `/users/${ author.name }` }>{ author.name }</Link></p>
                    <p>on <Link to={ `/boards/${ board.slug }` }>{ board.title }</Link></p>
                </Box>

                <p>{ description }</p>

            </Box>

            <Box column justify="center" align="center">
                <Link to={ `/links/${ id }/edit` }>(edit)</Link>
                <Link to={ `/links/${ id }/share` }>(share)</Link>
            </Box>

        </Li>

    );
}


export default LinkCard;
