import React    from 'react';
import { Link } from 'react-router-dom';
import Box      from '../generic/Box';


const Li = Box.withComponent( 'li' );


function BoardCard( { slug, title, description } )
{
    return (

        <Li column>

            <Box justify="space-between" align="center">
                <h4><Link to={ `/boards/${ slug }` }>{ title }</Link></h4>
                <Link to={ `/boards/${ slug }/edit` }>(edit)</Link>
            </Box>

            <p>{ description }</p>

        </Li>

    );
}


export default BoardCard;
