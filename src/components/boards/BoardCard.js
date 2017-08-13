import React      from 'react';
import { Link }   from 'react-router-dom';
import Box        from '../generic/Box';
import Card       from '../generic/Card';
import CardHeader from '../generic/CardHeader';
import CardLinks  from '../generic/CardLinks';
import CardBody   from '../generic/CardBody';


const Li = Box.withComponent( 'li' );


function BoardCard( { slug, title, description, owner } )
{
    return (

        <Li column>

            <Card>

                <CardHeader title={ title } url={ `/boards/${ slug }` }>
                    <Link to={ `/boards/${ slug }/edit` }>(edit)</Link>
                </CardHeader>

                <CardLinks>
                    <Link to={ `/users/${ owner.name }` }>@{ owner.name }</Link>
                </CardLinks>

                <CardBody>{ description || '...' }</CardBody>

            </Card>

        </Li>

    );
}


export default BoardCard;