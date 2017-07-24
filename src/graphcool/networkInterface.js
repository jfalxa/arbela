import { createNetworkInterface } from 'react-apollo';
import authMiddleware             from './authMiddleware';


const PROJECT_URL      = 'https://api.graph.cool/simple/v1/cj5czadq5gaop0122guw2uqfp';
const networkInterface = createNetworkInterface( { uri: PROJECT_URL } );

networkInterface.use( [{ applyMiddleware: authMiddleware }] );


export default networkInterface;
