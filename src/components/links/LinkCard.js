import React          from 'react';
import { Link }       from 'react-router-dom';
import { canVote }    from '../../utils/linkAccess';
import Box            from '../generic/Box';
import Card           from '../generic/Card';
import CardHeader     from '../generic/CardHeader';
import CardBody       from '../generic/CardBody';
import CardAside      from '../generic/CardAside';
import HostName       from '../generic/HostName';
import LinkVote       from './LinkVote';
import LinkInfo       from './LinkInfo';
import withAutoScroll from '../generic/withAutoScroll';


const Li = Box.withComponent( 'li' );


function LinkCard( { id, title, url, description, score, author, board, trail, createdAt, access, targeted, onVote } )
{
    return (

        <Li id={ id } align="center">

            <Card targeted={ targeted }>

                <CardHeader>
                    <Link to={ url } target="blank">{ title }</Link>
                    <HostName url={ url } />
                </CardHeader>

                <LinkInfo
                    id={ id }
                    score={ score }
                    date={ createdAt }
                    author={ author }
                    board={ board }
                    trail={ trail } />

                <CardBody>{ description || '...' }</CardBody>

            </Card>

            <CardAside>
                { access.isAuth && <Link to={ `/links/${ id }/share` }>(share)</Link> }
            </CardAside>

        </Li>

    );
}


export default withAutoScroll( LinkCard );
