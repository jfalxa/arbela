import { createNetworkInterface, ApolloClient } from 'react-apollo';
import authMiddleware from './authMiddleware';


const PROJECT_URL      = 'https://api.graph.cool/simple/v1/cj5wnhjzb7vg80183gyux1vf6';
const networkInterface = createNetworkInterface( { uri: PROJECT_URL } );

networkInterface.use( [{ applyMiddleware: authMiddleware }] );


export default new ApolloClient( { networkInterface } );
