import React, {Component} from 'react';
import './Yeptest.css'


export default function Yeptest(){

    function redir() {
        window.location.href="https://skatalog.netlify.app/";
    }


        return (
            <div className="container"
                 data-aos="fade-up"
                 data-aos-duration="1000"
                 data-aos-delay="25"
                 data-aos-easing="ease-in-out-cubic"
            >
                <div className="container2">
                <h1>Nous avons bien reçu votre message !</h1>
                <input type="submit" value="Home" className="form-control btn btn-primary"  onClick={redir} />
                </div>
            </div>
        );

}
