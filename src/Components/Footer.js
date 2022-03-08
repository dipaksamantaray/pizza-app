import React from "react";
import "./Footer.css";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";


const Footer=()=>{
    return(
        <section className="footer">

        <div className="footer-text">
        <h1>Reach us OnSocial Media </h1>
        <div className="icons">
        <AiFillFacebook className="icon"/>
        <AiFillInstagram className="icon"/>
        <AiFillTwitterCircle className="icon"/>
        <AiFillLinkedin className="icon"/>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum suscipit ligula nec hendrerit.</p>
        </div>

        </section>
    );
};

export default Footer;