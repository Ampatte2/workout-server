import React from 'react'
import {Button} from "../../style/styledcomponents"

function Decrement(props) {
         
    
    if(props.day===0 &&props.week===0){
        return (null)
    }else{
        return (<Button name="decrement" onClick={props.handleClick}>Yesterday's Workout</Button>)
    }

}
export default Decrement
