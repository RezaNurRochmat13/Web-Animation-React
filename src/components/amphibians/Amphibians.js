import React from 'react';
import KatakImages from './img/kodok.png';
import KatakSawahImages from './img/katak-sawah.jpeg';
import SalamanderImages from './img/salamander.jpg';
import KatakPohonImages from './img/katak-pohon.jpg';
import './Amphibians.scss';

class Amphibians extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="Container">
                <a href="/" className="previous" onClick={this.goBack}>&laquo; Balik neng Menu Awal</a>
                <div className="amphibi-content-1">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={KatakImages} 
                            className="images-circle" width="200px" height="200px" alt="frog" />
                            <p className="subtitle-images">Kodhok</p>
                        </div>
                        <div className="col-md-3">
                            <img src={KatakSawahImages} 
                            className="images-circle" width="200px" height="200px" alt="frog_farm" />
                            <p className="subtitle-images">Kodhok sawah</p>
                        </div>
                        <div className="col-md-3">
                            <img src={SalamanderImages} 
                            className="images-circle" width="200px" height="200px" alt="salamander" />
                            <p className="subtitle-images">Salamander</p>
                        </div>
                        <div className="col-md-3">
                            <img src={KatakPohonImages} 
                            className="images-circle" width="200px" height="200px" alt="tree_frog" />
                            <p className="subtitle-images">Kodhok Uwit</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Amphibians;