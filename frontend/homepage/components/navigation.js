import React from 'react';
import Link from 'next/link'
import 'bulma'

import {motion} from "framer-motion";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faXing, faLinkedin} from '@fortawesome/fontawesome-free-brands';

const topAnimation = {
    start: {
    },
    end: {
        transition: {
            staggerChildren: 0.1,
        }
    },
    transition: {
        type: "tween",
    }
}

const iconAnimation = {
    start: {y:-100},
    end: {y:0}
}


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
            <motion.div initial="start" animate="end" variants={topAnimation} className="navbar-end">
                <motion.a variants={iconAnimation} className="navbar-item is-size-3" href="https://github.com/domano">
                    <FontAwesomeIcon icon={faGithub}/>
                </motion.a>
                <motion.a variants={iconAnimation} className="navbar-item is-size-3" href="https://www.xing.com/profile/Dino_Omanovic2/cv">
                    <FontAwesomeIcon icon={faXing}/>
                </motion.a>
                <motion.a variants={iconAnimation} className="navbar-item is-size-3" href="https://www.linkedin.com/in/dino-omanovic/">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </motion.a>
            </motion.div>
        </div>
    </div>;
}

export default Navigation;