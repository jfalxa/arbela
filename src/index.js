import React                 from 'react';
import ReactDOM              from 'react-dom';
import Root                  from './components/Root';
import registerServiceWorker from './services/registerServiceWorker';


ReactDOM.render( <Root />, document.getElementById( 'root' ) );

registerServiceWorker();
