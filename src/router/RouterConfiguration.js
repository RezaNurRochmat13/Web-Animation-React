import React from 'react'; 
import {
    BrowserRouter as Router,
    Route,
    Switch} from "react-router-dom";
import Core from '../components/core/Core';
import Amphibians from '../components/amphibians/Amphibians';
import Birds from '../components/birds/Birds';
import Reptiles from '../components/reptiles/Reptiles';
import Fish from '../components/fish/Fish';
import Mammals from '../components/mammals/Mammals';

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
                    <Route exact path='/ikan' component={Fish} />
                </Switch>
            </Router>
        );
    }
}

export default RouterConfiguration;