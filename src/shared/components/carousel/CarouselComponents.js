import React from 'react';
import './CarouselComponents.css';
import Carousel from 'react-bootstrap/Carousel';

class CarouselComponents extends React.Component {
    render() {
        return (
            <div className="carouselComponent">
                <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.efsa.europa.eu/sites/default/files/styles/news_individual_node_image/public/amr_slider2_170124.png?itok=Jc5DoW_M"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.efsa.europa.eu/sites/default/files/styles/news_individual_node_image/public/amr_slider2_170124.png?itok=Jc5DoW_M"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.efsa.europa.eu/sites/default/files/styles/news_individual_node_image/public/amr_slider2_170124.png?itok=Jc5DoW_M"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        )
    }
}

export default CarouselComponents;