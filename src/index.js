import React                 from 'react';
import ReactDOM              from 'react-dom';
import Root                  from './components/Root';
import client                from './services/graphcool/client';
import registerServiceWorker from './services/registerServiceWorker';

import './index.css';


ReactDOM.render( <Root client={ client } />, document.getElementById('root') );

registerServiceWorker();
