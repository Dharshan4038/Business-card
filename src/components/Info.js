import React from "react";
import pic from "../components/profile.jpeg";
import Main from "./Main";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '../style.css';

export default function Info () {
    return(
        <div className="info">
            <div className="subinfo">
                <div className="photo">
                    <img src={pic} />
                </div>
                <div className="details">
                    <h2>Dharshan Raaj</h2>
                    <p>Frontend Developer</p>
                </div>
                <div className="btn">
                    <a href="https://github.com/Dharshan4038" target="_blank"><button id="btn1"><FontAwesomeIcon icon={faGithub} /> Github</button></a>
                    <a href="https://www.linkedin.com/in/dharshan-raaj-9a652b217/" target="_blank"><button id="btn2"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</button></a>
                </div>
                <Main />
                <Footer />
            </div>
        </div>
    )
}
