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
// Mamalia Main Route
import Mammals from '../components/mammals/Mammals';
import AnjingPages from '../components/mammals/page/anjing/AnjingPage';
import HarimauPages from '../components/mammals/page/harimau/HarimauPages';
import KanguruPage from '../components/mammals/page/kanguru/Kanguru';
import KelinciPages from '../components/mammals/page/kelinci/Kelinci';
import KucingPages from '../components/mammals/page/kucing/KucingPage';
import KambingPages from '../components/mammals/page/kambing/Kambing';
import LumbaLumbaPages from '../components/mammals/page/lumba-lumba/LumbaLumba';
import SingaPages from '../components/mammals/page/singa/Singa';

class RouterConfiguration extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Core} />
                    <Route exact path='/mamalia' component={Mammals} />
                    <Route exact path='/mamalia/kucing' component={KucingPages} />
                    <Route exact path='/mamalia/anjing' component={AnjingPages} />
                    <Route exact path='/mamalia/lumbalumba' component={LumbaLumbaPages} />
                    <Route exact path='/mamalia/harimau' component={HarimauPages} />
                    <Route exact path='/mamalia/singa' component={SingaPages} />
                    <Route exact path='/mamalia/kanguru' component={KanguruPage} />
                    <Route path='/mamalia/kelinci' component={KelinciPages} />
                    <Route path='/mamalia/kambing' component={KambingPages} />
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