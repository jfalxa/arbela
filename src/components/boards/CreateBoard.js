import React              from 'react';
import BoardFormContainer from './BoardFormContainer';
import withUser           from '../auth/withUser';
import withCreateBoard    from './withCreateBoard';


class CreateBoard extends React.Component
{
    handleSubmit = ( board ) =>
    {
        const { user, createBoard, history } = this.props;

        createBoard( { ...board, author: user.id } )
            .then( res => console.log( 'Board created', res ) )
            .then( () => history.push( '/' ) )
            .catch( err => console.log( 'Failed creating board', err ) );
    }


    render()
    {
        if ( this.props.loadingUser )
        {
            return <p>Loading...</p>;
        }

        return (

            <section>

                <h2>Create new board</h2>

                <BoardFormContainer
                    onSubmit={ this.handleSubmit } />

            </section>

        );
    }
}


export default withUser( withCreateBoard( CreateBoard ) );
