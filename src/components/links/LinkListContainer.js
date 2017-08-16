import React            from 'react';
import { compose }      from 'react-apollo';
import LinkList         from './LinkList';
import withUser         from '../auth/withUser';
import withLoader       from '../generic/withLoader';
import withUpdateScore  from './withUpdateScore';


class LinkListContainer extends React.Component
{
    handleVote = ( link, vote ) =>
    {
        const { updateScore, user, links } = this.props;

        updateScore( link.id, link.score + vote, user.data.id )
            .then( res => console.log( 'Vote was registered', res ) )
            .then( links.refetch )
            .catch( err => console.log( 'Failed voting', err ) );
    }


    render()
    {
        return (

            <LinkList
                links={ this.props.links.data }
                onVote={ this.handleVote } />

        );
    }
}


const connect = compose(
    withUser,
    withUpdateScore,
    withLoader( p => p.user.loading || p.links.loading )
);

export default connect( LinkListContainer );
