import Box from './Box';


const CardBody = Box.withComponent( 'p' ).extend`

    margin: 0;
    margin-top: 5px;
    margin-left: 10px;

    font-size: 0.8em;
    color: #444;

`;


export default CardBody;
