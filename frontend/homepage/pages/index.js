import React from 'react'
import 'bulma'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '../styles/layout.css'
import Layout from '../components/layout'
import Reveal from "react-reveal/Reveal";
const Home = () => (
    <Layout>
        <Reveal >
            <div>
                <h1 className={"is-size-3"}>gomano.de</h1>
                <h2 className={"is-size-5"}>Hier entsteht eine Homepage</h2>
            </div>
        </Reveal>
    </Layout>

)

export default Home
