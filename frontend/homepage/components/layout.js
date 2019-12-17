import React from 'react'
import 'bulma'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import Navigation from "./navigation";
import '../styles/layout.css'

const Layout = (props) => (
    <div className="columns is-centered bg fill ">
        <div className="column is-three-quarters-tablet is-two-thirds-desktop column-bg"
        >
            <Navigation/>

            {props.children}
        </div>
    </div>
)

export default Layout
