import React            from 'react';
import { Route }        from 'react-router-dom';
import Navigation       from './Navigation';
import FeedLinks        from './links/FeedLinks';
import PostLink         from './links/PostLink';
import EditLink         from './links/EditLink';
import ShareLink        from './links/ShareLink';
import UserLinks        from './links/UserLinks';
import SessionUserLinks from './links/SessionUserLinks';
import CreateBoard      from './boards/CreateBoard';
import BoardLinks       from './boards/BoardLinks';
import EditBoard        from './boards/EditBoard';
import FeedBoards       from './boards/FeedBoards';
import LoginUser        from './auth/LoginUser';
import RegisterUser     from './auth/RegisterUser';


function App()
{
    return (

        <div>

            <Navigation />

            <main>

                <Route exact path="/" component={ FeedLinks } />
                <Route path="/new-link" component={ PostLink } />
                <Route path="/links/:id/edit" component={ EditLink } />
                <Route path="/links/:id/share" component={ ShareLink } />
                <Route path="/users/:name" component={ UserLinks } />
                <Route path="/me" component={ SessionUserLinks } />

                <Route exact path="/boards" component={ FeedBoards } />
                <Route path="/new-board" component={ CreateBoard } />
                <Route path="/boards/:id" component={ BoardLinks } />
                <Route path="/boards/:id/edit" component={ EditBoard } />

                <Route path="/login" component={ LoginUser } />
                <Route path="/register" component={ RegisterUser } />

            </main>

        </div>

    );
}


export default App;
