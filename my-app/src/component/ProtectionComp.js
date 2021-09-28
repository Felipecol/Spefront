import React, {Component} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import skateboard1 from "../assets/skateboard1.jpeg";
import './ProtectionComp.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

class ProtectionCompProtectionComp extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="tittre">FAV</h2>
                <div className="troiscard">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Card.Img variant="top" src={skateboard1} />
                            <Card.Title>PALMS DECK</Card.Title>
                        </div>
                        <div className="flip-card-back">
                            <h3>PALMS DECK</h3>
                            <p>Deck size : 8.125</p>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Card.Img variant="top" src={skateboard1} />
                            <Card.Title>PALMS DECK</Card.Title>
                        </div>
                        <div className="flip-card-back">
                            <h3>test</h3>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Card.Img variant="top" src={skateboard1} />
                            <Card.Title>PALMS DECK</Card.Title>
                        </div>
                        <div className="flip-card-back">
                            <h3>test</h3>
                        </div>
                    </div>
                </div>
                </div>
                <div className="troiscard">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skateboard1} />
                                <Card.Title>PALMS DECK</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3>test</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skateboard1} />
                                <Card.Title>PALMS DECK</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3>test</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skateboard1} />
                                <Card.Title>PALMS DECK</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3>test</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="troiscard">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skateboard1} />
                                <Card.Title>PALMS DECK</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3>test</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skateboard1} />
                                <Card.Title>PALMS DECK</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3>test</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skateboard1} />
                                <Card.Title>PALMS DECK</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3>test</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProtectionCompProtectionComp;