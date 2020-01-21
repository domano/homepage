import React from 'react'
import 'bulma'
import '../styles/layout.css'
import Skills from "../components/skills";
import {motion} from "framer-motion";

const imgAnimation = {
    start: {opacity: 0,scale:0},
    end: {opacity: 1, scale:1, transition: {
            type: "tween",
            duration: 0.7,
            delay: 1
        },},
    leave: {opacity: 0, },
    transition: {
        type: "tween",
    }
}

const helloAnimation = {
    start: {opacity: 0, x: 500},
    end: {opacity: 1, x: 0, transition: {
            type: "tween",
            duration: 0.7
        },},
    leave: {opacity: 0, x: -500},
}

const iAmAnimation = {
    start: {opacity: 0, x: -500},
    end: {
        opacity: 1, x: 0, transition: {
            type: "tween",
            duration: 0.7,
            delay: 0.5
        },
    },
    leave: {opacity: 0, x: 500},
}

const topAnimation = {
    start: {
        opacity: 0
    },
    end: {
        opacity: 1,
    },
    leave: {
        opacity: 0
    },
    transition: {
        type: "tween",
    }
}

function Hello({variants}) {
    return <motion.div variants={variants} className="box has-shadow">
        <div className="columns is-vcentered">
            <div className="column">
                <motion.h1  variants={helloAnimation} initial="start" animate="end" exit="leave"
                           className={"is-size-1 has-text-centered"}>Hallo!
                </motion.h1>
                <br/>
                <motion.h1 variants={iAmAnimation} initial="start" animate="end" exit="leave"
                           className={"is-size-1 has-text-centered"}>Ich bin Dino
                </motion.h1>
            </div>
            <motion.div className="column">
                <motion.figure className="image">
                    <motion.img variants={imgAnimation} initial="start" animate="end" exit="leave" src="/landing.png" alt={"Ich"}/>
                </motion.figure>
            </motion.div>
        </div>
    </motion.div>;
}

const Home = () => (
    <motion.div initial="start" animate="end" exit="leave" variants={topAnimation}>
        <Hello variants={topAnimation}/>
        <motion.br variants={topAnimation}/>
        <Skills variants={topAnimation}/>
    </motion.div>

)

export default Home
