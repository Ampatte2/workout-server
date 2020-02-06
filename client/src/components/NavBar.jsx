import React, { Component } from 'react'
import {Ul} from "../style/styledcomponents"
import Links from "./Links"


class NavBar extends Component {
    render() {
        return (
                <Ul>
                    <Links />
                </Ul>
        )
    }
}


export default NavBar
