import React, {Component} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import skatecomplet1 from "../assets/skatecomplet1.jpeg";
import skatecomplet2 from "../assets/skatecomplet2.jpeg";
import skatecomplet3 from "../assets/skatecomplet3.jpeg";
import skatecomplet4 from "../assets/skatecomplet4.jpeg";
import skatecomplet5 from "../assets/skatecomplet5.jpeg";
import skatecomplet6 from "../assets/skatecomplet6.jpeg";
import skatecomplet7 from "../assets/skatecomplet7.jpeg";
import skatecomplet8 from "../assets/skatecomplet8.jpeg";
import skatecomplet9 from "../assets/skatecomplet9.jpeg";

import './TrucksComp.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

class SkateComp extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="tittre">Skateboards complets</h2>
                <Row xs={1} md={3} className="g-4" >
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skatecomplet1} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skatecomplet2} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skatecomplet3} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skatecomplet4} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skatecomplet5} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skatecomplet6} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skatecomplet7} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skatecomplet8} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skatecomplet9} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                <hr/>

            </div>
        );
    }
}

export default SkateComp;