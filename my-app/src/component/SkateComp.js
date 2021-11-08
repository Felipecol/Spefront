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
                <h1 className="tittre gradient-text">Skateboards complets</h1>
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
                                <Card.Img variant="top" src={skatecomplet1} alt="Skateboard complet" />
                                <h2>CAT & DOG BLUE</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">CAT & DOG BLUE</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={skatecomplet1} alt="Skateboard complet" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skatecomplet2} alt="Skateboard complet" />
                                <h2>THE CAPTAIN PINK</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">THE CAPTAIN PINK</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={skatecomplet2} alt="Skateboard complet" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skatecomplet3} alt="Skateboard complet" />
                                <h2>PANDA STRIPES RESIN</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">PANDA STRIPES RESIN</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={skatecomplet3} alt="Skateboard complet" />
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
                                <Card.Img variant="top" src={skatecomplet4} alt="Skateboard complet" />
                                <h2>TIMEWORKS GREEN TIE DYE</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">TIMEWORKS GREEN TIE DYE</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={skatecomplet4} alt="Skateboard complet" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skatecomplet5} alt="Skateboard complet" />
                                <h2>DICEY FOIL</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">DICEY FOIL</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={skatecomplet5} alt="Skateboard complet" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skatecomplet6} alt="Skateboard complet" />
                                <h2>FURRY MONSTER</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">FURRY MONSTER</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={skatecomplet6} alt="Skateboard complet" />
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
                                <Card.Img variant="top" src={skatecomplet7} alt="Skateboard complet" />
                                <h2>VICE MONSTER</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">VICE MONSTER</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={skatecomplet7} alt="Skateboard complet" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skatecomplet8} alt="Skateboard complet" />
                                <h2>MISFIT PANDA BLACK</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">MISFIT PANDA BLACK</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={skatecomplet8} alt="Skateboard complet" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={skatecomplet9} alt="Skateboard complet" />
                                <h2>SCREAMING HAND</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">SCREAMING HAND</h3>
                                <p>Taille : 8.25"</p>
                                <p>Hauteur(cm) : 8.125</p>
                                <p>Largeur(cm) : 8.125</p>
                                <p>Poids(kg) : 8.125</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={skatecomplet9} alt="Skateboard complet" />
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