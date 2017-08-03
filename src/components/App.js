import React      from 'react';
import { Route }  from 'react-router-dom';
import Navigation from './Navigation';
import Login      from './auth/Login';
import Register   from './auth/Register';


class App extends React.Component
{
    render()
    {
        return (

            <div>

                <Navigation />

                <main>
                    <Route path="/login" component={ Login } />
                    <Route path="/register" component={ Register } />
                </main>

            </div>

        );
    }
}


export default App;
