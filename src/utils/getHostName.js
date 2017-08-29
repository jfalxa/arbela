function getHostName( url )
{
    const parser = document.createElement( 'a' );
    parser.href  = url;

    return parser.hostname;
}


export default getHostName;
