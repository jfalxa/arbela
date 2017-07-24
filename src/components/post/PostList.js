import React      from 'react';
import Box        from '../utilities/Box';
import Loader     from '../utilities/Loader';
import PostCard   from './PostCard';


const PostBox = Box.withComponent( 'section' );


export default class PostList extends React.Component
{
    render()
    {
        const { loading, posts } = this.props;

        if ( loading )
        {
            return <Loader />;
        }

        return (

            <PostBox flex column>
                { posts.map( post => <PostCard key={ post.id } { ...post } /> ) }
            </PostBox>

        );
    }
}

