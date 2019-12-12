import React from 'react'
import Collapsible from "react-collapsible"
import {sampleWorkout} from "./dummydata"
import {CollDiv, InsDiv, Wrapper, Title, Header1, Header2, ListItem, Paragraph, BorderBottom} from "../style/styledcomponents"
import "../style/index.css"




let workoutDiv = sampleWorkout.map((item, index) => (
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
                       margin: "relative",
                       top: 0,
                       left: 0,
                       width: "100%",
                       height: "100%"
                   }}
                   src={`https://www.youtube.com/embed/${item2.video}`}
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



function sample() {
    
    return (
        <Wrapper>
            <Wrapper>
            <Header1>With Workout Mixer EveryDay is a New Challenge</Header1>
            <BorderBottom/>
            <Paragraph>Workout Mixer provides a completely randomized workout plan. It is Perfect for those that want to break up their routine and increase their strength</Paragraph>
            <Paragraph>With 24 different workouts for 6 muscle groups, every month is different than the last</Paragraph>
            <Paragraph>Here is a sample of just one combination of workouts for the Triceps</Paragraph>
            </Wrapper>
            
            {workoutDiv}
           
        
        </Wrapper>
    )
}

export default sample
