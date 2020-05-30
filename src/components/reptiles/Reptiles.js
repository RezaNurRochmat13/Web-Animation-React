import React from 'react';
import './Reptiles.css';
import ComingSoonCompnent from '../../shared/components/coming-soon/ComingSoonComponent';

class Reptiles extends React.Component {
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
                <ComingSoonCompnent />
            </div>
        )
    }
}

export default Reptiles;