import Box from './Box';


const Card = Box.withComponent( 'article' ).extend.attrs( { column: true } )`

    width: 600px;
    padding: 10px;
    border: 1px solid #ddd;
    border-top: 0;

    background-color: ${ p => p.targeted ? '#F5F5F5' : 'initial' };

`;


export default Card;
