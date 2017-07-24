import React    from 'react';
import Loader   from '../utilities/Loader';
import PostCard from './PostCard';


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

            <section>
                { posts.map( post => <PostCard key={ post.id } { ...post } /> ) }
            </section>

        );
    }
}

