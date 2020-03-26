import React from 'react';
import Modal from 'react-awesome-modal';
import AnjingPages from './page/anjing/AnjingPage';
import HarimauPages from './page/harimau/HarimauPages';
import KelinciPages from './page/kelinci/Kelinci';
import KucingPages from './page/kucing/KucingPage';
import KanguruPages from './page/kanguru/Kanguru';
import KambingPages from './page/kambing/Kambing';
import LumbaLumbaPages from './page/lumba-lumba/LumbaLumba';
import SingaPages from './page/singa/Singa';
import './Mammals.scss';

// Loaded static image
import KucingImages from './img/kucing.jpg';
import AnjingImages from './img/anjing.jpg';
import LumbaLumbaImages from './img/lumba-lumba.png';
import HarimauImages from './img/harimau.jpg';
import SingaImages from './img/singa.jpg';
import KanguruImages from './img/kanguru.jpeg';
import KelinciImages from './img/kelinci.jpg';
import KambingImages from './img/kambing.jpg';

class Mammals extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.state = {
            openCatsModalActive: false,
            openDogsModalActive: false,
            openDolphinModalActive: false,
            openTigersModalActive: false,
            openLionsModalActive: false,
            openKangorooModalActive: false,
            openRabbitModalActive: false,
            openGoatModalActive: false
        };
    }

    goBack() {
        this.props.history.goBack();
    }

    // Cat modal function
    onOpenCatsModal = () => {
        this.setState({openCatsModalActive: true});
    }

    onCloseCatsModal = () => {
        this.setState({openCatsModalActive: false});
    }

    // Dog modal function
    onOpenDogsModal = () => {
        this.setState({openDogsModalActive: true});
    }

    onCloseDogsModal = () => {
        this.setState({openDogsModalActive: false});
    }

    // Dolphin modal function
    onOpenDolphinModal = () => {
        this.setState({openDolphinModalActive: true});
    }

    onCloseDolphinModal = () => {
        this.setState({openDolphinModalActive: false});
    }

    // Tiger modal function
    onOpenTigersModal = () => {
        this.setState({openTigersModalActive: true});
    }

    onCloseTigerModal = () => {
        this.setState({openTigersModalActive: false});
    }

    // Lion modal function
    onOpenLionModal = () => {
        this.setState({openLionsModalActive: true});
    }

    onCloseLionModal = () => {
        this.setState({openLionsModalActive: false});
    }

    // Kangoroo modal function
    onOpenKangorooModal = () => {
        this.setState({openKangorooModalActive: true});
    }

    onCloseKangorooModal = () => {
        this.setState({openKangorooModalActive: false});
    }

    // Rabbit modal function
    onOpenRabbitModal = () => {
        this.setState({openRabbitModalActive: true});
    }

    onCloseRabbitModal = () => {
        this.setState({openRabbitModalActive: false});
    }

    // Goat modal function
    onOpenGoatModal = () => {
        this.setState({openGoatModalActive: true});
    }

    onCloseGoatModal = () => {
        this.setState({openGoatModalActive: false});
    }

    render() {
        return(
            <div className="Container">
                <a href="/" className="previous" onClick={this.goBack}>&laquo; Back to Menu Awal</a>
                <div className="mamalia-content-1">
                <div className="row">
                    <div className="col-md-3">
                        <img className="mamalia-image" src={KucingImages}
                        width="200px" height="200px" alt="cats"
                        onClick={this.onOpenCatsModal}/>
                        <p className="subtitle-mamalia-text">
                        Cemeng
                        </p>
                        {/* Cat Modals Start */}
                        <Modal visible={this.state.openCatsModalActive} width="800" height="500" effect="fadeInDown" onClickAway={() => this.onCloseCatsModal()}>
                            <div className="modal-header">
                                <h5 class="modal-title">Cemeng modal</h5>
                                <button type="button" class="close" aria-label="Close" onClick={this.onCloseCatsModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <KucingPages />
                            </div>
                        </Modal>
                        {/* Cat Modals End */}
                    </div>
                    <div className="col-md-3">
                        <img className="mamalia-image" src={AnjingImages}
                        width="200px" height="200px" alt="dogs" 
                        onClick={this.onOpenDogsModal} />
                        <p className="subtitle-mamalia-text">
                        Segawon
                        </p>
                        {/* Dog Modals Start */}
                        <Modal visible={this.state.openDogsModalActive} width="800" height="500" effect="fadeInDown" onClickAway={() => this.onCloseDogsModal()}>
                            <div className="modal-header">
                                <h5 class="modal-title">Segawon modal</h5>
                                <button type="button" class="close" aria-label="Close" onClick={this.onCloseDogsModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <AnjingPages />
                            </div>
                        </Modal>
                        {/* Dog Modals End */}
                    </div>
                    <div className="col-md-3">
                        <img className="mamalia-image" src={LumbaLumbaImages}
                        width="200px" height="200px" alt="dolphin" 
                        onClick={this.onOpenDolphinModal}/>
                        <p className="subtitle-mamalia-text">
                        Lumba-lumba
                        </p>
                        {/* Dolphin Modals Start */}
                        <Modal visible={this.state.openDolphinModalActive} width="800" height="500" effect="fadeInDown" onClickAway={() => this.onCloseDolphinModal()}>
                            <div className="modal-header">
                                <h5 class="modal-title">Lumbalumba modal</h5>
                                <button type="button" class="close" aria-label="Close" onClick={this.onCloseDolphinModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <LumbaLumbaPages />
                            </div>
                        </Modal>
                        {/* Dolphin Modals End */}
                    </div>
                    <div className="col-md-3">                           
                        <img className="mamalia-image" src={HarimauImages}
                        width="200px" height="200px" alt="tiger" 
                        onClick={this.onOpenTigersModal} />
                        <p className="subtitle-mamalia-text">
                        Macan
                        </p>
                        {/* Tiger Modals Start */}
                        <Modal visible={this.state.openTigersModalActive} width="800" height="500" effect="fadeInDown" onClickAway={() => this.onCloseTigerModal()}>
                            <div className="modal-header">
                                <h5 class="modal-title">Macan modal</h5>
                                <button type="button" class="close" aria-label="Close" onClick={this.onCloseTigerModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <HarimauPages />
                            </div>
                        </Modal>
                        {/* Tiger Modals End */}
                    </div>
                </div>
                </div>
                <div className="mamalia-content-2">
                <div className="row">
                    <div className="col-md-3">
                        <img className="mamalia-image" src={SingaImages}
                        width="200px" height="200px" alt="lion" 
                        onClick={this.onOpenLionModal} />
                        <p className="subtitle-mamalia-text">
                        Singo
                        </p>
                        {/* Lion Modals Start */}
                        <Modal visible={this.state.openLionsModalActive} width="800" height="500" effect="fadeInDown" onClickAway={() => this.onCloseLionModal()}>
                            <div className="modal-header">
                                <h5 class="modal-title">Singo modal</h5>
                                <button type="button" class="close" aria-label="Close" onClick={this.onCloseLionModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <SingaPages />
                            </div>
                        </Modal>
                        {/* Lion Modals End */}
                    </div>
                    <div className="col-md-3">
                        <img className="mamalia-image" src={KanguruImages}
                        width="200px" height="200px" alt="kanguru" 
                        onClick={this.onOpenKangorooModal} />
                        <p className="subtitle-mamalia-text">
                        Kangguru
                        </p>
                        {/* Kangoroo Modals Start */}
                        <Modal visible={this.state.openKangorooModalActive} width="800" height="500" effect="fadeInDown" onClickAway={() => this.onCloseKangorooModal()}>
                            <div className="modal-header">
                                <h5 class="modal-title">Kanguru modal</h5>
                                <button type="button" class="close" aria-label="Close" onClick={this.onCloseKangorooModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <KanguruPages />
                            </div>
                        </Modal>
                        {/* Kangoroo Modals End */}
                    </div>
                    <div className="col-md-3">
                        <img className="mamalia-image" src={KelinciImages}
                        width="200px" height="200px" alt="rabbits" 
                        onClick={this.onOpenRabbitModal} />
                        <p className="subtitle-mamalia-text">
                        Terwelu
                        </p>
                        {/* Rabbit Modals Start */}
                        <Modal visible={this.state.openRabbitModalActive} width="800" height="500" effect="fadeInDown" onClickAway={() => this.onCloseRabbitModal()}>
                            <div className="modal-header">
                                <h5 class="modal-title">Terwelu modal</h5>
                                <button type="button" class="close" aria-label="Close" onClick={this.onCloseRabbitModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <KelinciPages />
                            </div>
                        </Modal>
                        {/* Rabbit Modals End */}
                    </div>
                    <div className="col-md-3">
                        <img className="mamalia-image" src={KambingImages}
                        width="200px" height="200px" alt="goats" 
                        onClick={this.onOpenGoatModal} />
                        <p className="subtitle-mamalia-text">
                        Wedhus
                        </p>
                        {/* Goat Modals Start */}
                        <Modal visible={this.state.openGoatModalActive} width="800" height="500" effect="fadeInDown" onClickAway={() => this.onCloseGoatModal()}>
                            <div className="modal-header">
                                <h5 class="modal-title">Wedhus modal</h5>
                                <button type="button" class="close" aria-label="Close" onClick={this.onCloseGoatModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <KambingPages />
                            </div>
                        </Modal>
                        {/* Goat Modals End */}
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Mammals;