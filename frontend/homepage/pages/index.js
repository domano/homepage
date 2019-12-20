import React from 'react'
import 'bulma'
import '../styles/layout.css'
import Layout from '../components/layout'
import Skills from "../components/skills";
import {
    faChalkboardTeacher,
    faCode,
    faHandsHelping,
    faProjectDiagram,
    faSitemap
} from "@fortawesome/fontawesome-free-solid";
import {Fade, Slide, Zoom} from "react-reveal";

const skills = [
    {
        text: "Entwickler",
        icon: faCode,
        tags:["Go","Javascript", "Docker","Kafka","Funktionale Programmierung", "Flutter", "Dart", "Java", "Kubernetes", "React"]
    },
    {
        text: "Architekt",
        icon: faProjectDiagram,
        tags:["Microservices", "Cloud", "Event-driven Architecture", "CI","CD"]
    },
    {
        text: "Consultant",
        icon: faHandsHelping,
        tags:["Digitalisierung", "IT-Audits", "Cloud-Migration"]
    },
    {
        text: "Trainer",
        icon: faChalkboardTeacher,
        tags:["Go", "Microservices", "Maßgeschneiderte Workshops"]
    },
    {
        text: "Product Owner",
        icon: faSitemap,
        tags:["PSPO 1", "Scrum", "Kanban"]
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
    <Layout>
        <Zoom>
            <Hello/>
        </Zoom>
        <Zoom bottom>
            <Skills skills={skills}/>
        </Zoom>
    </Layout>

)

export default Home
