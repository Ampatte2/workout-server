import React from 'react'
import {Button} from "../../style/styledcomponents"

function Increment(props) {
         
    
    if(props.day===3 &&props.week===3){
        return (<Button name = "newworkout" disabled={props.disabled} onClick={props.handleClick}>NewWorkout</Button>)
    }else{
        return <Button name="increment" onClick={props.handleClick}>Tomorrow's Workout</Button>
    }

}

export default Increment
