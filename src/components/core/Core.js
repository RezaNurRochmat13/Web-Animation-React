import React from 'react';
import './Core.css';
import Card from 'react-bootstrap/Card'

class Core extends React.Component {
    render() {
        return (
            <div className="Container">
                <div className="row">
                    <div className="col-md-4">
                    <Card>
                        <Card.Link href="/mamalia">
                            <Card.Img variant="top" 
                            src="https://previews.123rf.com/images/drekhann/drekhann1708/drekhann170800094/84589437-cute-cartoon-cats-and-dogs-with-different-emotions-sticker-collection-set-of-doodle-emoji-and-emotic.jpg"
                            width="200px" />
                        </Card.Link>
                        <Card.Body>
                        <Card.Text>
                            Mamalia
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <br/>
                    <Card>
                        <Card.Link href="/burung">
                            <Card.Img variant="top" 
                            src="https://previews.123rf.com/images/drekhann/drekhann1708/drekhann170800094/84589437-cute-cartoon-cats-and-dogs-with-different-emotions-sticker-collection-set-of-doodle-emoji-and-emotic.jpg"
                            width="200px" />
                        </Card.Link>
                        <Card.Body>
                        <Card.Text>
                            Burung
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    </div>
                    <div className="col-md-4">
                    <Card>
                        <Card.Link href="/amphibi">
                            <Card.Img variant="top" 
                            src="https://previews.123rf.com/images/drekhann/drekhann1708/drekhann170800094/84589437-cute-cartoon-cats-and-dogs-with-different-emotions-sticker-collection-set-of-doodle-emoji-and-emotic.jpg"
                            width="200px" />
                        </Card.Link>
                        <Card.Body>
                        <Card.Text>
                            Amphibi
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Link href="/reptile">
                            <Card.Img variant="top" 
                            src="https://previews.123rf.com/images/drekhann/drekhann1708/drekhann170800094/84589437-cute-cartoon-cats-and-dogs-with-different-emotions-sticker-collection-set-of-doodle-emoji-and-emotic.jpg"
                            width="200px" />
                        </Card.Link>
                        <Card.Body>
                        <Card.Text>
                            Reptil
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col-md-4">
                    <Card>
                        <Card.Link href="/ikan">
                            <Card.Img variant="top" 
                            src="https://previews.123rf.com/images/drekhann/drekhann1708/drekhann170800094/84589437-cute-cartoon-cats-and-dogs-with-different-emotions-sticker-collection-set-of-doodle-emoji-and-emotic.jpg"
                            width="200px" />
                        </Card.Link>
                        <Card.Body>
                        <Card.Text>
                            Ikan
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    </div>
                </div>
            </div>
        )
    }
}

export default Core;