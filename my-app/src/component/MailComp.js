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


<div className="container2">
    <form name="contact" data-netlify="true" netlify-honeypot="bot-field" >

        <p>
            <label htmlFor="name">Name</label> <br />
            <input type="text" id="name" name="name" required />
        </p>
        <p>
            <label htmlFor="email">Email</label> <br />
            <input type="email" id="email" name="email" required />
        </p>
        <p>
            <label htmlFor="message">Message</label> <br />
            <textarea id="message" name="message" required></textarea>
        </p>
        <p>
            <input type="submit" value="Submit message" />
        </p>
    </form>
</div>

        );

}

