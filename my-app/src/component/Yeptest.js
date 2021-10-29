import React, {Component} from 'react';


const Yeptest = () =>   {

    function redir() {
        window.location.href="http://skatalog.netlify.app/HomeComp";
    }


        return (
            <div className="container">
                <h1>tu as bien envoyé merci aurevoir</h1>

                <input type="submit" value="Home" className="form-control btn btn-primary"  onClick={redir} />
            </div>
        );

}


export default Yeptest;