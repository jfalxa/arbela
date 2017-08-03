import React              from 'react';
import { ApolloProvider } from 'react-apollo';
import App                from './App';


export default function Root( { client } )
{
    return (

        <ApolloProvider client={ client }>
            <App />
        </ApolloProvider>

    );
}

