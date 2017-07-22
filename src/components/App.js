import React           from 'react';
import { Link, Route } from 'react-router-dom';
import DocumentList    from './DocumentList';
import DocumentCreator from './DocumentCreator';
import DocumentEditor  from './DocumentEditor';


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
                    <Route path="/create" component={ DocumentCreator } />
                    <Route path="/edit/:id" component={ DocumentEditor } />
                </main>

            </div>

        );
    }
}

