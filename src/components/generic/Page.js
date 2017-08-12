import Box from './Box';


const props =
{
    column : true,
    align  : 'center'
};


const Page = Box.withComponent( 'section' ).extend.attrs( props )`

    width: 500px;

`;


export default Page;
