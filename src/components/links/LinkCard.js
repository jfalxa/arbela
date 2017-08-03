import React    from 'react';
import { Link } from 'react-router-dom';


function LinkCard( { title, url, description } )
{
    return (

        <li>
            <h3><Link to={ url } target="blank">{ title }</Link></h3>
            <p>{ description }</p>
        </li>

    );
}


export default LinkCard;
