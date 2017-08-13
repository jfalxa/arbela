import React     from 'react';
import { Link }  from 'react-router-dom';
import CardAside from '../generic/CardAside';
import Separator from '../generic/Separator';



function LinkTrail( { author, trail } )
{
    return (

        <CardAside>
            <Link to={ `/users/${ author.name }` }>@{ author.name }</Link>
            { trail && <Separator /> }
            { trail && <Link to={ `/boards/${ trail.board.slug }#${ trail.id }` }>/{ trail.board.title }</Link> }
        </CardAside>

    );
}


export default LinkTrail;
