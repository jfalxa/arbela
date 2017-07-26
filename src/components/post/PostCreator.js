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
        description : '',
        boards      : []
    }


    handleChange = ( field, value ) =>
    {
        this.setState( { [field]: value } );
    }


    handleSubmit = () =>
    {
        const { createPost, user, history } = this.props;

        createPost( { ...this.state, author: user.id } )
            .then( () => history.push( '/' ) );
    }


    render()
    {
        const { title, url, description, boards } = this.state;

        return (

            <PostCreatorBox flex column>

                <PostForm
                    title={ title }
                    url={ url }
                    description={ description }
                    boards={ boards }
                    onChange={ this.handleChange }
                    onSubmit={ this.handleSubmit } />

            </PostCreatorBox>

        );
    }
}


export default withUser( withCreatePost( PostCreator ) );
