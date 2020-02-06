import React from 'react'
import { connect } from 'react-redux';
import {registerUser} from "../actions"
import {Form, Header1, Button, Input, Paragraph} from "../style/styledcomponents"

//call api that creates new user
//redirect to login page

class register extends React.Component {

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
            <>
            <Form name="login-form" onSubmit={this.handleSubmit}>
                <Header1>Register</Header1>
                <Input name="username" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Your Username"/>

                <Input name="password" type={this.state.visibility} value={this.state.password} onChange={this.handleChange}placeholder="Your Password"/>
                <div style={{position: "absolute", bottom:"0", left:"0",display:"flex", flexDirection:"row", marginTop:"5vh", width:"100%", justifyContent:"space-between"}}>
                    
                <div style={{fontSize:"3vh"}}>Show password<input type="checkbox" style={{width:"1.5vh", height:"1.5vh", marginTop:"1.25vh", marginLeft:"1vh"}} onClick={this.handleClick}/></div>

                <Button type="submit" value="Submit">Submit</Button>
                
                </div>
                <Paragraph>{error}</Paragraph>
            </Form>
            
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const {authenticated} = state
    const {error} = state
    return {authenticated, error}
 }

export default connect(mapStateToProps, {registerUser})(register)