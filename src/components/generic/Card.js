import Box from './Box';


const Card = Box.withComponent( 'article' ).extend.attrs( { column: true } )`

    width: 500px;
    padding: 15px;
    border: 1px solid #ddd;
    border-top: 0;

`;


export default Card;
