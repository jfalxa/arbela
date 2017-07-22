import React              from 'react';
import DocumentForm       from './DocumentForm';
import withCreateDocument from '../graphcool/createDocument';


function DocumentCreator( { createDocument, history } )
{
    const handleSubmit = document =>
    {
        createDocument( document )
            .then( () => history.push( '/' ) );
    };

    return <DocumentForm onSubmit={ handleSubmit } />;
}


export default withCreateDocument( DocumentCreator );
