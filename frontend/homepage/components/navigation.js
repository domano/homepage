import React from 'react';
import Link from 'next/link'
import 'bulma'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faXing, faLinkedin} from '@fortawesome/fontawesome-free-brands';


function Navigation() {
    return <div className="navbar has-shadow"
    >
        <div className={"navbar-menu"}>
            <div className="navbar-start">
                <a className="navbar-item" href="/">
                    <img src="/avatar.png" alt="gomano.de"/>
                </a>
                <div className="navbar-item">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </div>
                <div className="navbar-item">
                    <Link href="/portfolio">
                        <a>Portfolio</a>
                    </Link>
                </div>
            </div>
            <div className="navbar-end">
                <a className="navbar-item is-size-3" href="https://github.com/domano">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a className="navbar-item is-size-3" href="https://www.xing.com/profile/Dino_Omanovic2/cv">
                    <FontAwesomeIcon icon={faXing}/>
                </a>
                <a className="navbar-item is-size-3" href="https://www.linkedin.com/in/dino-omanovic/">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </div>
        </div>
    </div>;
}

export default Navigation;