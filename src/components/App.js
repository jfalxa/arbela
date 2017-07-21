import React                 from 'react';
import { Link, Route }       from 'react-router-dom';
import DocumentFormContainer from './DocumentFormContainer';
import DocumentListContainer from './DocumentListContainer';


export default class App extends React.Component
{
    render()
    {
        return (

            <div>

                <nav>
                    <Link to="/">Home</Link>
                    { ' ' }
                    <Link to="/create">Create</Link>
                </nav>

                <Route exact path="/" component={ DocumentListContainer } />
                <Route path="/create" component={ DocumentFormContainer } />

            </div>

        );
    }
}

