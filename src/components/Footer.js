import React from "react";
import '../style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram,faHackerrank,faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer () {
    return(
        <div className="foot">
            <ul className="flist">
                <li className="footlist"><a href="https://www.instagram.com/dharshan_.4038/" target="_blank"><FontAwesomeIcon icon={faInstagram}  className="icons" /></a></li>
                <li className="footlist"><a href="https://www.hackerrank.com/dharshand9" target="_blank"><FontAwesomeIcon icon={faHackerrank} className="icons" /></a></li>
                <li className="footlist"><a href="https://www.facebook.com/dharshan.vijay.58/" target="_blank"><FontAwesomeIcon icon={faFacebook} className="icons" /></a></li>
            </ul>
        </div>
    )
}
