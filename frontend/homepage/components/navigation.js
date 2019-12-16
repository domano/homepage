import React, { useState } from 'react';
import Link from 'next/link'
import Navbar from 'react-bulma-components/src/components/navbar'; //import from src, not lib
import Level from 'react-bulma-components/src/components/level'; //import from src, not lib
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';


function Navigation(props) {
    const [menuActive, setMenuActive] = useState(false)

    return <Navbar transparent
    >
        <Navbar.Brand>
            <Navbar.Item renderAs="a" href="/">
                <Level>
                    <img className={"level-left is-size-4"} src="/avatar.png" alt="gomano.de"/>
                </Level>
            </Navbar.Item>
            <Navbar.Burger onClick={() => setMenuActive(!menuActive)}/>
        </Navbar.Brand>
<Navbar.Divider/>
        <Navbar.Menu className={menuActive?"is-active":""}>
            <Navbar.Container position="start">
                <Navbar.Item renderAs="div">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </Navbar.Item>
                <Navbar.Item renderAs="div">
                    <Link href="/talks">
                        <a>Talks</a>
                    </Link>
                </Navbar.Item>
                </Navbar.Container>
            <Navbar.Container position="end">
                <Navbar.Item renderAs="a" href="https://github.com/domano">
                    <FontAwesomeIcon icon={faGithub}/>
                </Navbar.Item>
            </Navbar.Container>
        </Navbar.Menu>

    </Navbar>;
}

export default Navigation;