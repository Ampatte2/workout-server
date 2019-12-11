import React, { Component } from 'react'
import { connect } from 'react-redux';
import {registerUser} from "../actions"

import {Wrapper,Form, Header1, Button, Paragraph, Input} from "../style/styledcomponents"

//call api that creates new user
//redirect to login page

class register extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: "",
            password:"",
            visibility:"password"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event){
        const value = event.target.value;
        const name = event.target.name;
        
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit(event){
        
        this.props.registerUser(this.state.username, this.state.password)
        
        event.preventDefault();
    }

    handleClick(event){
        console.log(event.target.checked)
        if(event.target.checked===true){
            this.setState({visibility:"text"})
        }else{
            this.setState({visibility:"password"})
        }
    }

    componentDidUpdate(){
        if(this.props.authenticated === true){
            this.props.history.push("/workout")
        }

    }
    render() {
        let error;
        if(this.props.error){
            error = <h2>Username has been Taken</h2>
        }else{
            error = ""
        }
        return (
            <Wrapper>
            <Form name="login-form" onSubmit={this.handleSubmit}>
                <Header1>Register</Header1>
                <Input name="username" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Username"/>

                <Input name="password" type={this.state.visibility} value={this.state.password} onChange={this.handleChange}placeholder="Password"/>

                <label>Show Password
                <input type="checkbox" onClick={this.handleClick}/>
                </label>
                <Button type="submit" value="Submit">Submit</Button>
            </Form>
            {error}
        </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    const {authenticated} = state
    const {error} = state
    return {authenticated, error}
 }

export default connect(mapStateToProps, {registerUser})(register)