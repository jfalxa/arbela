import { createNetworkInterface, ApolloClient } from 'react-apollo';


const PROJECT_URL      = 'https://api.graph.cool/simple/v1/cj5czadq5gaop0122guw2uqfp';
const networkInterface = createNetworkInterface( { uri: PROJECT_URL } );
const client           = new ApolloClient( { networkInterface } );


export default client;
