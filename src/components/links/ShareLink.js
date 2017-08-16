import React               from 'react';
import { compose }         from 'react-apollo';
import { Redirect }        from 'react-router-dom';
import LinkSharer          from './LinkSharer';
import withUser            from '../auth/withUser';
import withLoader          from '../generic/withLoader';
import withLink            from './withLink';
import withCreateLink      from './withCreateLink';
import withAvailableBoards from './withAvailableBoards';


class ShareLink extends React.Component
{
    handleSubmit = ( link, boards ) =>
    {
        const { user, link:sharedLink, createLink, history } = this.props;

        const boardLinks = boards.map( boardID => createLink( link, user.id, boardID, sharedLink.id ) );

        Promise.all( boardLinks )
            .then( res => console.log( 'Links created', res ) )
            .then( history.goBack )
            .catch( err => console.log( 'Failed creating link', err ) );
    }


    render()
    {
        const { user, link, availableBoards } = this.props;

        if ( !user )
        {
            return <Redirect to="/" />;
        }


        return (

            <LinkSharer
                link={ link }
                boards={ availableBoards.data }
                onSubmit={ this.handleSubmit } />

        );
    }
}


const connect = compose(
    withUser,
    withLink,
    withAvailableBoards,
    withCreateLink,
    withLoader( p => p.loadingUser || p.loadingLink || p.availableBoards.loading )
);


export default connect( ShareLink );
