import React     from 'react';
import { Link }  from 'react-router-dom';
import CardLinks from '../generic/CardLinks';
import Separator from '../generic/Separator';


function LinkTrail( { author, trail } )
{
    return (

        <CardLinks>
            <Link to={ `/users/${ author.name }` }>@{ author.name }</Link>
            { trail && <Separator /> }
            { trail && <Link to={ `/boards/${ trail.board.slug }` }>/{ trail.board.title }</Link> }
        </CardLinks>

    );
}


export default LinkTrail;
