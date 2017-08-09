import React                 from 'react';
import { Route }             from 'react-router-dom';
import Navigation            from './Navigation';
import PostLink              from './links/PostLink';
import ShowAllLinks          from './links/ShowAllLinks';
import ShowUserLinks         from './links/ShowUserLinks';
import ShowSessionUserLinks  from './links/ShowSessionUserLinks';
import EditLink              from './links/EditLink';
import ShareLink             from './links/ShareLink';
import CreateBoard           from './boards/CreateBoard';
import ShowAllBoards         from './boards/ShowAllBoards';
import ShowSessionUserBoards from './boards/ShowSessionUserBoards';
import ShowUserBoards        from './boards/ShowUserBoards';
import ShowBoard             from './boards/ShowBoard';
import EditBoard             from './boards/EditBoard';
import PostBoardLink         from './boards/PostBoardLink';
import ManageBoardMembers    from './boards/ManageBoardMembers';
import LoginUser             from './auth/LoginUser';
import RegisterUser          from './auth/RegisterUser';


function App()
{
    return (

        <div>

            <Navigation />

            <main>

                <Route path="/new-link" component={ PostLink } />
                <Route exact path="/" component={ ShowAllLinks } />
                <Route path="/users/:name/links" component={ ShowUserLinks } />
                <Route path="/me/links" component={ ShowSessionUserLinks } />
                <Route path="/links/:id/edit" component={ EditLink } />
                <Route path="/links/:id/share" component={ ShareLink } />

                <Route path="/new-board" component={ CreateBoard } />
                <Route exact path="/boards" component={ ShowAllBoards } />
                <Route path="/users/:name" component={ ShowUserBoards } />
                <Route path="/me" component={ ShowSessionUserBoards } />
                <Route exact path="/boards/:id" component={ ShowBoard } />
                <Route path="/boards/:id/edit" component={ EditBoard } />
                <Route path="/boards/:id/new-link" component={ PostBoardLink } />
                <Route path="/boards/:id/members" component={ ManageBoardMembers } />

                <Route path="/login" component={ LoginUser } />
                <Route path="/register" component={ RegisterUser } />

            </main>

        </div>

    );
}


export default App;
