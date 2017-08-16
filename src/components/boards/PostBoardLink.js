import React            from 'react';
import { compose }      from 'react-apollo';
import { Redirect }     from 'react-router-dom';
import BoardLinkCreator from './BoardLinkCreator';
import withUser         from '../auth/withUser';
import withLoader       from '../generic/withLoader';
import withBoard        from './withBoard';
import withCreateLink   from '../links/withCreateLink';


class PostBoardLink extends React.Component
{
    handleSubmit = ( link ) =>
    {
        const { board, user, createLink, history } = this.props;

        createLink( link, user.data.id, board.data.id )
            .then( res => console.log( 'Link created', res ) )
            .then( () => history.push( `/boards/${ board.data.slug }` ) )
            .catch( err => console.log( 'Failed creating link', err ) );
    }


    render()
    {
        const { user, board } = this.props;

        if ( !user.data || !board.data )
        {
            return <Redirect to="/" />;
        }

        return (

            <BoardLinkCreator
                board={ board.data }
                onSubmit={ this.handleSubmit } />

        );
    }
}


const connect = compose(
    withUser,
    withBoard,
    withCreateLink,
    withLoader( p => p.user.loading || p.board.loading )
);


export default connect( PostBoardLink );
