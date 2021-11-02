import React, {Component} from 'react';
import "./MailComp.css";
import emailjs from "emailjs-com";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";



const MailComp = () => {


    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(
            'service_cmgc0y2',
            'template_4fffna7',
            e.target,
            "user_LdSr4YC5kDv1yfiZ5MLod").then(res=>{
                console.log(res);
            window.location.href="Yeptest";
        }).catch(err=> console.log(err));

    }

        return (

            <div className="container">
                <div className="container2">
                <h1 className="tittre">Contactez-nous</h1>
                <form className="mailer" onSubmit={sendEmail} >

                    <label>Nom</label>
                    <input type="text" name="name" className="form-control"/>

                    <label className="titreMail">Email</label>
                    <input type="email" name="user_mail" className="form-control"/>

                    <label className="titreMail">Message</label>
                    <textarea name="Message" rows="4" className="form-control"/>

                    <input type="submit" value="Envoyer" className="form-control btn btn-primary" />

                </form>
                </div>
            </div>
        );

}



export default MailComp;