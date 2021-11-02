import React, {Component} from 'react';
import "./MailComp.css";
import emailjs from "emailjs-com";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";



export default function MailComp(){


        return (

            <div className="container"
                 data-aos="fade-up"
                 data-aos-duration="1000"
                 data-aos-delay="25"
                 data-aos-easing="ease-in-out-cubic"
            >
                <div className="container2">
                <h1 className="tittre">Contactez-nous</h1>
                <form
                    className="mailer"
                    name="contactv1"
                    method="post"
                    data-netlify="true"
                    onSubmit="submit"
                    netlifly
                >

                    <label>Nom</label>
                    <input type="text" name="first-name" className="form-control"/>

                    <label htmlFor="email" className="titreMail">Email</label>
                    <input id="email" type="email" name="email" className="form-control"/>

                    <label className="titreMail">Message</label>
                    <textarea name="comments" rows="4" className="form-control"/>

                    <input type="submit" value="Envoyer" className="form-control btn btn-primary" />

                </form>
                </div>
            </div>
        );

}

