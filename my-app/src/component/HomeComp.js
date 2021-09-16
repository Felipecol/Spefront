import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import skater5 from '../assets/skater5.jpeg';
import skater8 from '../assets/skater8.jpeg';
import skater3 from '../assets/skater3.png';
import './HomeCom.css';

class HomeComp extends Component {
    render() {
        return (
            <div className= "container">
                <Carousel fade className="">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={skater8}

                        />
                        <Carousel.Caption >
                            <h3><b>&#123;s&#x7D;katalog</b></h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={skater5}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={skater3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default HomeComp;