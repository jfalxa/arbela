import React      from 'react';
import Box        from './Box';
import PageHeader from './PageHeader';


const Section = Box.withComponent( 'section' ).extend`

    margin-top: 50px;

`


function Page( { title, children } )
{
    return (

        <Section column align="center">

            <PageHeader>{ title }</PageHeader>

            { children }

        </Section>

    );
}



export default Page;
