import React, {Component} from 'react';
import {Navbar, Nav} from "react-bootstrap";
import './NavbarComp.css';
import {Animated} from "react-animated-css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import PlancheComp from "./PlancheComp";
import ProtectionComp from "./ProtectionComp";
import RouesComp from "./RouesComp";
import SkateComp from "./SkateComp";
import TrucksComp from "./TrucksComp";
import HomeComp from "./HomeComp";
import pagenotfound from "./pagenotfound";
import MailComp from "./MailComp";
import Yeptest from "./Yeptest";


class navbar extends Component {

    render() {
        return (
            <Router>
              <div className="">
                  {/*---------------------------------------- menu navbar  -----------------------------------------*/}
                    <Navbar className="lanavbar" bg="" variant={"light"} expand="lg"
                            data-aos="fade-down"
                            data-aos-duration="500"
                            data-aos-delay="50"
                            data-aos-easing="ease-in-out-cubic"
                    >

                        <div className="skaterfouu">
                                <lottie-player className="safari" alt="logo skater" src="https://assets10.lottiefiles.com/packages/lf20_HrNNmm.json"  background="rgba(0, 0, 0, 0)"  speed="1"   loop  autoplay></lottie-player>
                        </div>
                        <Animated isVisible={true}>
                            <Navbar.Brand className="skatalog" >
                                <a><b>&#123;s&#x7D;katalog</b></a>
                            </Navbar.Brand>
                        </Animated>

                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="menuoff mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to={"/HomeComp"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/PlancheComp"}>Planche de skate</Nav.Link>
                                <Nav.Link as={Link} to={"/RouesComp"}>Roues</Nav.Link>
                                <Nav.Link as={Link} to={"/SkateComp"}>Skateboard complet</Nav.Link>
                                <Nav.Link as={Link} to={"/TrucksComp"}>Trucks</Nav.Link>
                                <Nav.Link as={Link} to={"/MailComp"}>Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    {/*---------------------------------------- route & switch  -----------------------------------------*/}
                    <Switch>

                        <Route exact path="/PlancheComp" component={PlancheComp}/>


                        <Route exact path="/MailComp" component={MailComp}/>


                        <Route exact path="/RouesComp" component={RouesComp}/>


                        <Route exact path="/SkateComp" component={SkateComp}/>


                        <Route exact path="/TrucksComp" component={TrucksComp}/>

                        <Route path="/Yeptest" component={Yeptest}/>

                        <Route path="/" component={HomeComp}/>


                    </Switch>
                </div>
           </Router>
        );
    }
}

export default navbar;