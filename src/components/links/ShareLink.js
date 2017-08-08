import React          from 'react';
import LinkSharer     from './LinkSharer';
import withLink       from './withLink';
import withShareLink  from './withShareLink';
import withUserBoards from './withUserBoards';


class ShareLink extends React.Component
{
    state =
    {
        checked : []
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
        const { loadingLink, loadingBoards, link, boards=[] } = this.props;

        return (

            <LinkSharer
                link={ link }
                boards={ boards }
                checked={ this.state.checked }
                loadingLink={ loadingLink }
                loadingBoards={ loadingBoards }
                onCheck={ this.handleCheck }
                onSubmit={ this.handleSubmit } />

        );
    }
}


export default withLink( withUserBoards( withShareLink( ShareLink ) ) );

