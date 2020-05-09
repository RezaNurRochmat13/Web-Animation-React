import React from 'react';
import MerpatiImg from './img/merpati.png';
import ElangImg from './img/elang.jpg';
import GagakImg from './img/gagak.jpeg';
import BurungHantuImg from './img/burung-hantu.png';
import './Birds.scss';

class Birds extends React.Component {
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
                <a href="/" className="previous" onClick={this.goBack}>&laquo; Back to Menu Awal</a>
                <div className="burung-content-1">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="burung-img" src={MerpatiImg} 
                            width="150px" height="150px" alt="merpati"
                            />
                            <p className="burung-subtitle">Dara</p>
                        </div>
                        <div className="col-md-3">
                            <img className="burung-img" src={ElangImg}
                            width="150px" height="150px" alt="elang"
                            />
                            <p className="burung-subtitle">Elang</p>
                        </div>
                        <div className="col-md-3">
                            <img className="burung-img" src={GagakImg}
                            width="150px" height="150px" alt="gagak"
                            />
                            <p className="burung-subtitle">Gagak</p>
                        </div>
                        <div className="col-md-3">
                            <img className="burung-img" src={BurungHantuImg}
                            width="150px" height="150px" alt="burung-hantu"
                            />
                            <p className="burung-subtitle">Guwek</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Birds;