import React           from 'react';
import { compose }     from 'react-apollo';
import { Redirect }    from 'react-router-dom';
import BoardCreator    from './BoardCreator';
import withUser        from '../auth/withUser';
import withCreateBoard from './withCreateBoard';
import withLoader      from '../generic/withLoader';


class CreateBoard extends React.Component
{
    handleSubmit = ( board ) =>
    {
        const { user, createBoard, history } = this.props;

        createBoard( board, user.id )
            .then( res => history.push( `/boards/${ res.slug }` ) )
            .then( () => console.log( 'Board created' ) )
            .catch( err => console.log( 'Failed creating board', err ) );
    }


    render()
    {
        if ( !this.props.user )
        {
            return <Redirect to="/" />;
        }

        return (

            <BoardCreator
                onSubmit={ this.handleSubmit } />
        );
    }
}


const connect = compose(
    withUser,
    withCreateBoard,
    withLoader( props => props.loadingUser )
);

export default connect( CreateBoard );
