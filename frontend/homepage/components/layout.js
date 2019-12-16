import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import Navigation from "./navigation";
import '../styles/layout.css'
import Columns from 'react-bulma-components/src/components/columns'

const Layout = (props) => (
    <Columns className="is-centered bg fill">
        <Columns.Column
                        tablet={{
                            size: 'three-quarters',
                        }}
                        desktop={{
                            size: 'two-thirds',
                        }}
        >
            <Navigation/>

            {props.children}
        </Columns.Column>
    </Columns>
)

export default Layout
