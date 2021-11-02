import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComp from "./component/FooterComp";

import React from "react";
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
