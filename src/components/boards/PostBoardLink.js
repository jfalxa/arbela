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

        createLink( link, user.id, board.id)
            .then( res => console.log( 'Link created', res ) )
            .then( history.goBack )
            .catch( err => console.log( 'Failed creating link', err ) );
    }


    render()
    {
        if ( !this.props.user || !this.props.board )
        {
            return <Redirect to="/" />;
        }

        return (

            <BoardLinkCreator
                board={ this.props.board }
                onSubmit={ this.handleSubmit } />

        );
    }
}


const connect = compose(
    withUser,
    withBoard,
    withCreateLink,
    withLoader( p => p.loadingUser || p.loadingBoard )
);


export default connect( PostBoardLink );
