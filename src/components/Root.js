import React              from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter }  from 'react-router-dom';
import App                from './App';


export default function Root( { client } )
{
    return (

        <ApolloProvider client={ client }>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>

    );
}

