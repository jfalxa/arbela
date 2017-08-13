import React     from 'react';
import { Link }  from 'react-router-dom';
import Box       from '../generic/Box';
import Separator from '../generic/Separator';


const Aside = Box.withComponent( 'aside' ).extend`

    margin-left: 10px;
    font-size: 0.8em;

`;


function LinkTrail( { author, trail } )
{
    return (

        <Aside row align="center">
            <Link to={ `/users/${ author.name }` }>@{ author.name }</Link>
            { trail && <Separator /> }
            { trail && <Link to={ `/boards/${ trail.board.slug }#${ trail.id }` }>/{ trail.board.title }</Link> }
        </Aside>

    );
}


export default LinkTrail;
