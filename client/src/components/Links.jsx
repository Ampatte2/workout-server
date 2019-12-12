import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {connect} from "react-redux";
import {logOut} from "../actions";
import logo from "../images/Banner.jpg";
import {NavButton, List, ListWorkout} from "../style/styledcomponents"
import Collapsible from "react-collapsible"









class Links extends Component {

    render() {
        let display;
        if(this.props.authenticated){
            display = <>
            
            
            <Link to="/login" className="navbar-brand" onClick={this.props.logOut}><NavButton>Logout</NavButton></Link>
            
            </>
        } else{
            display = <>
                
                             
                               
                                
                <List><Link to="/login" className="nav-link">
                    <NavButton>
                        Login
                    </NavButton>
                </Link></List>
                

                
                <List><Link to="/register" className="nav-link">
                    <NavButton>
                    Register
                    </NavButton>
                </Link></List>
                <ListWorkout><Link to="/" className="navbar-brand">
                    <NavButton>
                        Workout Mixer
                    </NavButton>
                </Link></ListWorkout>
                
                   
                
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
