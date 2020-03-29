import React from 'react';
import Modal from 'react-awesome-modal';
import './Amphibians.scss';
// Import static images
import KatakImages from './img/kodok.png';
import KatakSawahImages from './img/katak-sawah.jpeg';
import SalamanderImages from './img/salamander.jpg';
import KatakPohonImages from './img/katak-pohon.jpg';
// Import pages
import KatakPage from './page/katak/Katak';
import KatakPohonPage from './page/katak-pohon/KatakPohon';
import KatakSawahPage from './page/katak-sawah/KatakSawah';
import SalamanderPage from './page/salamander/Salamander';

class Amphibians extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.state = {
            openKatakModalActive: false,
            openKatakPohonModalActive: false,
            openKatakSawahModalActive: false,
            openSalamanderModalActive: false
        };
    }

    goBack() {
        this.props.history.goBack();
    }

    openKatakModal = () => {
        this.setState({openKatakModalActive: true});
    }

    closeKatakModal = () => {
        this.setState({openKatakModalActive: false});
    }

    openKatakPohonModal = () => {
        this.setState({openKatakPohonModalActive: true});
    }

    closeKatakPohonModal = () => {
        this.setState({openKatakPohonModalActive: false});
    }

    openKatakSawahModal = () => {
        this.setState({openKatakSawahModalActive: true});
    }

    closeKatakSawahModal = () => {
        this.setState({openKatakSawahModalActive: false});
    }

    openSalamanderModal = () => {
        this.setState({openSalamanderModalActive: true});
    }

    closeSalamanderModal = () => {
        this.setState({openSalamanderModalActive: false});
    }

    render() {
        return (
            <div className="Container">
                <a href="/" className="previous" onClick={this.goBack}>&laquo; Balik neng Menu Awal</a>
                <div className="amphibi-content-1">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={KatakImages} 
                            className="images-circle"
                            width="200px" height="200px" alt="frog" 
                            onClick={this.openKatakModal}/>
                            <p className="subtitle-images">Kodhok</p>
                            {/* Katak Modals Start */}
                            <Modal visible={this.state.openKatakModalActive} width="800" height="500" effect="fadeInDown" onClickAway={() => this.closeKatakModal()}>
                                <div className="modal-header">
                                    <h5 class="modal-title">Kodhok modal</h5>
                                    <button type="button" class="close" aria-label="Close" onClick={this.closeKatakModal}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <KatakPage />
                                </div>
                            </Modal>
                            {/* Katak Modals End */}
                        </div>
                        <div className="col-md-3">
                            <img src={KatakSawahImages} 
                            className="images-circle"
                            width="200px" height="200px" alt="frog_farm"
                            onClick={this.openKatakSawahModal} />
                            <p className="subtitle-images">Kodhok sawah</p>
                            {/* Katak Sawah Modals Start */}
                            <Modal visible={this.state.openKatakSawahModalActive} width="800" height="500" effect="fadeInDown" onClickAway={() => this.closeKatakSawahModal()}>
                                <div className="modal-header">
                                    <h5 class="modal-title">Kodhok Sawah modal</h5>
                                    <button type="button" class="close" aria-label="Close" onClick={this.closeKatakSawahModal}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <KatakSawahPage />
                                </div>
                            </Modal>
                            {/* Katak Sawah Modals End */}
                        </div>
                        <div className="col-md-3">
                            <img src={SalamanderImages} 
                            className="images-circle"
                            width="200px" height="200px" alt="salamander"
                            onClick={this.openSalamanderModal} />
                            <p className="subtitle-images">Salamander</p>
                            {/* Salamander Modals Start */}
                            <Modal visible={this.state.openSalamanderModalActive} width="800" height="500" effect="fadeInDown" onClickAway={() => this.closeSalamanderModal()}>
                                <div className="modal-header">
                                    <h5 class="modal-title">Salamander modal</h5>
                                    <button type="button" class="close" aria-label="Close" onClick={this.closeSalamanderModal}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <SalamanderPage />
                                </div>
                            </Modal>
                            {/* Salamander Modals End */}
                        </div>
                        <div className="col-md-3">
                            <img src={KatakPohonImages} 
                            className="images-circle"
                            width="200px" height="200px" alt="tree_frog"
                            onClick={this.openKatakPohonModal} />
                            <p className="subtitle-images">Kodhok Uwit</p>
                            {/* Katak Pohon Modals Start */}
                            <Modal visible={this.state.openKatakPohonModalActive} width="800" height="500" effect="fadeInDown" onClickAway={() => this.closeKatakPohonModal()}>
                                <div className="modal-header">
                                    <h5 class="modal-title">Kodhok Uwit modal</h5>
                                    <button type="button" class="close" aria-label="Close" onClick={this.closeKatakPohonModal}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <KatakPohonPage />
                                </div>
                            </Modal>
                            {/* Katak Pohon Modals End */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Amphibians;