import React from "react";
import '../style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5,faCss3,faJs,faReact,} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
    return(
        <div className="main">
            <div className="head">
                <h3>About</h3>
                <p>I am a 2nd year student pursuing Int. M Tech in CSE at VIT, 
                    Vellore. I am in the process of being a Full Stack Developer, 
                    with knowledge in Frontend, Backend, Database. 
                </p>
                <h3>Skills</h3>
                <ul className="skills">
                    <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
                    <li><FontAwesomeIcon icon={faCss3} /> CSS</li>
                    <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
                    <li><FontAwesomeIcon icon={faReact} /> ReactJS</li>
                    <li><FontAwesomeIcon icon={faDatabase} /> MySQL</li>
                </ul>
            </div>
        </div>
    )
}

