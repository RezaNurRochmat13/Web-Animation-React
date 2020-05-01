import React from 'react';
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
                        <div className="col-md-3">Bird 1</div>
                        <div className="col-md-3">Bird 2</div>
                        <div className="col-md-3">Bird 3</div>
                        <div className="col-md-3">Bird 4</div>
                    </div>
                </div>
                <div className="burung-content-2">
                    <div className="row">
                        <div className="col-md-3">Bird 5</div>
                        <div className="col-md-3">Bird 6</div>
                        <div className="col-md-3">Bird 7</div>
                        <div className="col-md-3">Bird 8</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Birds;