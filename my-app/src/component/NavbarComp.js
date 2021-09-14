import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PlancheComp from "./PlancheComp";
import ProtectionComp from "./ProtectionComp";
import RouesComp from "./RouesComp";
import SkateComp from "./SkateComp";
import TrucksComp from "./TrucksComp";


class navbar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">SkateShop</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to={"/PlancheComp"}>Planche de skate</Nav.Link>
                                <Nav.Link as={Link} to={"/RouesComp"}>Roues</Nav.Link>
                                <Nav.Link as={Link} to={"/ProtectionComp"}>Protections</Nav.Link>
                                <Nav.Link as={Link} to={"/SkateComp"}>Skateboard complet</Nav.Link>
                                <Nav.Link as={Link} to={"/TrucksComp"}>Trucks</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/PlancheComp">
                            <PlancheComp/>
                        </Route>
                        <Route path="/ProtectionComp">
                            <ProtectionComp />
                        </Route>
                        <Route path="/RouesComp">
                            <RouesComp />
                        </Route>
                        <Route path="/SkateComp">
                            <SkateComp/>
                        </Route>
                        <Route path="/TrucksComp">
                            <TrucksComp/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default navbar;