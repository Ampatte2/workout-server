import React from 'react'
import Increment from "./buttons/Increment";
import Decrement from "./buttons/Decrement";
import {connect} from "react-redux";
import {nextDay, nextWeek, prevDay, prevWeek, newWorkout} from "../actions";
import {Title, Header1, Header2, ButtonDisplay} from "../style/styledcomponents"
import {Collapsible} from "../components/index"
import "../style/index.css"



//saying loading if loading, populate workouts from redux store
//if user is not logged in redirect to login page


class workout extends React.Component {
    constructor(props){
        super(props)
        this.state={
            disabled: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    //handles logic for switching days tomorrow to yesterday
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

    //if not authenticated push to login page
    componentDidUpdate(){
        if(this.props.authenticated === false){
            this.props.history.push("/login")
        }
    }
    
    
    render() {

        let workoutDiv = this.props.thisDay[0].map((item, index) => (
            item.map((item2,index2)=>{
                   if(typeof item2=== "object"){
                       let returnedDiv = <><Header2>{item2.workout}</Header2><Collapsible item={item2} index={index2}></Collapsible></>;

                       return returnedDiv
                   }else{
                       return <Title>{item2}</Title>
                   }
               })
           )
       )
        
        return (
            <>
                
                <Header1>{this.props.user} your challenge for Week [ {this.props.week +1} ] Day [ {this.props.day +1} ]</Header1>
                
                    <ButtonDisplay>
                        
                            <Increment day={this.props.day} disabled={this.state.disabled} week={this.props.week} handleClick={this.handleClick}/>
                            <Decrement day={this.props.day} week={this.props.week} handleClick={this.handleClick}/>
                        
                    </ButtonDisplay>
                
                    {workoutDiv}
                                
                
                
            </>
        )
    }
}
const mapStateToProps = (state) =>{
    const {thisDay, day, week, user} = state;
    return {thisDay, day, week, user};
}


//Dispatches action to the store to get the next day or week

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