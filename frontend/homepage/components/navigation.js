import React, {useState} from 'react';
import Link from 'next/link'
import 'bulma'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';


function Navigation(props) {
    const [menuActive, setMenuActive] = useState(false)

    return <div className="navbar is-transparent"
    >
        <div className="navbar">
            <div className="navbar-brand" >
                <a className="navbar-item" href="/">
                    <img className={"level-left is-size-4"} src="/avatar.png" alt="gomano.de" height="60"/>
                </a>

            <div className="navbar-burger button" aria-label="menu" onClick={() => setMenuActive(!menuActive)}>
                <span aria-hidden="true"/>
                <span aria-hidden="true"/>
                <span aria-hidden="true"/>
            </div>
            </div>
        </div>
        <div className="navbar-divider"/>
        <div className={menuActive ? "is-active" : "" + " navbar-menu"}>
            <div className="navbar-item">
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
            <div className="navbar-item">
                <Link href="/talks">
                    <a>Talks</a>
                </Link>
            </div>

        <div className="navbar-item navbar-end" href="https://github.com/domano">
            <FontAwesomeIcon icon={faGithub}/>
        </div>
        </div>
    </div>;
}

export default Navigation;