import React           from 'react';
import BoardCreator    from './BoardCreator';
import withUser        from '../auth/withUser';
import withCreateBoard from './withCreateBoard';


class CreateBoard extends React.Component
{
    handleSubmit = ( board ) =>
    {
        const { createBoard, history } = this.props;

        createBoard( board )
            .then( res => console.log( 'Board created', res ) )
            .then( () => history.goBack() )
            .catch( err => console.log( 'Failed creating board', err ) );
    }


    render()
    {
        return (

            <BoardCreator
                loadingUser={ this.props.loadingUser }
                onSubmit={ this.handleSubmit } />
        );
    }
}


export default withUser( withCreateBoard( CreateBoard ) );
