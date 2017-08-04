import React              from 'react';
import BoardFormContainer from './BoardFormContainer';
import withBoard          from './withBoard';
import withUpdateBoard    from './withUpdateBoard';
import withDeleteBoard    from './withDeleteBoard';


class EditBoard extends React.Component
{
    handleSubmit = ( boardUpdate ) =>
    {
        const { board, updateBoard, history } = this.props;

        updateBoard( { id: board.id, ...boardUpdate } )
            .then( res => console.log( 'Board updated', res ) )
            .then( () => history.push( '/' ) )
            .catch( err => console.log( 'Failed updating board', err ) );
    }


    handleDelete = ( e ) =>
    {
        const { board, deleteBoard, history } = this.props;

        deleteBoard( board.id )
            .then( res => console.log( 'Board deleted', res ) )
            .then( () => history.push( '/' ) )
            .catch( err => console.log( 'Failed deleting board', err ) );
    }


    render()
    {
        if ( this.props.loadingBoard && !this.props.board )
        {
            return <p>Loading...</p>;
        }

        const { title, description } = this.props.board;

        return (

            <section>

                <h2>Edit board</h2>

                <BoardFormContainer
                    title={ title }
                    description={ description }
                    onSubmit={ this.handleSubmit } />

                <button onClick={ this.handleDelete }>Delete</button>

            </section>

        );
    }
}


export default withBoard( withUpdateBoard( withDeleteBoard( EditBoard ) ) );
