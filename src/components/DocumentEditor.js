import React              from 'react';
import DocumentForm       from './DocumentForm';
import withReadDocument   from '../graphcool/readDocument';
import withUpdateDocument from '../graphcool/updateDocument';
import withDeleteDocument from '../graphcool/deleteDocument';


function DocumentEditor( { loading, document, updateDocument, deleteDocument, history } )
{
    if ( loading )
    {
        return <p>Loading...</p>;
    }

    const handleSubmit = update =>
    {
        updateDocument( { ...document, ...update } )
            .then( () => history.push( '/' ) );
    };

    const handleDelete = () =>
    {
        deleteDocument( document.id )
            .then( () => history.push( '/' ) );
    }

    return (

        <section>

            <DocumentForm
                title={ document.title }
                url={ document.url }
                description={ document.description }
                onSubmit={ handleSubmit } />

            <button onClick={ handleDelete }>DELETE</button>

        </section>

    );
}


export default withReadDocument( withUpdateDocument( withDeleteDocument( DocumentEditor ) ) );
