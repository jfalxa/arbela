import Box from './Box';


const props =
{
    column      : true,
    alignCenter : true
};


const Page = Box.withComponent( 'section' ).extend.attrs( props )``;


export default Page;
