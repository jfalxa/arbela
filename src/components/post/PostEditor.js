import React        from 'react';
import PostForm     from './PostForm';
import withEditPost from '../../graphcool/post/editPost';


class PostEditor extends React.Component
{
    handleSubmit = ( update ) =>
    {
        const { post, updatePost, history } = this.props;

        updatePost( { ...post, ...update } )
            .then( () => history.push( '/' ) );
    }


    handleDelete = () =>
    {
        const { post, deletePost, history } = this.props;

        deletePost( post.id )
            .then( () => history.push( '/' ) );
    }


    render()
    {
        if ( this.props.loading )
        {
            return <p>Loading...</p>;
        }

        const { title, url, description } = this.props.post;

        return (

            <section>

                <PostForm
                    title={ title }
                    url={ url }
                    description={ description }
                    onSubmit={ this.handleSubmit } />

                <button onClick={ this.handleDelete }>DELETE</button>

            </section>

        );
    }
}


export default withEditPost( PostEditor );