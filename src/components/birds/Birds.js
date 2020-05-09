import React from 'react';
import Modal from 'react-awesome-modal';
import MerpatiImg from './img/merpati.png';
import ElangImg from './img/elang.jpg';
import GagakImg from './img/gagak.jpeg';
import BurungHantuImg from './img/burung-hantu.png';
import './Birds.scss';

class Birds extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.onOpenGagakModal = this.onOpenGagakModal.bind(this);
        this.onCloseGagakModal = this.onCloseGagakModal.bind(this);
        this.onOpenMerpatiModal= this.onOpenMerpatiModal.bind(this);
        this.onCloseMerpatiModal = this.onCloseMerpatiModal.bind(this);
        this.onOpenBurungHantuModal = this.onOpenBurungHantuModal.bind(this);
        this.onCloseBurungHantuModal = this.onCloseBurungHantuModal.bind(this);
        this.onOpenElangModal = this.onOpenElangModal.bind(this);
        this.onCloseElangModal = this.onCloseElangModal.bind(this);
        this.state = {
            openGagakModalActive: false,
            openMerpatiModalActive: false,
            openBurungHantuModalActive: false,
            openElangModalActive: false
        };
    }

    goBack() {
        this.props.history.goBack();
    }

    onOpenGagakModal() {
        this.setState({openGagakModalActive: true});
    }

    onCloseGagakModal() {
        this.setState({openGagakModalActive: false});
    }

    onOpenMerpatiModal() {
        this.setState({openMerpatiModalActive: true});
    }

    onCloseMerpatiModal() {
        this.setState({openMerpatiModalActive: false});
    }

    onOpenBurungHantuModal() {
        this.setState({openBurungHantuModalActive: true});
    }

    onCloseBurungHantuModal() {
        this.setState({openBurungHantuModalActive: false});
    }

    onOpenElangModal() {
        this.setState({openElangModalActive: true});
    }

    onCloseElangModal() {
        this.setState({openElangModalActive: false});
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
                            onClick={this.onOpenMerpatiModal}
                            />
                            <p className="burung-subtitle">Dara</p>
                            <Modal visible={this.state.openMerpatiModalActive} width="800" height="500" effect="fadeInDown" onClickAway={() => this.onCloseMerpatiModal()}>
                                <div className="modal-header">
                                    <h5 class="modal-title">Manuk dara modal</h5>
                                    <button type="button" class="close" aria-label="Close" onClick={this.onCloseMerpatiModal}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    content appeared here
                                </div>
                            </Modal>
                        </div>
                        <div className="col-md-3">
                            <img className="burung-img" src={ElangImg}
                            width="150px" height="150px" alt="elang"
                            onClick={this.onOpenElangModal}
                            />
                            <p className="burung-subtitle">Elang</p>
                            <Modal visible={this.state.openElangModalActive} width="800" height="500" effect="fadeInDown" onClickAway={() => this.onCloseElangModal()}>
                                <div className="modal-header">
                                    <h5 class="modal-title">Manuk elang modal</h5>
                                    <button type="button" class="close" aria-label="Close" onClick={this.onCloseElangModal}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    content appeared here
                                </div>
                            </Modal>
                        </div>
                        <div className="col-md-3">
                            <img className="burung-img" src={GagakImg}
                            width="150px" height="150px" alt="gagak"
                            onClick={this.onOpenGagakModal}
                            />
                            <p className="burung-subtitle">Gagak</p>
                            <Modal visible={this.state.openGagakModalActive} width="800" height="500" effect="fadeInDown" onClickAway={() => this.onCloseGagakModal()}>
                                <div className="modal-header">
                                    <h5 class="modal-title">Manuk gagak modal</h5>
                                    <button type="button" class="close" aria-label="Close" onClick={this.onCloseGagakModal}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    content appeared here
                                </div>
                            </Modal>
                        </div>
                        <div className="col-md-3">
                            <img className="burung-img" src={BurungHantuImg}
                            width="150px" height="150px" alt="burung-hantu"
                            onClick={this.onOpenBurungHantuModal}
                            />
                            <p className="burung-subtitle">Guwek</p>
                            <Modal visible={this.state.openBurungHantuModalActive} width="800" height="500" effect="fadeInDown" onClickAway={() => this.onCloseBurungHantuModal()}>
                                <div className="modal-header">
                                    <h5 class="modal-title">Manuk guwek modal</h5>
                                    <button type="button" class="close" aria-label="Close" onClick={this.onCloseBurungHantuModal}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    content appeared here
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Birds;