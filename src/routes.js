import React from 'react'
import {Route, Switch, HashRouter} from 'react-router-dom';
import Logon from './Pages/Logon';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import NewIncident from './Pages/NewIncident';

export default function Routes(){ 
    return (
        <HashRouter >
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>

        </HashRouter>
    )
}