import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {connect} from "react-redux";
import {logOut} from "../actions";
import logo from "../images/Banner.jpg";
import {NavButton, List} from "../style/styledcomponents"
import Collapsible from "react-collapsible"









class Links extends Component {

    render() {
        let display;
        if(this.props.authenticated){
            display = <>
            <img src={logo} width="100" height = "100" alt=""/>
            <List>
            
            <Link to="/login" className="navbar-brand" onClick={this.props.logOut}><NavButton>Logout</NavButton></Link>
            
            </List>
            </>
        } else{
            display = <>
                <img src={logo} width="100" height = "100"  alt=""/>
                
                
                <List>
                
                <Link to="/" className="navbar-brand"><NavButton>Workout Mixer</NavButton></Link>
                
                    <Link to="/login" className="nav-link"><NavButton>
                        Login
                    </NavButton></Link>
                

                
                    <Link to="/register" className="nav-link"><NavButton>
                        Register
                        </NavButton></Link>
                
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
