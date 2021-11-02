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
import NavbarComp from "./component/NavbarComp";



function redir() {
    window.location.href="https://skatalog.netlify.app/";
}

function App() {
  return (
    <div className="App">
        <NavbarComp/>
        <FooterComp/>
    </div>
  );
}

export default App;
