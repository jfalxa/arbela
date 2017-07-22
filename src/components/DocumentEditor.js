import React              from 'react';
import DocumentForm       from './DocumentForm';
import withReadDocument   from '../graphcool/readDocument';
import withUpdateDocument from '../graphcool/updateDocument';
import withDeleteDocument from '../graphcool/deleteDocument';


class DocumentEditor extends React.Component
{
    handleSubmit = ( update ) =>
    {
        const { document, updateDocument, history } = this.props;

        updateDocument( { ...document, ...update } )
            .then( () => history.push( '/' ) );
    }


    handleDelete = () =>
    {
        const { document, deleteDocument, history } = this.props;

        deleteDocument( document.id )
            .then( () => history.push( '/' ) );
    }


    render()
    {
        if ( this.props.loading )
        {
            return <p>Loading...</p>;
        }

        const { title, url, description } = this.props.document;

        return (

            <section>

                <DocumentForm
                    title={ title }
                    url={ url }
                    description={ description }
                    onSubmit={ this.handleSubmit } />

                <button onClick={ this.handleDelete }>DELETE</button>

            </section>

        );
    }
}


export default withReadDocument( withUpdateDocument( withDeleteDocument( DocumentEditor ) ) );
