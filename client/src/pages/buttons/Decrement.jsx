import React from 'react'
import {DecrementButton} from "../../style/styledcomponents"

function Decrement(props) {
         
    
    if(props.day===0 &&props.week===0){
        return (null)
    }else{
        return (<DecrementButton name="decrement" onClick={props.handleClick}>Yesterday</DecrementButton>)
    }

}
export default Decrement
