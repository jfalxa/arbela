import React    from 'react';
import styled   from 'styled-components';
import { Link } from 'react-router-dom';
import Box      from './Box';


const Header = Box.withComponent( 'header' );

const H4 = styled.h4`

    margin: 0;
    font-size: 1.1em;

`;


function CardHeader( { title, url, target, children } )
{
    return (

        <Header row justify="space-between" align="center">
            <H4><Link to={ url } target={ target }>{ title }</Link></H4>
            { children }
        </Header>

    );
}


export default CardHeader;
