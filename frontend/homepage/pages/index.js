import React from 'react'
import 'bulma'
import '../styles/layout.css'
import Skills from "../components/skills";
import {
    faChalkboardTeacher,
    faCode,
    faHandsHelping,
    faProjectDiagram,
    faSitemap
} from "@fortawesome/fontawesome-free-solid";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/fontawesome-free-brands";

const skills = [
    {
        text: "Entwickler",
        icon: faCode,
        tags: ["Go", "Javascript", "Docker", "Kafka", "Funktionale Programmierung", "Flutter", "Dart", "Java", "Kubernetes", "React"]
    },
    {
        text: "Architekt",
        icon: faProjectDiagram,
        tags: ["Microservices", "Cloud", "Event-driven Architecture", "CI", "CD"]
    },
    {
        text: "Consultant",
        icon: faHandsHelping,
        tags: ["Digitalisierung", "IT-Audits", "Cloud-Migration"]
    },
    {
        text: "Trainer",
        icon: faChalkboardTeacher,
        tags: ["Go", "Microservices", "Maßgeschneiderte Workshops"]
    },
    {
        text: "Product Owner",
        icon: faSitemap,
        tags: ["PSPO 1", "Scrum", "Kanban"]
    },
]

function Hello() {
    return <div className="box has-shadow">
        <div className="columns is-vcentered">
            <div className="column">
                <h1 className={"is-size-1 has-text-centered"}>Hallo! <br/>Ich bin Dino</h1>
            </div>
            <div className="column">
                <figure className="image is-4by3 ">
                    <img className="is-rounded fa-border" src="/landing.jpg" alt={"Ich"}/>
                </figure>
            </div>
        </div>
    </div>;
}

const Home = () => (
    <motion.div initial={{ opacity: 0, x:200}} animate={{opacity:1,x:0}} exit={{transition: {staggerChildren: 0.1}, opacity: 0}}>
        <Hello/>
        <br/>
        <Skills skills={skills}/>
    </motion.div>

)

export default Home
