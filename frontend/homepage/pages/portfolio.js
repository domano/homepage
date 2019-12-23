import React from 'react'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '../styles/layout.css'
import 'bulma'
import Talk from "../components/talk";
import {faGithub, faGithubSquare} from "@fortawesome/fontawesome-free-brands";
import {faCode} from "@fortawesome/fontawesome-free-solid";
import ContentTile from "../components/contentTile";
import {motion} from "framer-motion";

const talks = [{
    title: "Warum Go?",
    url: "BRdRm3wwvjs"
},
    {
        title: "Nebenläufige reaktive Programmierung mit go",
        url: "DsQgf6rgS_s"
    }
    , {
        title: "Serverless ohne Vendor Lock-In mit go",
        url: "g-xWLYgeJ-M"
    }]

const content = [
    {
        title: "tarent Academy Go Workshop",
        subtitle: "Hier kann man mich für einen Präsenzworkshop buchen. Maßgeschneidert gehe ich auf die Teilnehmer ein, sodass nach dem mehrtägigen Workshop ein gutes Fundament geschaffen ist um weiter mit Go zu arbeiten.",
        url: "https://www.tarent.de/academy/courses/microservices-mit-go/",
        thumbnail: faCode
    },
    {
        title: "Go Basics Kurs",
        subtitle: "Kleine kostenlose Einführung in Go mit Codebeispiele und Aufgaben.",
        url: "https://github.com/domano/go-intro-course",
        thumbnail: faGithubSquare
    },
    {
        title: "Go Webservice Kurs",
        subtitle: "Schnelle Einführung in Go mit einem Fokus auf die Programmerung von Webservices.",
        url: "https://github.com/domano/go-web-course",
        thumbnail: faGithubSquare
    },
    {
        title: "Showcase: Chat mit Websockets, Go und React",
        subtitle: "Beispiel wie Anwendungen einfach mit Go, React und Websockets erstellt werden können.",
        url: "https://github.com/domano/go-react-chat",
        thumbnail: faGithub
    },
    {
        title: "Showcase: pwgen, ein sicherer Passwort-Generator-Webservice",
        subtitle: "Ausführliches Beispiel wie ein Go-Service in Produktionsreife aussehen kann.",
        url: "https://github.com/domano/pwgen",
        thumbnail: faGithub
    },
]
const tiles = [...content.map(e => <ContentTile url={e.url} title={e.title} subtitle={e.subtitle}
                                                thumbnail={e.thumbnail}/>), ...talks.map(e => <Talk url={e.url}
                                                                                                    title={e.title}/>)]

const Home = () => (
    <motion.section initial={{ opacity: 0, x:200}} animate={{opacity:1,x:0}} exit={{transition: {staggerChildren: 0.1}, opacity: 0}}>
            <div className="tile is-ancestor is-vertical">
                {tiles.map(e => <motion.div whileHover={{ scale: 1.03 }}>{e}</motion.div>)}
            </div>
        </motion.section>
)

export default Home
