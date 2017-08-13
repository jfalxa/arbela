import Box from '../generic/Box';


const props =
{
    column  : true,
    justify : 'center',
    align   : 'center'
};


const CardAside = Box.withComponent( 'aside' ).extend.attrs( props )`

    width: 100px;
    height: 100px;

`;


export default CardAside;
