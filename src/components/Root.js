import React              from 'react';
import { ApolloProvider } from 'react-apollo';
import client             from '../services/graphcool/client';
import App                from './App';


export default function Root()
{
    return (

        <ApolloProvider client={ client }>
            <App />
        </ApolloProvider>

    );
}

