import { createNetworkInterface, ApolloClient } from 'react-apollo';


const PROJECT_URL      = 'https://api.graph.cool/simple/v1/cj5wnhjzb7vg80183gyux1vf6';
const networkInterface = createNetworkInterface( { uri: PROJECT_URL } );


export default new ApolloClient( { networkInterface } );
