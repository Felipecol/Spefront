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
                <h1 className="tittre gradient-text">Trucks</h1>
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
                                <Card.Img variant="top" src={trucks1} alt="Trucks de skate" />
                                <h2>NORA TRIANGLE</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">NORA TRIANGLE</h3>
                                <p>Couleur: Jaune</p>
                                <p>Hauteur: Mid</p>
                                <p>Largeur: 5.6 (143 Mm)</p>
                                <p>Poids: 340G</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={trucks1} alt="Trucks de skate" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={trucks2} alt="Trucks de skate" />
                                <h2>MAG LIGHT LO SLICKS MULLEN</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">MAG LIGHT LO SLICKS MULLEN</h3>
                                <p>Couleur: Jaune</p>
                                <p>Hauteur: Mid</p>
                                <p>Largeur: 5.6 (143 Mm)</p>
                                <p>Poids: 340G</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={trucks2} alt="Trucks de skate" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={trucks3} alt="Trucks de skate" />
                                <h2>SILVAS OMNI POLISHED BLACK</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">SILVAS OMNI POLISHED BLACK</h3>
                                <p>Couleur: Jaune</p>
                                <p>Hauteur: Mid</p>
                                <p>Largeur: 5.6 (143 Mm)</p>
                                <p>Poids: 340G</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={trucks3} alt="Trucks de skate" />
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
                                <Card.Img variant="top" src={trucks4} alt="Trucks de skate" />
                                <h2>PRO MASON SILVA BLK SILVER</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">PRO MASON SILVA BLK SILVER</h3>
                                <p>Couleur: Jaune</p>
                                <p>Hauteur: Mid</p>
                                <p>Largeur: 5.6 (143 Mm)</p>
                                <p>Poids: 340G</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={trucks4} alt="Trucks de skate" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={trucks5} alt="Trucks de skate" />
                                <h2>FULL BLEED EDITION</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">FULL BLEED EDITION</h3>
                                <p>Couleur: Jaune</p>
                                <p>Hauteur: Mid</p>
                                <p>Largeur: 5.6 (143 Mm)</p>
                                <p>Poids: 340G</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={trucks5} alt="Trucks de skate" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={trucks6} alt="Trucks de skate" />
                                <h2>TEAM HOLLOW RAW</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">TEAM HOLLOW RAW</h3>
                                <p>Couleur: Jaune</p>
                                <p>Hauteur: Mid</p>
                                <p>Largeur: 5.6 (143 Mm)</p>
                                <p>Poids: 340G</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={trucks6} alt="Trucks de skate" />
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
                                <Card.Img variant="top" src={trucks7} alt="Trucks de skate" />
                                <h2>MAG LIGHT SLICKS DAEWON SONG</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">MAG LIGHT SLICKS DAEWON SONG</h3>
                                <p>Couleur: Jaune</p>
                                <p>Hauteur: Mid</p>
                                <p>Largeur: 5.6 (143 Mm)</p>
                                <p>Poids: 340G</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={trucks7} alt="Trucks de skate" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={trucks8} alt="Trucks de skate" />
                                <h2>MAG LIGHT REFLECT SILVER RED</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">MAG LIGHT REFLECT SILVER RED</h3>
                                <p>Couleur: Jaune</p>
                                <p>Hauteur: Mid</p>
                                <p>Largeur: 5.6 (143 Mm)</p>
                                <p>Poids: 340G</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={trucks8} alt="Trucks de skate" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/*------------------------ front card ----------------------*/}
                            <div className="flip-card-front">
                                <Card.Img variant="top" src={trucks9} alt="Trucks de skate" />
                                <h2>ALUM STENC MIR RAW LT BLUE FADE</h2>
                            </div>
                            {/*------------------------ back card ----------------------*/}
                            <div className="flip-card-back">
                                <h3 className="backtitle">ALUM STENC MIR RAW LT BLUE FADE</h3>
                                <p>Couleur: Jaune</p>
                                <p>Hauteur: Mid</p>
                                <p>Largeur: 5.6 (143 Mm)</p>
                                <p>Poids: 340G</p>
                                <p>Prix : 54,95 €</p>
                                <Card.Img className="backimg" variant="top" src={trucks9} alt="Trucks de skate" />
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