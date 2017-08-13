import React    from 'react';
import styled   from 'styled-components';
import { Link } from 'react-router-dom';
import Box      from './Box';


const Header = Box.withComponent( 'header' );

const H1 = styled.h1`

    margin: 0;

`;


function CardHeader( { title, url, target, children } )
{
    return (

        <Header row justify="space-between" align="center">
            <H1><Link to={ url } target={ target }>{ title }</Link></H1>
            { children }
        </Header>

    );
}


export default CardHeader;
