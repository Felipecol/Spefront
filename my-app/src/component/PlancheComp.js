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
import Button from "react-bootstrap/Button";
AOS.init();

class PlancheComp extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="tittre">Planches de skate</h2>
                <div className="troiscard">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skateboard1} />
                                <Card.Title>PALMS DECK</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">PALMS DECK</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={skateboard1} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skateboard2} />
                                <Card.Title>TARGET DECK</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">TARGET DECK</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={skateboard2} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skateboard3} />
                                <Card.Title>PARTY DECK</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">PARTY DECK</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={skateboard3} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="troiscard">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skateboard4} />
                                <Card.Title>VISASTER DECK</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">VISASTER DECK</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={skateboard4} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skateboard5} />
                                <Card.Title>RUN FOR YOUR LIFE DECK</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">RUN FOR YOUR LIFE DECK</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={skateboard5} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skateboard6} />
                                <Card.Title>OG LOGO DECK</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">OG LOGO DECK</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={skateboard6} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="troiscard">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skateboard7} />
                                <Card.Title>GOLDEN DECK</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">GOLDEN DECK</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={skateboard7} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skateboard8} />
                                <Card.Title>BUBBLE HEAD DECK</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">BUBBLE HEAD DECK</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={skateboard8} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skateboard9} />
                                <Card.Title>CROWN DECK</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">CROWN DECK</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={skateboard9} />
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default PlancheComp;