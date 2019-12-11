import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {connect} from "react-redux";
import {logOut} from "../actions";
import logo from "../images/Banner.jpg";
import {NavButton, Nav} from "../style/styledcomponents"


const List = styled.div`
    float:right;
`






class Links extends Component {

    render() {
        let display;
        if(this.props.authenticated){
            display = <>
            <img src={logo} width="100" height = "100" alt=""/>
            <List>
            <NavButton>
            <Link to="/login" className="navbar-brand" onClick={this.props.logOut}>Logout</Link>
            </NavButton>
            </List>
            </>
        } else{
            display = <>
                <img src={logo} width="100" height = "100" alt=""/>
                
                
                <List>
                <NavButton><Link to="/" className="navbar-brand">Workout Mixer</Link></NavButton>
                <NavButton>
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </NavButton>

                <NavButton>
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </NavButton>
                </List>    
                
            </>
        }
        return (
            <React.Fragment>
                {display}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const {authenticated} = state
    return {authenticated}
 }

export default connect(mapStateToProps, {logOut})(Links)
