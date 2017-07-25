import React          from 'react';
import Box            from '../utilities/Box';
import PostForm       from './PostForm';
import withUser       from '../../graphcool/auth/user';
import withCreatePost from '../../graphcool/post/createPost';


const PostCreatorBox = Box.withComponent( 'section' );


class PostCreator extends React.Component
{
    state =
    {
        title       : '',
        url         : '',
        description : ''
    }


    handleChange = ( e ) =>
    {
        this.setState( { [e.target.name]: e.target.value } );
    }


    handleSubmit = ( e ) =>
    {
        e.preventDefault();

        const { createPost, user, history } = this.props;

        createPost( { ...this.state, authorId: user.id } )
            .then( () => history.push( '/' ) );
    }


    render()
    {
        return (

            <PostCreatorBox flex>

                <PostForm
                    onChange={ this.handleChange }
                    onSubmit={ this.handleSubmit } />

            </PostCreatorBox>

        );
    }
}


export default withUser( withCreatePost( PostCreator ) );
