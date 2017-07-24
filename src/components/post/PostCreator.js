import React          from 'react';
import { Redirect }   from 'react-router-dom';
import PostForm       from './PostForm';
import withUser       from '../../graphcool/auth/user';
import withCreatePost from '../../graphcool/post/createPost';


class PostCreator extends React.Component
{
    handleSubmit = ( post ) =>
    {
        const { createPost, user, history } = this.props;

        createPost( { ...post, authorId: user.id } )
            .then( () => history.push( '/' ) );
    }


    render()
    {
        if ( !this.props.user )
        {
            return <Redirect to="/" />
        }

        return <PostForm onSubmit={ this.handleSubmit } />;
    }
}


export default withUser( withCreatePost( PostCreator ) );
