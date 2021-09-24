import React, {Component} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import roues1 from "../assets/roues1.jpeg";
import roues2 from "../assets/roues2.jpeg";
import roues3 from "../assets/roues3.jpeg";
import roues4 from "../assets/roues4.jpeg";
import roues5 from "../assets/roues5.jpeg";
import roues6 from "../assets/roues6.jpeg";
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
                            <Card.Img variant="top" src={roues1} />
                            <Card.Body>
                                <Card.Title>FORM WHEELS 53 MM RASTA</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={roues2} />
                            <Card.Body>
                                <Card.Title>FORM WHEELS 53 MM BLUE BLACK</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={roues3} />
                            <Card.Body>
                                <Card.Title>FORM WHEELS 53 MM BLACK WHITE</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={roues4} />
                            <Card.Body>
                                <Card.Title>FORM WHEELS 53 MM</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={roues5} />
                            <Card.Body>
                                <Card.Title>SPITFIRE WHEELS 53MM</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={roues6} />
                            <Card.Body>
                                <Card.Title>SPITFIRE WHEELS 53MM</Card.Title>
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