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
import Button from "react-bootstrap/Button";
AOS.init();

class TrucksComp extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="tittre">Trucks</h2>
                <div className="troiscard">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={trucks1} />
                                <Card.Title>NORA TRIANGLE</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">NORA TRIANGLE</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={trucks1} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={trucks2} />
                                <Card.Title>MAG LIGHT LO SLICKS MULLEN</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">MAG LIGHT LO SLICKS MULLEN</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={trucks2} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={trucks3} />
                                <Card.Title>SILVAS OMNI POLISHED BLACK</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">SILVAS OMNI POLISHED BLACK</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={trucks3} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="troiscard">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={trucks4} />
                                <Card.Title>PRO MASON SILVA BLK SILVER</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">PRO MASON SILVA BLK SILVER</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={trucks4} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={trucks5} />
                                <Card.Title>FULL BLEED EDITION</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">FULL BLEED EDITION</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={trucks5} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={trucks6} />
                                <Card.Title>TEAM HOLLOW RAW</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">TEAM HOLLOW RAW</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={trucks6} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="troiscard">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={trucks7} />
                                <Card.Title>MAG LIGHT SLICKS DAEWON SONG</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">MAG LIGHT SLICKS DAEWON SONG</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={trucks7} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={trucks8} />
                                <Card.Title>MAG LIGHT REFLECT SILVER RED</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">MAG LIGHT REFLECT SILVER RED</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={trucks8} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={trucks9} />
                                <Card.Title>ALUM STENC MIR RAW LT BLUE FADE</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">ALUM STENC MIR RAW LT BLUE FADE</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={trucks9} />
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default TrucksComp;