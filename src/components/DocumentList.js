import React            from 'react';
import withAllDocuments from '../graphcool/allDocuments';
import DocumentCard     from './DocumentCard';


class DocumentList extends React.Component
{
    render()
    {
        const { loading, documents } = this.props;

        if ( loading )
        {
            return <p>Loading...</p>;
        }

        return (

            <section>
                { documents.map( document => <DocumentCard key={ document.id } { ...document } /> ) }
            </section>

        );
    }
}


export default withAllDocuments( DocumentList );
