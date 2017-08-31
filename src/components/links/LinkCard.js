import React       from 'react';
import { Link }    from 'react-router-dom';
import Box         from '../generic/Box';
import Separator   from '../generic/Separator';
import Card        from '../generic/Card';
import CardHeader  from '../generic/CardHeader';
import CardBody    from '../generic/CardBody';
import HostName    from '../generic/HostName';
import LinkVote    from './LinkVote';
import LinkTrail   from './LinkTrail';


const Li = Box.withComponent( 'li' );


function LinkCard( { id, title, url, description, score, author, board, trail, createdAt, access, targeted, onVote } )
{
    return (

        <Li id={ id } align="center">

            <Card targeted={ targeted }>

                <CardHeader>
                    <Link to={ url } target="blank">{ title }</Link>
                    { trail && <LinkTrail trail={ trail } /> }
                    <HostName url={ url } />
                </CardHeader>

                <CardBody align="center">
                    <LinkVote score={ score } locked={ !access.canVote } onVote={ onVote } />
                    <Separator />
                    <span>{ description || title }</span>
                </CardBody>

            </Card>

        </Li>

    );
}


export default LinkCard;

