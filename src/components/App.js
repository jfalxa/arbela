import React           from 'react';
import { Link, Route } from 'react-router-dom';
import DocumentForm    from './DocumentForm';
import DocumentList    from './DocumentList';


export default class App extends React.Component
{
    render()
    {
        return (

            <div>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/create">Create</Link>
                </nav>

                <main>
                    <Route exact path="/" component={ DocumentList } />
                    <Route path="/create" component={ DocumentForm } />
                </main>

            </div>

        );
    }
}

