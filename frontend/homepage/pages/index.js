import React from 'react'
import Fade from 'react-reveal/Fade';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '../styles/layout.css'
import Layout from '../components/layout'
const Home = () => (
    <Layout>
        <Fade left cascade>
            <div>
                <h1 className={"is-size-3"}>gomano.de</h1>
                <h2 className={"is-size-5"}>Hier entsteht eine Homepage</h2>
            </div>
        </Fade>
    </Layout>

)

export default Home
