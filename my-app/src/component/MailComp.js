import React, {Component} from 'react';
import "./MailComp.css";


export default function MailComp(){
    return (
        <div className="container">
            <div className="container2">
                <h1>Contactez-nous</h1>
                <form name="contact" method="post" action="Yeptest">
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label htmlFor="name" class="card-title">Name</label> <br />
                        <input type="text" id="name" name="name" required class="form-control" />
                    </p>
                    <p>
                        <label htmlFor="email" class="card-title">Email</label> <br />
                        <input type="email" id="email" name="email" required class="form-control"/>
                    </p>
                    <p>
                        <label htmlFor="message" class="card-title">Message</label> <br />
                        <textarea id="message" name="message" required class="form-control" ></textarea>
                    </p>

                       <button type="submit" class="btn btn-light send" >Envoie</button>

                </form>
            </div>
        </div>

        );

}

