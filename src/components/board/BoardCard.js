import React      from 'react';
import styled     from 'styled-components';
import { Link }   from 'react-router-dom';
import * as theme from '../../style/theme';
import Box        from '../utilities/Box';


const BoardCardBox = Box.withComponent( 'article' ).extend`

    margin-bottom: 25px;

`

const Header = Box.withComponent( 'header' );


const TitleLink = styled( Link )`

    margin-right: 7px;

    font-family: ${ theme.titleFont };
    font-size: 1.2em;
    font-weight: bold;
    text-decoration: none;

    &:hover
    {
        text-decoration: underline;
    }

`;


const Description = styled.p`

    margin: 0;
    margin-top: 5px;

    font-size: 0.9em;

`;


export default function BoardCard( { id, title, description } )
{
    return (

        <BoardCardBox column>

            <Header column>
                <TitleLink to={ `/boards/${ id }` }>{ title }</TitleLink>
            </Header>

            <Description>{ description }</Description>

        </BoardCardBox>

    );
}

