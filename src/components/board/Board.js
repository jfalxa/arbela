import React     from 'react';
import Box       from '../utilities/Box';
import Loader    from '../utilities/Loader';
import PostList  from '../post/PostList';
import withBoard from '../../graphcool/board/board';


const BoardBox = Box.withComponent( 'article' );


class Board extends React.Component
{
    render()
    {
        if ( this.props.loading )
        {
            return <Loader />;
        }

        const { title, description, posts } = this.props.board;

        return (

            <BoardBox column>

                <h2>{ title }</h2>

                <p>{ description }</p>

                <PostList posts={ posts } />

            </BoardBox>

        );
    }
}


export default withBoard( Board );
