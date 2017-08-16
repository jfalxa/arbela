import React           from 'react';
import { compose }     from 'react-apollo';
import { Redirect }    from 'react-router-dom';
import BoardEditor     from './BoardEditor';
import withUser        from '../auth/withUser';
import withLoader      from '../generic/withLoader';
import withBoard       from './withBoard';
import withUpdateBoard from './withUpdateBoard';
import withDeleteBoard from './withDeleteBoard';


class EditBoard extends React.Component
{
    handleSubmit = ( boardUpdate ) =>
    {
        const { board, updateBoard, history } = this.props;

        updateBoard( { id: board.data.id, ...boardUpdate } )
            .then( res => console.log( 'Board updated', res ) )
            .then( () => history.goBack() )
            .catch( err => console.log( 'Failed updating board', err ) );
    }


    handleDelete = ( e ) =>
    {
        const { board, deleteBoard, history } = this.props;

        deleteBoard( board.data.id )
            .then( res => console.log( 'Board deleted', res ) )
            .then( () => history.goBack() )
            .catch( err => console.log( 'Failed deleting board', err ) );
    }


    render()
    {
        const { board, user } = this.props;

        if ( !user.data || !board.data )
        {
            return <Redirect to="/" />;
        }

        return (

            <BoardEditor
                board={ board.data }
                onSubmit={ this.handleSubmit }
                onDelete={ this.handleDelete } />

        );
    }
}


const connect = compose(
    withUser,
    withBoard,
    withUpdateBoard,
    withDeleteBoard,
    withLoader( p => p.user.loading || p.board.loading )
);

export default connect( EditBoard );
