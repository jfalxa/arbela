import React from 'react';


function Document( { id, title, url, description } )
{
    return (

        <div>
            <a href={ url }>{ title }</a>
            <p>{ description }</p>
        </div>

    );
}


export default class DocumentList extends React.Component
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
                { documents.map( document => <Document key={ document.id } { ...document } /> ) }
            </section>

        );
    }
}

