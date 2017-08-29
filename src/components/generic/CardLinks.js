import Box from '../generic/Box';


const CardLinks = Box.withComponent( 'aside' ).extend.attrs( { align: 'center' } )`

    margin-left: 10px;
    font-size: 0.7em;
    color: #777;

    a
    {
        color: #444;
    }

`;


export default CardLinks;
