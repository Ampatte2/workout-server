import React, { Component } from 'react'
import Increment from "./buttons/Increment";
import Decrement from "./buttons/Decrement";
import {connect} from "react-redux";
import {nextDay, nextWeek, prevDay, prevWeek, newWorkout} from "../actions";
import {WorkoutDiv, CollDiv, InsDiv, Wrapper, Title, Header1, Header2, ListItem, ButtonDisplay} from "../style/styledcomponents"
import Collapsible from "react-collapsible"
import "../style/index.css"



//saying loading if loading, populate workouts from redux store
//if user is not logged in redirect to login page


class workout extends Component {
    constructor(props){
        super(props)
        this.state={
            disabled: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){

        this.setState({disabled:false})

        if(event.target.name=== "increment"){
            
            if(this.props.day === 3){
                this.props.nextWeek()
            }else{
                this.props.nextDay()
                
                
            }
        }

        if(event.target.name=== "decrement"){
            
            if(this.props.day === 0){
                this.props.prevWeek()
            }else{
                    this.props.prevDay()
                }
        }
        if(event.target.name==="newworkout"){
            this.setState({disabled:true})
            this.props.newWorkout(this.props.user)
        }
                
    }
    componentDidUpdate(){
        if(this.props.authenticated === false){
            this.props.history.push("/login")
        }
    }
    
    
    render() {
        let workoutDiv = this.props.thisDay[0].map((item, index) => (
            item.map((item2,index2)=>{
                   if(typeof item2=== "object"){
                       let returnedVideo = <CollDiv><Collapsible trigger="Video" className="collapsible"><div
                       className="video"
                           style={{
                           position: "relative",
                           paddingBottom: "56.25%" /* 16:9 */,
                           paddingTop: 25,
                           height: 0
                           }}
                       >
                           <iframe
                           style={{
                               position: "absolute",
                               margin: "auto",
                               top: 0,
                               left: 0,
                               width: "100%",
                               height: "100%"
                           }}
                           src={`https://www.youtube.com/embed/${item2.video}`}
                           title = {index2}
                           frameBorder="0"
                           />
                   </div></Collapsible></CollDiv>
                       let returnedList = <InsDiv><Collapsible trigger="Instructions" className="collapsible"><ul>{item2.instructions.map((i, index3)=>{return <ListItem key={index3}>{i}</ListItem>})}</ul></Collapsible></InsDiv>
                       let returnedDiv = <div><Header2>{item2.workout}</Header2>{returnedList}{returnedVideo}</div>
                       return returnedDiv
                   }else{
                       return <Title>{item2}</Title>
                   }
               })
           )
       )
        
        return (
            <div>
                <Wrapper>
                <Header1>Hello {this.props.user} your workout for day {this.props.day +1} and week {this.props.week +1}</Header1>
                <br/>
                    <ButtonDisplay>
                        <div>
                            <Increment day={this.props.day} disabled={this.state.disabled} week={this.props.week} handleClick={this.handleClick}/>
                        </div>
                        <div>
                            <Decrement day={this.props.day} week={this.props.week} handleClick={this.handleClick}/>
                        </div>
                    </ButtonDisplay>
                <WorkoutDiv>
                    {workoutDiv}
                </WorkoutDiv>                
                
                </Wrapper>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    const {thisDay, day, week, user} = state;
    return {thisDay, day, week, user};
}

const mapDispatchToProps = (dispatch) =>{
    return{
        nextDay: ()=>{
            dispatch(nextDay())
        },
        nextWeek: ()=>{
            dispatch(nextWeek())
        },
        prevDay:()=>{
            dispatch(prevDay())
        },
        prevWeek:()=>{
            dispatch(prevWeek())
        },
        newWorkout:(user)=>{
            dispatch(newWorkout(user))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(workout)