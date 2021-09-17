import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import skater5 from '../assets/skater5.jpeg';
import skater8 from '../assets/skater8.jpeg';
import skater3 from '../assets/skater3.png';
import './HomeCom.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Card, Col, Row} from "react-bootstrap";
AOS.init();

class HomeComp extends Component {
    render() {
        return (
            <div className= "" >
                {/*---------------------------------------- CAROUSEL -----------------------------------------*/}
                <Carousel fade className="">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={skater8}
                            alt="First slide"
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
                            <h3><b>&#123;s&#x7D;katalog</b></h3>
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
                            <h3><b>&#123;s&#x7D;katalog</b></h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/*---------------------------------------- 4 CARDS -----------------------------------------*/}
                <div className="container" >
                    <Row xs={1} md={2} className="g-4" >
                        <Col>
                            <Card data-aos='fade-up' data-aos-delay='220'>
                                <Card.Img variant="top" src={skater3} />
                                    <Card.Body>
                                        <Card.Title>&#123;s&#x7D;katalog</Card.Title>
                                            <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                            </Card.Text>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card data-aos='fade-up' data-aos-delay='220'>
                                <Card.Img variant="top" src={skater3} />
                                <Card.Body>
                                    <Card.Title>&#123;s&#x7D;katalog</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card data-aos='fade-up' data-aos-delay='220'>
                                <Card.Img variant="top" src={skater3} />
                                <Card.Body>
                                    <Card.Title>&#123;s&#x7D;katalog</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card data-aos='fade-up' data-aos-delay='220'>
                                <Card.Img variant="top" src={skater3} />
                                <Card.Body>
                                    <Card.Title>&#123;s&#x7D;katalog</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <hr/>
                    {/*---------------------------------------- EVENt + CARD  -----------------------------------------*/}

                    <Row>
                    <Col>
                            <Card.Body data-aos="zoom-in" data-aos-delay='420'>
                                <Card.Title>&#123;s&#x7D;katalog EVENT</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                    </Col>
                        <Col>
                            <Card data-aos='fade-up' data-aos-delay='220'>
                                <Card.Img variant="top" src={skater3} />
                                <Card.Body>
                                    <Card.Title>&#123;s&#x7D;katalog</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <hr/>
                </div>

            </div>


        );
    }
}

export default HomeComp;