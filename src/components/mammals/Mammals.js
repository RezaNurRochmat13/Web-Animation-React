import React from 'react';
import Modal from 'react-awesome-modal';
import KucingPages from './page/kucing/KucingPage';
import './Mammals.scss';

class Mammals extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.state = {
            openModalActive: false
        };
    }

    goBack() {
        this.props.history.goBack();
    }

    onOpenModal = () => {
        this.setState({openModalActive: true});
    }

    onCloseModal = () => {
        this.setState({openModalActive: false});
    }

    render() {

        return(
            <div className="Container">
                <a href="/" className="previous" onClick={this.goBack}>&laquo; Back to Menu Awal</a>
                <div className="mamalia-content-1">
                <div className="row">
                    <div className="col-md-3">
                        <img className="mamalia-image"
                        src="https://previews.123rf.com/images/jaaakworks/jaaakworks1511/jaaakworks151100094/48211278-cartoon-cats-standing.jpg"
                        width="200px" height="200px" alt="cats"
                        onClick={this.onOpenModal}/>
                        <p className="subtitle-mamalia-text">
                        Cemeng
                        </p>
                        {/* Kucing Modals Start */}
                        <Modal visible={this.state.openModalActive} width="800" height="500" effect="fadeInDown" onClickAway={() => this.onCloseModal()}>
                            <div className="modal-header">
                                <h5 class="modal-title">Cemeng modal</h5>
                                <button type="button" class="close" aria-label="Close" onClick={this.onCloseModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <KucingPages />
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => this.onCloseModal()}>Close Modal</button>
                            </div>
                        </Modal>
                        {/* Kucing Modals End */}
                    </div>
                    <div className="col-md-3">
                        <a href="/mamalia/anjing">
                            <img className="mamalia-image"
                            src="https://img3.stockfresh.com/files/r/robuart/m/72/8823746_stock-vector-cute-purebred-dogs-cartoon-flat-vectors-icons-set.jpg"
                            width="200px" height="200px" alt="dogs" />
                        </a>
                        <p className="subtitle-mamalia-text">
                        Segawon
                        </p>
                    </div>
                    <div className="col-md-3">
                        <a href="/mamalia/lumbalumba">
                            <img className="mamalia-image"
                            src="https://illustoon.com/photo/1783.png"
                            width="200px" height="200px" alt="dolphin" />
                        </a>
                        <p className="subtitle-mamalia-text">
                        Lumba-lumba
                        </p>
                    </div>
                    <div className="col-md-3">
                        <a href="/mamalia/harimau">                            
                            <img className="mamalia-image"
                            src="https://img.freepik.com/free-vector/tiger-cartoon-cute_119631-205.jpg?size=626&ext=jpg"
                            width="200px" height="200px" alt="tiger" />
                        </a>
                        <p className="subtitle-mamalia-text">
                        Macan
                        </p>
                    </div>
                </div>
                </div>
                <div className="mamalia-content-2">
                <div className="row">
                    <div className="col-md-3">
                        <a href="/mamalia/singa">
                            <img className="mamalia-image"
                            src="https://image.freepik.com/free-vector/cartoon-lion-posing-white-background_29190-5183.jpg"
                            width="200px" height="200px" alt="lion" />
                        </a>
                        <p className="subtitle-mamalia-text">
                        Singo
                        </p>
                    </div>
                    <div className="col-md-3">
                        <a href="/mamalia/kanguru">
                            <img className="mamalia-image"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyUYId5TxanORahN5JR2SRX4g6-cHlmSB4hkFLN03mJ1ZrImke"
                            width="200px" height="200px" alt="kanguru" />
                        </a>
                        <p className="subtitle-mamalia-text">
                        Kangguru
                        </p>
                    </div>
                    <div className="col-md-3">
                        <a href="/mamalia/kelinci">
                            <img className="mamalia-image"
                            src="https://image.freepik.com/free-vector/happy-rabbit-cartoon_43633-129.jpg"
                            width="200px" height="200px" alt="rabbits" />
                        </a>
                        <p className="subtitle-mamalia-text">
                        Terwelu
                        </p>
                    </div>
                    <div className="col-md-3">
                        <a href="/mamalia/kambing">
                            <img className="mamalia-image"
                            src="https://previews.123rf.com/images/dualororua/dualororua1605/dualororua160500016/56379057-cartoon-goat-character.jpg"
                            width="200px" height="200px" alt="goats" />
                        </a>
                        <p className="subtitle-mamalia-text">
                        Wedhus
                        </p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Mammals;