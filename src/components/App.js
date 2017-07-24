import React           from 'react';
import { Link, Route } from 'react-router-dom';
import PostList        from './PostList';
import PostCreator     from './PostCreator';
import PostEditor      from './PostEditor';


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
                    <Route exact path="/" component={ PostList } />
                    <Route path="/create" component={ PostCreator } />
                    <Route path="/edit/:id" component={ PostEditor } />
                </main>

            </div>

        );
    }
}

