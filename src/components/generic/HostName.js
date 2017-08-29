import React       from 'react';
import styled      from 'styled-components';
import getHostName from '../../utils/getHostName';


const Span = styled.span`

    margin-left: 5px;
    font-size: 0.7em;
    color: #444;

`;


function HostName( { url } )
{
    return <Span>({ getHostName( url ) })</Span>;
}



export default HostName;
