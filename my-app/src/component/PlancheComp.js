import React, {Component} from 'react';
import './PlancheComp.css';
import {Animated} from "react-animated-css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import skateboard1 from '../assets/skateboard1.jpeg';
import skateboard2 from '../assets/skateboard2.jpeg';
import skateboard3 from '../assets/skateboard3.jpeg';
import skateboard4 from '../assets/skateboard4.jpeg';
import skateboard5 from '../assets/skateboard5.jpeg';
import skateboard6 from '../assets/skateboard6.jpeg';
import skateboard7 from '../assets/skateboard7.jpeg';
import skateboard8 from '../assets/skateboard8.jpeg';
import skateboard9 from '../assets/skateboard9.jpeg';
import {Card, Col, Row} from "react-bootstrap";
import skater3 from "../assets/skater3.png";
AOS.init();

class PlancheComp extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="tittre">Planches de skate</h2>
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
                            <Card.Img variant="top" src={skateboard2} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                        </Animated>
                    </Col>
                    <Col>
                        <Animated className="skateranim">
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard3} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                        </Animated>
                    </Col>
                    <Col>
                        <Animated className="skateranim">
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard4} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                        </Animated>
                    </Col>
                    <Col>
                        <Animated className="skateranim">
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard5} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                        </Animated>
                    </Col>
                    <Col>
                        <Animated className="skateranim">
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard6} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                        </Animated>
                    </Col>
                    <Col>
                        <Animated className="skateranim">
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard7} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                        </Animated>
                    </Col>
                    <Col>
                        <Animated className="skateranim">
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard8} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                        </Animated>
                    </Col>
                    <Col>
                        <Animated className="skateranim">
                            <Card data-aos='fade-up' data-aos-delay='220'>
                                <Card.Img variant="top" src={skateboard9} />
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