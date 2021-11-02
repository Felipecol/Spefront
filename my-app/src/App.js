import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComp from "./component/FooterComp";

import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Animated} from "react-animated-css";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import PlancheComp from "./component/PlancheComp";
import MailComp from "./component/MailComp";
import RouesComp from "./component/RouesComp";
import SkateComp from "./component/SkateComp";
import TrucksComp from "./component/TrucksComp";
import Yeptest from "./component/Yeptest";
import HomeComp from "./component/HomeComp";
import pagenotfound from "./component/pagenotfound";



function redir() {
    window.location.href="https://skatalog.netlify.app/";
}

function App() {
  return (
    <div className="App">
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
                            <a onClick={redir} className="logoskata" ><b>&#123;s&#x7D;katalog</b></a>
                        </Navbar.Brand>
                    </Animated>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="menuoff mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to={"/PlancheComp"}>Planche de skate</Nav.Link>
                            <Nav.Link as={Link} to={"/RouesComp"}>Roues</Nav.Link>
                            <Nav.Link as={Link} to={"/SkateComp"}>Skateboard complet</Nav.Link>
                            <Nav.Link as={Link} to={"/TrucksComp"}>Trucks</Nav.Link>
                            <Nav.Link as={Link} to={"/MailComp"}>Contact</Nav.Link>
                            <Nav.Link as={Link} to={"/Yeptest"} style={{display:"none"}}>Yeptest</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            <div>
                {/*---------------------------------------- route & switch  -----------------------------------------*/}
                <Switch>

                    <Route path="/PlancheComp" component={PlancheComp}/>

                    <Route path="/MailComp" component={MailComp}/>

                    <Route path="/RouesComp" component={RouesComp}/>

                    <Route path="/SkateComp" component={SkateComp}/>

                    <Route path="/TrucksComp" component={TrucksComp}/>

                    <Route path="/Yeptest" component={Yeptest}/>

                    <Route exact path="/" component={HomeComp}/>
                    <Route path="/*" component={pagenotfound}/>


                </Switch>
            </div>
        </Router>
        <FooterComp/>
    </div>
  );
}

export default App;
