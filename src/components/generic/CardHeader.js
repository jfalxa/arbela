import React  from 'react';
import styled from 'styled-components';


const Header = styled.header`

    display: inline;

`;


function CardHeader( { title, url, target, children } )
{
    return (

        <Header row>
            { children }
        </Header>

    );
}


export default CardHeader;
