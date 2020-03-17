import React from 'react';
import './Mammals.scss';

class Mammals extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        return(
            <div className="Container">
                <a href="#" class="previous" onClick={this.goBack}>&laquo; Previous</a>
                <div className="mamalia-content-1">
                <div className="row">
                    <div className="col-md-3">
                        <img src="https://previews.123rf.com/images/jaaakworks/jaaakworks1511/jaaakworks151100094/48211278-cartoon-cats-standing.jpg"
                        width="200px" height="200px" alt="cats"/>
                    </div>
                    <div className="col-md-3">
                        <img src="https://img3.stockfresh.com/files/r/robuart/m/72/8823746_stock-vector-cute-purebred-dogs-cartoon-flat-vectors-icons-set.jpg"
                        width="200px" height="200px" alt="dogs" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://illustoon.com/photo/1783.png"
                        width="200px" height="200px" alt="dolphin" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://img.freepik.com/free-vector/tiger-cartoon-cute_119631-205.jpg?size=626&ext=jpg"
                        width="200px" height="200px" alt="tiger" />
                    </div>
                </div>
                </div>
                <div className="mamalia-content-2">
                <div className="row">
                    <div className="col-md-3">
                        <img src="https://image.freepik.com/free-vector/cartoon-lion-posing-white-background_29190-5183.jpg"
                        width="200px" height="200px" alt="lion" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyUYId5TxanORahN5JR2SRX4g6-cHlmSB4hkFLN03mJ1ZrImke"
                        width="200px" height="200px" alt="kanguru" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://image.freepik.com/free-vector/happy-rabbit-cartoon_43633-129.jpg"
                        width="200px" height="200px" alt="rabbits" />
                    </div>
                    <div className="col-md-3">Mamalia 3</div>
                </div>
                </div>
            </div>
        )
    }
}

export default Mammals;