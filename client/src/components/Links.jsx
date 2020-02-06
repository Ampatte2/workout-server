import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logOut} from "../actions";
import {NavButton, List} from "../style/styledcomponents"




class Links extends Component {

    render() {
        let display;
        if(this.props.authenticated){
            display = <>
            
            
            <Link to="/login" className="navbar-brand" onClick={this.props.logOut}><NavButton style={{float:"right"}}>Logout</NavButton></Link>
            
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
                <List><Link to="/" className="nav-link">
                    <NavButton>
                        Example
                    </NavButton>
                </Link></List>
                
                   
                
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
