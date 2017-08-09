import React                 from 'react';
import unionBy               from 'lodash/unionBy';
import LinkSharer            from './LinkSharer';
import withLink              from './withLink';
import withShareLink         from './withShareLink';
import withSessionUserBoards from '../boards/withSessionUserBoards';


class ShareLink extends React.Component
{
    state =
    {
        checked : []
    }


    getBoards()
    {
        const { ownedBoards, joinedBoards } = this.props;
        return unionBy( ownedBoards, joinedBoards, 'id' );
    }


    handleCheck = ( checked ) =>
    {
        this.setState( { checked } );
    }


    handleSubmit = ( e ) =>
    {
        e.preventDefault();

        const { checked }                  = this.state;
        const { shareLink, link, history } = this.props;

        const linkShares = checked.map( boardID => shareLink( boardID, link.id ) );

        Promise.all( linkShares )
            .then( res => console.log( 'Shared link', res ) )
            .then( () => history.goBack() )
            .catch( err => console.log( 'Failed sharing link', err ) );
    }


    render()
    {
        const { loadingLink, loadingBoards, link } = this.props;

        return (

            <LinkSharer
                link={ link }
                boards={ this.getBoards() }
                checked={ this.state.checked }
                loadingLink={ loadingLink }
                loadingBoards={ loadingBoards }
                onCheck={ this.handleCheck }
                onSubmit={ this.handleSubmit } />

        );
    }
}


export default withLink( withSessionUserBoards( withShareLink( ShareLink ) ) );

