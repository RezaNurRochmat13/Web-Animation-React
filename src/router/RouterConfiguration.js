import React from 'react'; 
import {
    BrowserRouter as Router,
    Route,
    Switch} from "react-router-dom";
import Core from '../components/core/Core';
import Amphibians from '../components/amphibians/Amphibians';
import Birds from '../components/birds/Birds';
import Mammals from '../components/mammals/Mammals';
import Reptiles from '../components/reptiles/Reptiles';

class RouterConfiguration extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Core} />
                    <Route exact path='/mamalia' component={Mammals} />
                    <Route exact path='/burung' component={Birds} />
                    <Route exact path='/amphibi' component={Amphibians} />
                    <Route exact path='/reptile' component={Reptiles} />
                </Switch>
            </Router>
        );
    }
}

export default RouterConfiguration;