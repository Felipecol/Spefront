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
import ProtectionComp from "./ProtectionComp";
AOS.init();

class PlancheComp extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="tittre gradient-text">Planches de skate</h1>
                {/*------------------------ 3 cartes flip  ----------------------*/}
                <div className="troiscard"
                     data-aos="fade-up"
                     data-aos-duration="1000"
                     data-aos-delay="25"
                     data-aos-easing="ease-in-out-cubic"
                >
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img className="frontimg" variant="top" src={skateboard1} alt="Planche de skate" />
                                <h2>PALMS DECK</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h2 className="backtitle">PALMS DECK</h2>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={skateboard1} alt="Planche de skate" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img className="frontimg" variant="top" src={skateboard2} alt="Planche de skate" />
                                <h2>TARGET DECK</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h2 className="backtitle">TARGET DECK</h2>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={skateboard2} alt="Planche de skate" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img className="frontimg" variant="top" src={skateboard3} alt="Planche de skate" />
                                <h2>PARTY DECK</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h2 className="backtitle">PARTY DECK</h2>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={skateboard3} alt="Planche de skate" />
                            </div>
                        </div>
                    </div>
                </div>
                {/*------------------------ 3 cartes flip  ----------------------*/}
                <div className="troiscard"
                     data-aos="fade-up"
                     data-aos-duration="1000"
                     data-aos-delay="25"
                     data-aos-easing="ease-in-out-cubic"
                >
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img className="frontimg" variant="top" src={skateboard4} alt="Planche de skate" />
                                <h2>VISASTER DECK</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h2 className="backtitle">VISASTER DECK</h2>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={skateboard4} alt="Planche de skate" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img className="frontimg" variant="top" src={skateboard5} alt="Planche de skate" />
                                <h2>RUN YOUR LIFE DECK</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h2 className="backtitle">RUN YOUR LIFE DECK</h2>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={skateboard5} alt="Planche de skate" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img className="frontimg" variant="top" src={skateboard6} alt="Planche de skate" />
                                <h2>OG LOGO DECK</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h2 className="backtitle">OG LOGO DECK</h2>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={skateboard6} alt="Planche de skate" />
                            </div>
                        </div>
                    </div>
                </div>
                {/*------------------------ 3 cartes flip  ----------------------*/}
                <div className="troiscard"
                     data-aos="fade-up"
                     data-aos-duration="1000"
                     data-aos-delay="25"
                     data-aos-easing="ease-in-out-cubic"
                >
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img className="frontimg" variant="top" src={skateboard7} alt="Planche de skate" />
                                <h2>GOLDEN DECK</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h2 className="backtitle">GOLDEN DECK</h2>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={skateboard7} alt="Planche de skate" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img className="frontimg" variant="top" src={skateboard8} alt="Planche de skate" />
                                <h2>BUBBLE HEAD DECK</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h2 className="backtitle">BUBBLE HEAD DECK</h2>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={skateboard8} alt="Planche de skate" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img className="frontimg" variant="top" src={skateboard9} alt="Planche de skate" />
                                <h2>CROWN DECK</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h2 className="backtitle">CROWN DECK</h2>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={skateboard9} alt="Planche de skate" />
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