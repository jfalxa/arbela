import React               from 'react';
import LinkCreator         from './LinkCreator';
import withUser            from '../auth/withUser';
import withCreateLink      from './withCreateLink';
import withAvailableBoards from './withAvailableBoards';


class PostLink extends React.Component
{
    state =
    {
        checked : []
    }


    handleCheck = ( checked ) =>
    {
        this.setState( { checked } );
    }


    handleSubmit = ( link ) =>
    {
        if ( this.state.checked.length === 0 )
        {
            return console.log( "Can't create link, no board selected" );
        }

        const { checked }                   = this.state;
        const { user, createLink, history } = this.props;

        const boardLinks = checked.map( boardID => createLink( link, user.id, boardID ) );

        Promise.all( boardLinks )
            .then( res => console.log( 'Links created', res ) )
            .then( history.goBack )
            .catch( err => console.log( 'Failed creating link', err ) );
    }


    render()
    {
        const { boards, loadingUser, loadingBoards } = this.props;

        return (

            <LinkCreator
                boards={ boards }
                checked={ this.state.checked }
                loadingUser={ loadingUser }
                loadingBoards={ loadingBoards }
                onCheck={ this.handleCheck }
                onSubmit={ this.handleSubmit } />

        );
    }
}


export default withUser( withAvailableBoards( withCreateLink( PostLink ) ) );
