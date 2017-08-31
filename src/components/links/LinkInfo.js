import React     from 'react';
import { Link }  from 'react-router-dom';
import getTime   from '../../utils/getTime';
import CardLinks from '../generic/CardLinks';
import Separator from '../generic/Separator';


function LinkInfo( { id, score, date, author, board, trail } )
{
    // only show trails that lead to public boards
    const hasTrail = trail ? !trail.board.hidden : false;

    return (

        <CardLinks>
            <span>{ score } point{ ( Math.abs( score ) === 1 ) ? '' : 's' }</span>
            <Separator />
            <span>{ getTime( date ) }</span>
            <Separator />
            <Link to={ `/${ author.name }` }>@{ author.name }</Link>
            <Separator children="on" />
            <Link to={ `/boards/${ board.slug }#${ id }` }>/{ board.title }</Link>
            { hasTrail && <Separator children="from" /> }
            { hasTrail && <Link to={ `/boards/${ trail.board.slug }#${ trail.id }` }>/{ trail.board.title }</Link> }
        </CardLinks>

    );
}


export default LinkInfo;
