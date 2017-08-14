import React               from 'react';
import { compose }         from 'react-apollo';
import { Redirect }        from 'react-router-dom';
import LinkCreator         from './LinkCreator';
import withLoader          from '../generic/withLoader';
import withUser            from '../auth/withUser';
import withCreateLink      from './withCreateLink';
import withAvailableBoards from './withAvailableBoards';


class PostLink extends React.Component
{
    handleSubmit = ( link, boards ) =>
    {
        const { user, createLink, history } = this.props;

        const boardLinks = boards.map( boardID => createLink( link, user.id, boardID ) );

        Promise.all( boardLinks )
            .then( res => console.log( 'Links created', res ) )
            .then( history.goBack )
            .catch( err => console.log( 'Failed creating link', err ) );
    }


    render()
    {
        if ( !this.props.user )
        {
            return <Redirect to="/" />;
        }

        return (

            <LinkCreator
                boards={ this.props.boards }
                onSubmit={ this.handleSubmit } />

        );
    }
}


const connect = compose(
    withUser,
    withAvailableBoards,
    withCreateLink,
    withLoader( p => p.loadingUser || p.loadingBoards )
);


export default connect( PostLink );
