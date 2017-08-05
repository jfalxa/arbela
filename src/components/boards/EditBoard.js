import React           from 'react';
import BoardEditor     from './BoardEditor';
import withUser        from '../auth/withUser';
import withBoard       from './withBoard';
import withUpdateBoard from './withUpdateBoard';
import withDeleteBoard from './withDeleteBoard';


class EditBoard extends React.Component
{
    handleSubmit = ( boardUpdate ) =>
    {
        const { board, updateBoard, history } = this.props;

        updateBoard( { id: board.id, ...boardUpdate } )
            .then( res => console.log( 'Board updated', res ) )
            .then( () => history.goBack() )
            .catch( err => console.log( 'Failed updating board', err ) );
    }


    handleDelete = ( e ) =>
    {
        const { board, deleteBoard, history } = this.props;

        deleteBoard( board.id )
            .then( res => console.log( 'Board deleted', res ) )
            .then( () => history.goBack() )
            .catch( err => console.log( 'Failed deleting board', err ) );
    }


    render()
    {
        const { board, loadingBoard, loadingUser } = this.props;

        return (

            <BoardEditor
                board={ board }
                loadingBoard={ loadingBoard }
                loadingUser={ loadingUser }
                onSubmit={ this.handleSubmit }
                onDelete={ this.handleDelete } />

        );
    }
}


export default withUser( withBoard( withUpdateBoard( withDeleteBoard( EditBoard ) ) ) );
