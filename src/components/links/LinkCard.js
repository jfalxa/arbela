import React          from 'react';
import { Link }       from 'react-router-dom';
import { canVote }    from '../../utils/linkAccess';
import Box            from '../generic/Box';
import Card           from '../generic/Card';
import CardHeader     from '../generic/CardHeader';
import CardBody       from '../generic/CardBody';
import CardAside      from '../generic/CardAside';
import LinkVote       from './LinkVote';
import LinkInfo      from './LinkInfo';
import withAutoScroll from '../generic/withAutoScroll';


const Li = Box.withComponent( 'li' );


function LinkCard( { id, title, url, description, score, author, board, trail, createdAt, access, targeted, onVote } )
{
    return (

        <Li id={ id } align="center">

            <LinkVote
                score={ score }
                locked={ !canVote( access ) }
                onVote={ onVote } />

            <Card targeted={ targeted }>

                <CardHeader title={ title } url={ url } target="blank">
                    { access.isAuthor && <Link to={ `/links/${ id }/edit` }>(edit)</Link> }
                </CardHeader>

                <LinkInfo
                    id={ id }
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
