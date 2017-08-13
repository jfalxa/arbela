import Box from './Box';


const CardBody = Box.withComponent( 'p' ).extend`

    margin: 0;
    margin-top: 10px;

    color: #777;

`;


export default CardBody;
