import React            from 'react';
import BoardChoiceGroup from './BoardChoiceGroup';
import withLink         from './withLink';
import withAllBoards    from '../boards/withAllBoards';
import withShareLink    from './withShareLink';


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
            .then( () => history.push( '/' ) )
            .catch( err => console.log( 'Failed sharing link', err ) );
    }


    render()
    {
        const { checked }                        = this.state;
        const { loadingBoards, link, boards=[] } = this.props;

        return (

            <section>

                <h2>Share "{ link ? link.title : '' }"</h2>

                { loadingBoards && <p>Loading...</p> }

                <form onSubmit={ this.handleSubmit }>

                    <BoardChoiceGroup
                        items={ boards }
                        checked={ checked }
                        onCheck={ this.handleCheck } />

                    <button type="submit">Share</button>

                </form>

            </section>

        );
    }
}





export default withLink( withAllBoards( withShareLink( ShareLink ) ) );

