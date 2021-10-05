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
import skateboard1 from "../assets/skateboard1.jpeg";
import Button from "react-bootstrap/Button";
AOS.init();


class RouesComp extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="tittre">Roues</h1>
                <div className="troiscard"
                     data-aos="fade-up"
                     data-aos-duration="1000"
                     data-aos-delay="25"
                     data-aos-easing="ease-in-out-cubic"
                >
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={roues1} />
                                <Card.Title>FORM WHEELS 53 MM RASTA</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">FORM WHEELS 53 MM RASTA</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={roues1} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={roues2} />
                                <Card.Title>FORM WHEELS 53 MM BLUE BLACK</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">FORM WHEELS 53 MM BLUE BLACK</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={roues2} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={roues3} />
                                <Card.Title>FORM WHEELS 53 MM BLACK WHITE</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">FORM WHEELS 53 MM BLACK WHITE</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={roues3} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="troiscard"
                     data-aos="fade-up"
                     data-aos-duration="1000"
                     data-aos-delay="25"
                     data-aos-easing="ease-in-out-cubic"
                >
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={roues4} />
                                <Card.Title>FORM WHEELS 53 MM</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">FORM WHEELS 53 MM</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={roues4} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={roues5} />
                                <Card.Title>SPITFIRE WHEELS 53MM</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">SPITFIRE WHEELS 53MM</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={roues5} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={roues6} />
                                <Card.Title>SPITFIRE WHEELS 53MM</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">SPITFIRE WHEELS 53MM</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={roues6} />
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>
            </div>
        );
    }
}

export default RouesComp;