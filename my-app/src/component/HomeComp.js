import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import skater5 from '../assets/skater5.jpeg';
import skater8 from '../assets/skater8.jpeg';
import skater3 from '../assets/skater3.png';
import trasher from '../assets/trasher1.jpeg';
import vans from '../assets/vans2.jpeg';
import volcom from '../assets/volcolm1.jpeg';
import supreme from '../assets/supreme2.jpeg';
import skateevent from '../assets/skateevent.webp';
import './HomeCom.css';
import {Card, Col, Row} from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

class HomeComp extends Component {
    render() {
        return (
            <div className= "container" >
                {/*---------------------------------------- CAROUSEL -----------------------------------------*/}
                <Carousel fade className="">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={skater8}
                            alt="First slide"
                        />
                        <Carousel.Caption >
                            <h1><b>&#123;s&#x7D;katalog</b></h1>
                            <p><b>&#123;s&#x7D;katalog votre catalogue de skate en ligne</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={skater5}
                            alt="Second slide"

                        />
                        <Carousel.Caption>
                            <h1><b>&#123;s&#x7D;katalog</b></h1>
                            <p><b>&#123;s&#x7D;katalog votre catalogue de skate en ligne</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={skater3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h1><b>&#123;s&#x7D;katalog</b></h1>
                            <p><b>&#123;s&#x7D;katalog votre catalogue de skate en ligne</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/*---------------------------------------- 4 CARDS MARQUE -----------------------------------------*/}
                <hr/>
                <div className="" >
                    <h2>Marques iconiques</h2>
                    <Row xs={1} md={2} className="g-4" >
                        <Col>
                            <Card data-aos='fade-up' data-aos-delay='220'>
                                <Card.Img variant="top" src={trasher} />
                                    <Card.Body>
                                        <Card.Title>Trasher</Card.Title>
                                            <Card.Text>
                                                Les vêtements Thrasher avec des slogans comme "Skate And Destroy" et le logo emblématique Skate Goat sont un incontournable pour tous les skateurs.
                                            </Card.Text>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card data-aos='fade-up' data-aos-delay='220'>
                                <Card.Img variant="top" src={vans} />
                                <Card.Body>
                                    <Card.Title>Vans</Card.Title>
                                    <Card.Text>
                                        Vans est synonyme de chaussures de skate et ce depuis 1966. La marque californienne a cimenté sa place dans le skate avec ses semelles gaufrées et est là pour rester.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card data-aos='fade-up' data-aos-delay='220'>
                                <Card.Img variant="top" src={volcom} />
                                <Card.Body>
                                    <Card.Title>Volcom</Card.Title>
                                    <Card.Text>
                                        Avec le streetwear de Volcom, vous êtes parfaitement équipé pour chaque session de skate. La marque avec le logo "Volcom Stone" se concentre sur des designs créatifs depuis plus de 20 ans.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card data-aos='fade-up' data-aos-delay='220'>
                                <Card.Img variant="top" src={supreme} />
                                <Card.Body>
                                    <Card.Title>Supreme</Card.Title>
                                    <Card.Text>
                                        Supreme est une marque de vêtements streetwear et accessoires de mode fondée à New York en 1994 par James Jebbia. Le personnel et les clients du magasin étaient principalement constitués de jeunes skateurs.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <hr/>
                    {/*---------------------------------------- EVENt + CARD  -----------------------------------------*/}
                    <h2>Événement récent</h2>
                    <Row className="eventpage" >
                    <Col>
                            <Card.Body data-aos="zoom-in" data-aos-delay='420'>
                                <Card.Title>VANS PARK SERIES</Card.Title>
                                <Card.Text>
                                    Comme l'an dernier, les Vans Park Series 2022 se dérouleront à Chelles, près de Paris. Cette étape française, qui s'inscrit dans la phase de qualifications internationales, aura lieu les 19 et 20 juin.
                                </Card.Text>
                            </Card.Body>
                    </Col>
                        <Col>
                            <Card data-aos='fade-up' data-aos-delay='220'>
                                <Card.Img variant="top" src={skateevent} />

                            </Card>
                        </Col>
                    </Row>
                    <hr/>
                </div>

            </div>


        );
    }
}

export default HomeComp;