import React, {useState} from 'react';
import Link from 'next/link'
import 'bulma'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/fontawesome-free-brands';


function Navigation(props) {
    const [menuActive, setMenuActive] = useState(false)

    return <div className="navbar has-shadow"
    >
        <div className="navbar">
            <div className="navbar-brand" >
                <a className="navbar-item is-paddingless" href="/">
                    <div className="level" style={{padding:'0.5em'}}>
                    <img src="/avatar.png" alt="gomano.de"/>
                    <span className="is-size-5" style={{marginLeft:'0.5em'}}>gomano.de</span>
                    </div>
                </a>

            <div className="navbar-burger burger is-vcentered" aria-label="menu" onClick={() => setMenuActive(!menuActive)}>
                <span aria-hidden="true"/>
                <span aria-hidden="true"/>
                <span aria-hidden="true"/>
            </div>
            </div>
        </div>
        <div className={menuActive ? "is-active" : "" + " navbar-menu"}>
            <div className="navbar-start">
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
            </div>
            <div className="navbar-end">
        <a className="navbar-item" href="https://github.com/domano">
                <FontAwesomeIcon icon={faGithub}/>
        </a></div>
        </div>
    </div>;
}

export default Navigation;