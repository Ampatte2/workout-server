import React from 'react'
import {sampleWorkout} from "./dummydata"
import Collapsible from "../components/Collapsible"
import {Title, Header1, Header2,ParagraphSample} from "../style/styledcomponents"
import "../style/index.css"



//creates sample workout display from the sampleworkout provided in dummydata;

let workoutDiv = sampleWorkout.map((item, index) => (
    item.map((item2,index2)=>{
           if(typeof item2 === "object"){
               
               let returnedDiv = <><Header2>{item2.workout}</Header2><Collapsible item={item2} index={index2}></Collapsible></>;

               return returnedDiv;
               
           }else{
               return <Title>{item2}</Title>
           }
       })
   )
)



function sample() {
    
    return (
        <>

            <Header1>Every Day is a New Challenge</Header1>
            
            <ParagraphSample style={{marginLeft:"auto", marginRight:"auto", textAlign:"left"}}>Workout Mixer provides a completely randomized workout plan. It's perfect for those that want to break up their routine and increase their strength.</ParagraphSample>
            <ParagraphSample style={{marginLeft:"auto", marginRight:"auto"}}>With 24 different workouts for 6 muscle groups, every month is different than the last.</ParagraphSample>
            <ParagraphSample style={{marginLeft:"auto", marginRight:"auto"}}>Here is a sample of just one combination of workouts for the muscle group "Triceps".</ParagraphSample>
            
            {workoutDiv}
           
        </>
    )
}

export default sample
