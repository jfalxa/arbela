import React     from 'react';
import { Link }  from 'react-router-dom';
import CardLinks from '../generic/CardLinks';
import Separator from '../generic/Separator';


function LinkTrail( { author, board, trail } )
{
    // only show trails that lead to public boards
    const hasTrail = trail ? !trail.board.hidden : false;

    return (

        <CardLinks>
            <Link to={ `/users/${ author.name }` }>@{ author.name }</Link>
            <Separator />
            <Link to={ `/boards/${ board.slug }` }>/{ board.title }</Link>
            { hasTrail && <Separator children="from" /> }
            { hasTrail && <Link to={ `/boards/${ trail.board.slug }` }>/{ trail.board.title }</Link> }
        </CardLinks>

    );
}


export default LinkTrail;
