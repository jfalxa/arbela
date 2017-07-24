import React        from 'react';
import withAllPosts from '../graphcool/post/allPosts';
import PostCard     from './PostCard';


class PostList extends React.Component
{
    render()
    {
        const { loading, posts } = this.props;

        if ( loading )
        {
            return <p>Loading...</p>;
        }

        return (

            <section>
                { posts.map( post => <PostCard key={ post.id } { ...post } /> ) }
            </section>

        );
    }
}


export default withAllPosts( PostList );
