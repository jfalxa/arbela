import React              from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter }  from 'react-router-dom';
import client             from '../services/graphcool/client';
import App                from './App';


export default function Root()
{
    return (

        <ApolloProvider client={ client }>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>

    );
}

