import React    from 'react';
import Box      from '../utilities/Box';
import Input    from '../utilities/Input';
import TextArea from '../utilities/TextArea';
import Button   from '../utilities/Button';


const PostFormBox = Box.withComponent( 'form' );


export default function PostForm( { title, url, description, onChange, onSubmit } )
{
    return (

        <PostFormBox column onChange={ onChange } onSubmit={ onSubmit }>

            <Input name="title" placeholder="title" value={ title } />
            <Input name="url" placeholder="url" value={ url } />
            <TextArea name="description" placeholder="description" value={ description } />

            <Button type="submit">Save</Button>

        </PostFormBox>

    );
}
