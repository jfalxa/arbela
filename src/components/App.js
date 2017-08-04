import React            from 'react';
import { Route }        from 'react-router-dom';
import Navigation       from './Navigation';
import FeedLinks        from './links/FeedLinks';
import PostLink         from './links/PostLink';
import EditLink         from './links/EditLink';
import UserLinks        from './links/UserLinks';
import SessionUserLinks from './links/SessionUserLinks';
import CreateBoard      from './boards/CreateBoard';
import LoginUser        from './auth/LoginUser';
import RegisterUser     from './auth/RegisterUser';


function App()
{
    return (

        <div>

            <Navigation />

            <main>
                <Route exact path="/" component={ FeedLinks } />
                <Route path="/post" component={ PostLink } />
                <Route path="/edit/:id" component={ EditLink } />
                <Route path="/users/:name" component={ UserLinks } />
                <Route path="/me" component={ SessionUserLinks } />
                <Route path="/new-board" component={ CreateBoard } />
                <Route path="/login" component={ LoginUser } />
                <Route path="/register" component={ RegisterUser } />
            </main>

        </div>

    );
}


export default App;
