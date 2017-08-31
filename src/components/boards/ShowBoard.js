import React            from 'react';
import { compose }      from 'react-apollo';
import { Redirect }     from 'react-router-dom';
import Board            from './Board';
import withUser         from '../auth/withUser';
import withLoader       from '../generic/withLoader';
import withSearch       from '../generic/withSearch';
import withBoard        from './withBoard';
import withUpdateScore  from '../links/withUpdateScore';


class ShowBoard extends React.Component
{
    render()
    {
        if ( !this.props.board.data )
        {
            return <Redirect to="/" />;
        }

        const { search, board, onSearch } = this.props;

        return (

            <Board
                board={ board.data }
                access={ board.access }
                search={ search }
                onVote={ this.handleVote }
                onSearch={ onSearch } />

        );
    }
}


const connect = compose(
    withUser,
    withBoard,
    withSearch,
    withUpdateScore,
    withLoader( p => p.user.loading || p.board.loading )
);

export default connect( ShowBoard );
