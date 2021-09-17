import React, {Component} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import skateboard1 from "../assets/skateboard1.jpeg";
import './RouesComp.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


class RouesComp extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="tittre">Roues</h2>
                <Row xs={1} md={3} className="g-4" >
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard1} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard1} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard1} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard1} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard1} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard1} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard1} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard1} />
                            <Card.Body>
                                <Card.Title>Board Nomad</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={skateboard1} />
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

export default RouesComp;