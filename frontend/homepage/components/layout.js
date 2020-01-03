import React from 'react'
import 'bulma'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import Navigation from "./navigation";
import '../styles/layout.css'
import '../_variables.sass'

const Layout = (props) => (
    <div className="columns is-centered bg fill ">
        <div className="column is-three-quarters-tablet is-two-thirds-desktop column-bg">
            <Navigation/>
            <br/>
            {React.Children.map(props.children, (e) => <div>{e} <br/></div>)}
        </div>
    </div>
)

export default Layout
