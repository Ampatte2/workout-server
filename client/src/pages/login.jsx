import React, { Component } from 'react'
import {connect} from "react-redux";
import {fetchWorkout} from "../actions"
import {Wrapper,Form, Header1, Button, Paragraph, Input} from "../style/styledcomponents"


class login extends Component {
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
        this.props.fetchWorkout(this.state.username,this.state.password)
        
        // this.props.history.push("/workout")
        
        event.preventDefault();
    }
    //this is a function that is called when username and password are submitted by form,
    //if success pull the user from the database and populate redux store with workouts
    //redirect to the workouts page

    handleClick(event){
        console.log(event.target.checked)
        if(event.target.checked===true){
            this.setState({visibility:"text"})
        }else{
            this.setState({visibility:"password"})
        }
    }
    
    componentDidUpdate(){
        if(this.props.authenticated){
            this.props.history.push("/workout")
        }
    }

    render() {
        return (
            <Wrapper>
                <Form name="login-form" onSubmit={this.handleSubmit}>
                    <Header1>Please Login</Header1>
                    
                    <Input name="username" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Username"/>

                    <Input name="password" type={this.state.visibility} value={this.state.password} onChange={this.handleChange}placeholder="Password"/>

                    <label>Show Password
                    <input type="checkbox" onClick={this.handleClick}/>
                    </label>
                    
                    <Button type="submit" value="Submit">Submit</Button>
                    {this.props.error ? <Paragraph>Incorrect Username or Password</Paragraph>: <Paragraph>Surprise Yourself Every Week of Every Month</Paragraph>}
                </Form>
                
                
            </Wrapper>
        )
    }
}
const mapStateToProps = (state) => {
    const {authenticated} = state
    const {error} = state
    return {authenticated, error}
 }

export default connect(mapStateToProps, {fetchWorkout})(login)
