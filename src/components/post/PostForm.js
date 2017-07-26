import React         from 'react';
import Box           from '../utilities/Box';
import Input         from '../utilities/Input';
import TextArea      from '../utilities/TextArea';
import Button        from '../utilities/Button';
import BoardSelector from '../board/BoardSelector';


const PostFormBox = Box.withComponent( 'form' );


export default class PostForm extends React.Component
{
    static defaultProps =
    {
        title       : '',
        url         : '',
        description : '',
        boards      : []
    }


    handleChange = ( e ) =>
    {
        this.props.onChange( e.target.name, e.target.value );
    }


    handleCheckBoard = ( boards ) =>
    {
        this.props.onChange( 'boards', boards );
    }


    handleSubmit = ( e ) =>
    {
        e.preventDefault();
        this.props.onSubmit();
    }


    render()
    {
        const { title, url, description, boards } = this.props;

        return (

            <PostFormBox column onSubmit={ this.handleSubmit }>

                <Input
                    name="title"
                    placeholder="title"
                    value={ title }
                    onChange={ this.handleChange } />

                <Input
                    name="url"
                    placeholder="url"
                    value={ url }
                    onChange={ this.handleChange } />

                <TextArea
                    name="description"
                    placeholder="description"
                    value={ description }
                    onChange={ this.handleChange } />


                <BoardSelector
                    selection={ boards }
                    onCheck={ this.handleCheckBoard } />

                <Button type="submit">Save</Button>

            </PostFormBox>

        );
    }
}
