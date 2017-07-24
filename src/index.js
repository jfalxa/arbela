import React                 from 'react';
import ReactDOM              from 'react-dom';
import { ApolloClient }      from 'react-apollo';
import Root                  from './components/Root';
import networkInterface      from './graphcool/networkInterface';
import registerServiceWorker from './services/registerServiceWorker';

import './style/global';


const client = new ApolloClient( { networkInterface } );

ReactDOM.render( <Root client={ client } />, document.getElementById( 'root' ) );

registerServiceWorker();
