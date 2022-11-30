import React, { useState } from "react";
import Languages from "./Languages";
import Typewriter from 'typewriter-effect';
import { Button } from "react-bootstrap";

const Header = () => {
    const [show, setShow] = useState(false);
    const [type, setType] = useState(true);

    const doubleClick = event => {
        if (event.detail === 2) {
            setType(false);
            setShow(true);
        }
    };

    return (
        <header onClick={doubleClick}>
            <div className="header flex light-bg">
                <div>
                    {
                        type ? 
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                .changeDelay(50)
                                .changeDeleteSpeed(50)
                                .typeString('<span class="white code">Hi, I am <strong>Amit Thakur</strong>!</span><br />')
                                .typeString('<span class="white code small">B.E in Computer Science, Lead API and Web application/website developer with <strong>4+</strong> years of experience in leading and developing software applications with architecture and design direction, code quality assurance, and faster delivery.</span><br />')
                                .typeString('<span class="white code small"><strong>Proficient in NodeJS, React, Graphql, PHP, Postgresql, Mongo DB, Solidity Blockchain and many more.</strong></span><br />')
                                .typeString('<span class="white code">Basically,</span>')
                                .pauseFor(300)
                                .deleteChars(10)
                                .typeString('<span class="white code">I am a <strong>Programar</strong>!</span>')
                                .pauseFor(300)
                                .deleteChars(10)
                                .typeString('<span class="white code"><strong>Programmer</strong>!</span>')
                                .pauseFor(300)
                                .deleteChars(19)
                                .typeString('<span class="white code"><strong>I can write your Code.</strong></span><br />')
                                .callFunction(() => {
                                    setShow(true);
                                })
                                .start();
                            }}
                        />: <div>
                                <span className="white code">Hi, I am <strong>Amit Thakur</strong>!</span><br />
                                <span className="white code small">B.E in Computer Science, Lead API and Web application/website developer with <strong>4+</strong> years of experience in leading and developing software applications with architecture and design direction, code quality assurance, and faster delivery.</span><br />
                                <span className="white code small"><strong>Proficient in NodeJS, React, Graphql, PHP, Postgresql, Mongo DB, Solidity Blockchain and many more.</strong></span><br />
                                <span className="white code"><strong>I can write your Code.</strong></span><br />
                            </div>
                    }
                    {
                        show &&
                        <Button className="btn-success mt-4">Let's Connect!</Button>
                    }
                </div>
                <div>
                    <div className="text-end">
                        <h4 className="white code small">amitthakurashwani@gmail.com <img src="/email-letter.png" width={20} height={20} alt="" /></h4>
                        <h4 className="white code small">Still ends in 9211 <img src="/iphone.png" width={20} height={20} alt="" /></h4>
                        <h4 className="white code small">https://www.linkedin.com/in/amit-thakur-a5114917b/ <img src="/linkedin.png" width={20} height={20} alt="" /></h4>
                        <h4 className="white code small">https://github.com/amit-t1234 <img src="/github.png" width={20} height={20} alt="" /></h4>
                        <h4 className="white code small">https://stackoverflow.com/users/8620731/amit-thakur <img src="/stack-overflow.png" width={20} height={20} alt="" /></h4>
                    </div>
                    <Languages />
                </div>
            </div>
        </header>
    )
}

export default Header;
