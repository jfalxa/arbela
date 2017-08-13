import Box from '../generic/Box';


const props =
{
    column : true,
    align  : 'center'
};


const CardList = Box.withComponent( 'ul' ).extend.attrs( props )`

    padding: 0;

    li:first-child article
    {
        border-top: 1px solid #ccc;
    }

`;


export default CardList;
