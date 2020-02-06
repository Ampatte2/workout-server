import React from 'react'
import {IncrementButton} from "../../style/styledcomponents"

function Increment(props) {
         
    
    if(props.day===3 &&props.week===3){
        return (<IncrementButton name = "newworkout" disabled={props.disabled} onClick={props.handleClick}>NewWorkout</IncrementButton>)
    }else{
        return <IncrementButton name="increment" onClick={props.handleClick}>Tomorrow</IncrementButton>
    }

}

export default Increment
