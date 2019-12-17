import React from 'react'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '../styles/layout.css'
import 'bulma'
import Layout from "../components/layout";
import Reveal from "react-reveal/Reveal";
import Talk from "../components/talk";

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
            <div className="tile is-ancestor is-vertical" style={{
                overflowX: "hidden",
                overflowY: "auto"
            }}>

                {Videos.map(e => <Reveal key={e.url} ><Talk url={e.url} title={e.title}/></Reveal>)}
            </div>
        </section>
    </Layout>
)

export default Home
