import React    from 'react';
import Login    from './auth/Login';
import Register from './auth/Register';


class App extends React.Component
{
    render()
    {
        return (

            <div>
                <Login />
                <Register />
            </div>

        );
    }
}


export default App;
