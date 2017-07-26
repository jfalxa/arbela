import React        from 'react';
import Box          from '../utilities/Box';
import Loader       from '../utilities/Loader';
import Button       from '../utilities/Button';
import PostForm     from './PostForm';
import withEditPost from '../../graphcool/post/editPost';


const PostEditorBox = Box.withComponent( 'section' );


class PostEditor extends React.Component
{
    constructor( props )
    {
        super();

        this.state = { ...props.post }
    }


    componentWillReceiveProps( nextProps )
    {
        this.setState( { ...nextProps.post } );
    }


    handleChange = ( field, value ) =>
    {
        this.setState( { [field]: value } );
    }


    handleSubmit = () =>
    {
        const { post, updatePost, history } = this.props;

        updatePost( { ...post, ...this.state } )
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
            return <Loader />;
        }

        const { title, url, description, boards } = this.state;

        return (

            <PostEditorBox flex column>

                <PostForm
                    title={ title }
                    url={ url }
                    description={ description }
                    boards={ boards }
                    onChange={ this.handleChange }
                    onSubmit={ this.handleSubmit } />

                <Button onClick={ this.handleDelete }>Delete</Button>

            </PostEditorBox>

        );
    }
}


export default withEditPost( PostEditor );
