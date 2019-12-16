import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '../styles/layout.css'
import Navigation from "../components/navigation";
import YouTube from 'react-youtube-embed'
import Tabs from "react-bulma-components/src/components/tabs"
import Slide from "react-reveal/Slide";
import {Container} from "react-bulma-components";
import Layout from "../components/layout";

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
        <Container style={{
            overflowX: "hidden",
            overflowY: "auto"
        }}>
            {Videos.map(e => <YouTube key={e.url} id={e.url}/>)}
        </Container>
    </Layout>
)

export default Home
