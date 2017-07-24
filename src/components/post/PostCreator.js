import React          from 'react';
import PostForm       from './PostForm';
import withCreatePost from '../../graphcool/post/createPost';


class PostCreator extends React.Component
{
    handleSubmit = ( post ) =>
    {
        const { createPost, history } = this.props;

        createPost( post )
            .then( () => history.push( '/' ) );
    }


    render()
    {
        return <PostForm onSubmit={ this.handleSubmit } />;
    }
}


export default withCreatePost( PostCreator );
