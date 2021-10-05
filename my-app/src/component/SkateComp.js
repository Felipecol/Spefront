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

import './SkateComp.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import skateboard1 from "../assets/skateboard1.jpeg";
import Button from "react-bootstrap/Button";
AOS.init();

class SkateComp extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="tittre">Skateboards complets</h2>
                <div className="troiscard">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skatecomplet1} />
                                <Card.Title>CAT & DOG BLUE</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">CAT & DOG BLUE</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={skatecomplet1} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skatecomplet2} />
                                <Card.Title>THE CAPTAIN PINK</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">THE CAPTAIN PINK</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={skatecomplet2} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skatecomplet3} />
                                <Card.Title>PANDA STRIPES RESIN</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">PANDA STRIPES RESIN</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={skatecomplet3} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="troiscard">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skatecomplet4} />
                                <Card.Title>TIMEWORKS GREEN TIE DYE</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">TIMEWORKS GREEN TIE DYE</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={skatecomplet4} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skatecomplet5} />
                                <Card.Title>DICEY FOIL</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">DICEY FOIL</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={skatecomplet5} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skatecomplet6} />
                                <Card.Title>FURRY MONSTER</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">FURRY MONSTER</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={skatecomplet6} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="troiscard">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skatecomplet7} />
                                <Card.Title>VICE MONSTER</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">VICE MONSTER</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={skatecomplet7} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skatecomplet8} />
                                <Card.Title>MISFIT PANDA BLACK</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">MISFIT PANDA BLACK</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={skatecomplet8} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skatecomplet9} />
                                <Card.Title>SCREAMING HAND</Card.Title>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="backtitle">SCREAMING HAND</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Button className="buttonback" variant="outline-dark">Favoris</Button>
                                <Card.Img className="backimg" variant="top" src={skatecomplet9} />
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default SkateComp;