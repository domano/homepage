import React from 'react'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '../styles/layout.css'
import 'bulma'
import Layout from "../components/layout";
import Reveal from "react-reveal/Reveal";
import Talk from "../components/talk";
import {Fade} from "react-reveal";

const Videos = [{
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

const Home = () => (
    <Layout>
        <section className="section">
            <div className="tile is-ancestor is-vertical" >
                <Fade>
                {Videos.map(e => <Talk url={e.url} title={e.title}/>)}
                </Fade>
            </div>
        </section>
    </Layout>
)

export default Home
