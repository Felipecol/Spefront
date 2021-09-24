import React, {Component} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import trucks1 from "../assets/trucks1.jpeg";
import trucks2 from "../assets/trucks2.jpeg";
import trucks3 from "../assets/trucks3.jpeg";
import trucks4 from "../assets/trucks4.jpeg";
import trucks5 from "../assets/trucks5.jpeg";
import trucks6 from "../assets/trucks6.jpeg";
import trucks7 from "../assets/trucks7.jpeg";
import trucks8 from "../assets/trucks8.jpeg";
import trucks9 from "../assets/trucks9.jpeg";
import './TrucksComp.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

class TrucksComp extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="tittre">Trucks</h2>
                <Row xs={1} md={3} className="g-4" >
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={trucks1} />
                            <Card.Body>
                                <Card.Title>NORA TRIANGLE</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={trucks2} />
                            <Card.Body>
                                <Card.Title>MAG LIGHT LO SLICKS MULLEN</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={trucks3} />
                            <Card.Body>
                                <Card.Title>SILVAS OMNI POLISHED BLACK</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={trucks4} />
                            <Card.Body>
                                <Card.Title>PRO MASON SILVA BLK SILVER</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={trucks5} />
                            <Card.Body>
                                <Card.Title>FULL BLEED EDITION</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={trucks6} />
                            <Card.Body>
                                <Card.Title>TEAM HOLLOW RAW</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={trucks7} />
                            <Card.Body>
                                <Card.Title>MAG LIGHT SLICKS DAEWON SONG</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={trucks8} />
                            <Card.Body>
                                <Card.Title>MAG LIGHT REFLECT SILVER RED</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos='fade-up' data-aos-delay='220'>
                            <Card.Img variant="top" src={trucks9} />
                            <Card.Body>
                                <Card.Title>ALUM STENC MIR RAW LT BLUE FADE</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr/>

            </div>
        );
    }
}

export default TrucksComp;