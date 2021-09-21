import React, {Component} from 'react';
import './PlancheComp.css';
import {Animated} from "react-animated-css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import skateboard1 from '../assets/skateboard1.jpeg'
import {Card, Col, Row} from "react-bootstrap";
import skater3 from "../assets/skater3.png";
AOS.init();

class PlancheComp extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="tittre">Planche de skate</h2>
                <Row xs={1} md={3} className="g-4" >
                    <Col>
                        <Animated className="skateranim">
                            <Card data-aos='fade-up' data-aos-delay='220'>
                                <Card.Img variant="top" src={skateboard1} />
                                <Card.Body>
                                    <Card.Title>Board Nomad</Card.Title>
                                </Card.Body>
                            </Card>
                        </Animated>
                    </Col>
                    <Col>
                        <Animated className="skateranim">
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard1} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                        </Animated>
                    </Col>
                    <Col>
                        <Animated className="skateranim">
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard1} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                        </Animated>
                    </Col>
                    <Col>
                        <Animated className="skateranim">
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard1} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                        </Animated>
                    </Col>
                    <Col>
                        <Animated className="skateranim">
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard1} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                        </Animated>
                    </Col>
                    <Col>
                        <Animated className="skateranim">
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard1} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                        </Animated>
                    </Col>
                    <Col>
                        <Animated className="skateranim">
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard1} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                        </Animated>
                    </Col>
                    <Col>
                        <Animated className="skateranim">
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard1} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                        </Animated>
                    </Col>
                    <Col>
                            <Animated className="skateranim">
                                <Card data-aos='fade-up' data-aos-delay='220'>
                                    <Card.Img variant="top" src={skateboard1} />
                                        <Card.Body>
                                            <Card.Title>Board Nomad</Card.Title>
                                        </Card.Body>
                                    </Card>
                            </Animated>
                    </Col>

                </Row>
                    <hr/>

            </div>
        );
    }
}

export default PlancheComp;