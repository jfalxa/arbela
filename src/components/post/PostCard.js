import React      from 'react';
import styled     from 'styled-components';
import { Link }   from 'react-router-dom';
import * as theme from '../../style/theme';
import Box        from '../utilities/Box';


const Header = Box.withComponent( 'header' );

const PostCardBox = Box.withComponent( 'article' ).extend`

    margin-bottom: 25px;

`

const TitleLink = styled( Link )`

    margin-right: 7px;

    font-family: ${ theme.titleFont };
    font-size: 1.2em;
    font-weight: bold;
    text-decoration: none;

    &:hover
    {
        text-decoration: underline;
    }

`;


const EditLink = styled( Link ).attrs( { children: '(edit)' } )`

    font-size: 0.8em;
    text-decoration: none;

    &:hover
    {
        font-weight: bold;
    }



`

const Url = styled.span`

    font-size: 0.8em;
    color: ${ theme.secondaryText };
    text-decoration: underline;

`;

const AuthorLink = styled( Link )`

    font-size: 0.8em;
    text-decoration: none;

    &:hover
    {
        text-decoration: underline;
    }
`;


const Description = styled.p`

    margin: 0;
    margin-top: 5px;

    font-size: 0.9em;

`;


const Separator = styled.span.attrs( { children: '-' } )`

    margin: 0 7px;

`;


export default function PostCard( { id, title, url, description, author } )
{
    return (

        <PostCardBox column>

            <Header column>

                <Box row alignCenter>
                    <TitleLink to={ url } target="blank">{ title }</TitleLink>
                    <EditLink to={ `/edit/${ id }` }>(edit)</EditLink>
                </Box>

                <Box row alignCenter>
                    <Url>{ url }</Url>
                    <Separator />
                    <AuthorLink to={ `/users/${ author.name }` }>by { author.name }</AuthorLink>
                </Box>

            </Header>

            <Description>{ description }</Description>

        </PostCardBox>

    );
}

