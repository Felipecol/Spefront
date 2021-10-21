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
                <h1 className="tittre gradient-text">Roues</h1>
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
                                <Card.Img variant="top" src={roues1} alt="Roues de skate" />
                                <h2>FORM WHEELS 53 MM RASTA</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">FORM WHEELS 53 MM RASTA</h3>
                                <p>Couleur: Bleu</p>
                                <p>Diamètre: 52Mm</p>
                                <p>Dureté: 103A</p>
                                <p>Couleur Secondaire: Noir</p>
                                <p>Prix : 22,95 €</p>
                                <Card.Img className="backimg" variant="top" src={roues1} alt="Roues de skate" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={roues2} alt="Roues de skate" />
                                <h2>FORM WHEELS 53 MM BLUE BLACK</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">FORM WHEELS 53 MM BLUE BLACK</h3>
                                <p>Couleur: Bleu</p>
                                <p>Diamètre: 52Mm</p>
                                <p>Dureté: 103A</p>
                                <p>Couleur Secondaire: Noir</p>
                                <p>Prix : 22,95 €</p>
                                <Card.Img className="backimg" variant="top" src={roues2} alt="Roues de skate" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={roues3} />
                                <h2>FORM WHEELS 53 MM BLACK WHITE</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">FORM WHEELS 53 MM BLACK WHITE</h3>
                                <p>Couleur: Bleu</p>
                                <p>Diamètre: 52Mm</p>
                                <p>Dureté: 103A</p>
                                <p>Couleur Secondaire: Noir</p>
                                <p>Prix : 22,95 €</p>
                                <Card.Img className="backimg" variant="top" src={roues3} alt="Roues de skate" />
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
                                <Card.Img variant="top" src={roues4} alt="Roues de skate" />
                                <h2>FORM WHEELS 53 MM</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">FORM WHEELS 53 MM</h3>
                                <p>Couleur: Bleu</p>
                                <p>Diamètre: 52Mm</p>
                                <p>Dureté: 103A</p>
                                <p>Couleur Secondaire: Noir</p>
                                <p>Prix : 22,95 €</p>
                                <Card.Img className="backimg" variant="top" src={roues4} alt="Roues de skate" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={roues5} alt="Roues de skate" />
                                <h2>SPITFIRE WHEELS 53MM</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">SPITFIRE WHEELS 53MM</h3>
                                <p>Couleur: Bleu</p>
                                <p>Diamètre: 52Mm</p>
                                <p>Dureté: 103A</p>
                                <p>Couleur Secondaire: Noir</p>
                                <p>Prix : 22,95 €</p>
                                <Card.Img className="backimg" variant="top" src={roues5} alt="Roues de skate" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={roues6} alt="Roues de skate" />
                                <h2>SPITFIRE WHEELS 53MM</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">SPITFIRE WHEELS 53MM</h3>
                                <p>Couleur: Bleu</p>
                                <p>Diamètre: 52Mm</p>
                                <p>Dureté: 103A</p>
                                <p>Couleur Secondaire: Noir</p>
                                <p>Prix : 22,95 €</p>
                                <Card.Img className="backimg" variant="top" src={roues6} alt="Roues de skate" />
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