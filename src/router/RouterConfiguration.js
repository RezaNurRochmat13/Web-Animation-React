import React from 'react'; 
import {
    BrowserRouter as Router,
    Route,
    Switch} from "react-router-dom";
import Mammals from '../components/mammals/Mammals';
import Core from '../components/core/Core';
import Birds from '../components/birds/Birds';

class RouterConfiguration extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Core} />
                    <Route exact path='/mamalia' component={Mammals} />
                    <Route exact path='/burung' component={Birds} />
                </Switch>
            </Router>
        );
    }
}

export default RouterConfiguration;