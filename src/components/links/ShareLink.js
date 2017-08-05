import React         from 'react';
import LinkSharer    from './LinkSharer';
import withLink      from './withLink';
import withAllBoards from '../boards/withAllBoards';
import withShareLink from './withShareLink';


class ShareLink extends React.Component
{
    state =
    {
        checked : []
    }


    componentWillReceiveProps( { link } )
    {
        if ( !link )
        {
            return;
        }

        this.setState( { checked: link.boards.map( board => board.id ) } );
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

        shareLink( { ...link, boards: checked } )
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


export default withLink( withAllBoards( withShareLink( ShareLink ) ) );

