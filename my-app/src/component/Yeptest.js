import React, {Component} from 'react';
import './Yeptest.css'


const Yeptest = () =>   {

    function redir() {
        window.location.href="http://localhost:3000/";
    }


        return (
            <div className="container" >
                <div className="container2">
                <h1>Nous avons bien reçu votre message !</h1>

                <input type="submit" value="Home" className="form-control btn btn-primary"  onClick={redir} />

                </div>
            </div>
        );

}


export default Yeptest;