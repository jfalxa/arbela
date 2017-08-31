import React    from 'react';
import styled   from 'styled-components';
import { Link } from 'react-router-dom';


const Trail = styled( Link )`

    margin-left: 5px;
    font-weight: bold;
    text-decoration: none;

`;


function LinkTrail( { trail } )
{
    return (

        <Trail
            title={ `go to ${ trail.board.title }` }
            to={ `/${ trail.board.owner.name }/${ trail.board.slug }#${ trail.id }` }>
            ➚
        </Trail>

    );
}


export default LinkTrail;
