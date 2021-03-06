import React from 'react'
import 'bulma'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import Navigation from "./navigation";
import '../styles/layout.css'
import '../_variables.scss'

const Layout = (props) => (
    <div className="columns is-centered bg fill ">
        <div className="column is-three-quarters-tablet is-two-thirds-desktop column-bg is-paddingless-ver">
            <Navigation/>
            <br/>
            {React.Children.map(props.children, (e) => <div>{e} <br/></div>)}
            <div className="level-right has-text-centered has-text-grey-light is-text">Impressum: Dino Omanovic Röckumstr. 98 53121 Bonn</div>
        </div>
    </div>
)

export default Layout
