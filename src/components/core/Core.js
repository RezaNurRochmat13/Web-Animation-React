import React from 'react';
import './Core.scss';
import Card from 'react-bootstrap/Card';
import CarouselComponent from '../../shared/components/carousel/CarouselComponents';

class Core extends React.Component {
    render() {
        return (
            <div className="core">
                <CarouselComponent />
                <div className="Container">
                <div className="row">
                    <div className="col-md-4">
                    <Card id="mamalia-cards">
                        <Card.Link href="/mamalia">
                            <img 
                            src="https://previews.123rf.com/images/drekhann/drekhann1708/drekhann170800094/84589437-cute-cartoon-cats-and-dogs-with-different-emotions-sticker-collection-set-of-doodle-emoji-and-emotic.jpg"
                            alt="mamalia" 
                            className="core-card-images"/>
                        </Card.Link>
                        <Card.Body>
                        <Card.Text>
                            <p className="core-card-text">Mamalia</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <br/>
                    <Card id="mamalia-cards">
                        <Card.Link href="/burung">
                            <img 
                            src="https://previews.123rf.com/images/drekhann/drekhann1708/drekhann170800094/84589437-cute-cartoon-cats-and-dogs-with-different-emotions-sticker-collection-set-of-doodle-emoji-and-emotic.jpg"
                            alt="burung" className="core-card-images" />
                        </Card.Link>
                        <Card.Body>
                        <Card.Text>
                            <p className="core-card-text ">Burung</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    </div>
                    <div className="col-md-4">
                    <Card id="mamalia-cards">
                        <Card.Link href="/amphibi">
                            <img
                            src="https://previews.123rf.com/images/drekhann/drekhann1708/drekhann170800094/84589437-cute-cartoon-cats-and-dogs-with-different-emotions-sticker-collection-set-of-doodle-emoji-and-emotic.jpg"
                            alt="amphibi"
                            className="core-card-images" />
                        </Card.Link>
                        <Card.Body>
                        <Card.Text>
                            <p className="core-card-text ">Amphibi</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card id="mamalia-cards">
                        <Card.Link href="/reptile">
                            <img 
                            src="https://previews.123rf.com/images/drekhann/drekhann1708/drekhann170800094/84589437-cute-cartoon-cats-and-dogs-with-different-emotions-sticker-collection-set-of-doodle-emoji-and-emotic.jpg"
                            alt="reptil"
                            className="core-card-images" />
                        </Card.Link>
                        <Card.Body>
                        <Card.Text>
                            <p className="core-card-text">Reptil</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col-md-4">
                    <Card id="mamalia-cards">
                        <Card.Link href="/ikan">
                            <img
                            src="https://previews.123rf.com/images/drekhann/drekhann1708/drekhann170800094/84589437-cute-cartoon-cats-and-dogs-with-different-emotions-sticker-collection-set-of-doodle-emoji-and-emotic.jpg"
                            alt="ikan"
                            className="core-card-images" />
                        </Card.Link>
                        <Card.Body>
                        <Card.Text>
                            <p className="core-card-text">Ikan</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Core;