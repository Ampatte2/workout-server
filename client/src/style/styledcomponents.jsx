
import styled from "styled-components"
import {device} from "./device"


const Title = styled.h1`
    text-transform:uppercase;
    padding:20px;
    width:50vw;
    text-align: center;
    margin:auto;
    margin-top:10vh;
    
    border-radius: 5px;
    color:#2B2D42;
    font-size:4vw;
    @media ${device.tablet}{
        font-size:8vw;
    }
`
const Paragraph = styled.p`
    text-align: center;
    width:40vw;
    
    font-size:1.5vw;
    @media ${device.tablet}{
        font-size:3.0vw;
        
        width: 80vw;
    }
`
const ParagraphSample = styled.p`
    text-align: left;
    width:35vw;
    
    font-size:1.0vw;
    @media ${device.tablet}{
        font-size:4.0vw;
        width: 80vw;
    }
`
const Header1 = styled.h1`

    text-align: center;
    font-size:5vh;
    color:#2B2D42;
    margin-top:10vh;
    margin-bottom:5vh;
    @media ${device.tablet}{
        font-size:6.0vw;
    }
`

const Header2 = styled.h2`
    text-align: center;
    margin:auto;
    
    margin-top:5vh;
    border-width:10px;
    width:50vw;
    padding:10px;
    font-size:3vw;
    @media ${device.tablet}{
        font-size:6.0vw;
        width: 80vw;
    }
`
const CollDiv = styled.div`
    margin-bottom:3vh;

    height:${props => props.height || "0"};
    visibility: ${props=>props.visibility || "visible"};
    transition-duration: 0.5s;
    transition-timing:ease;
    color:black;
    font-size:1.5rem;
    width:60vw;
    margin-left:20vw;
    border-radius:5px;
    @media ${device.tablet}{
        width: 80vw;
        margin-left:10vw;
    }
`
const InsDiv = styled.div`
    
    color:black;
    height:${props => props.height || "0"};
    visibility: ${props=>props.visibility || "visible"};
    margin-bottom:3vh;
    transition-duration: 1s;
    transition-timing:ease-out;
    text-align:center;
    margin:auto;

    font-size:1.5rem;
    width:60vw;
    margin-left:20vw;
    margin-top:20px;
    border-radius:5px;
    @media ${device.tablet}{
    
    margin-left:5vw;
    }
}

`
const CollapseButton = styled.button`
    font-size:3vh;
    width:60vw;
    margin-left:20vw;
    background-color: #78C0E0;
    border:1px solid black;
    &:hover{
        background-color:rgba(120, 192, 224, 0.4);
    }
    color:#2B2D42;
    border:none;
    border-radius:5px;
    font-size:3vh;
    @media ${device.tablet}{
        width: 80vw;
        margin-left:10vw;
    }
`

const ListItem = styled.li`
    height:${props => props.height || 0};
    visibility: ${props=>props.visibility || "visible"};
    font-size: ${props =>props.height + "px" || 0}
    transition-duration: 2s;
    transition-timing:ease-out;
    background-color:#78C0E0;
    width:60vw;
    
    color:black;
    text-align:left;
    list-style-type:none;
    border-radius:5px;
    @media ${device.tablet}{
        width:80vw;
        margin-left:5vw;
        font-size:1.5vh;
    }
    @media${device.mobileL}{
        font-size:1vh;
    }
    
    
`

//input for login and register
const Input = styled.input`
  width: 40vw;
  
  
  font-size:2vh;
  padding: 12px 20px;
  margin-top:1vh;
  margin-bottom:1vh;
  display: inline-block;
  border-radius: 5px;
  box-sizing: border-box;
  border:none;
  &:hover{
    background-color:#78C0E0;
  }
  &:focus{
      background-color:#78C0E0;
  }
  
  @media ${device.tablet}{
        width:80vw;
    }
`
//form div for login and register

const Form = styled.form`
    position:absolute;
    top: 45vh;
    right:30vw;
    width:40vw;
    height:50vh;   
    font-size:3vh;
    display:flex;
    flex-direction:column;
    
    margin-bottom:20vh;
    @media ${device.tablet}{
        width: 80vw;
        right:10vw;
        
    }
`
const Button = styled.button`
    
    background-color: #78C0E0;
    &:hover{
        background-color:rgba(120, 192, 224, 0.4);
    }
    color:#2B2D42;
    border:none;
    border-radius:5px;
    padding:1vh;
    font-size:3vh;
    
    
    @media ${device.tablet}{
        
        
    }
`

const IncrementButton = styled.button`
    background-color: #78C0E0
    display:inline-block;
    &:hover{
        background-color:rgba(120, 192, 224, 0.4);
    }
    color:#2B2D42;
    border:#78C0E0;
    border-radius:5px;
    padding:20px 20px 20px 20px;
    float:right;
    font-size:1.5vw
    @media ${device.tablet}{
        padding:10px 10px 10px 10px
        font-size:4vw
    }
`

const DecrementButton = styled.button`
    
    background-color: #78C0E0
    display:inline-block;
    &:hover{
        background-color:rgba(120, 192, 224, 0.4);
    }
    color:#2B2D42;
    border:#78C0E0;
    border-radius:5px;
    padding:20px 20px 20px 20px;
    font-size:1.5vw
    @media ${device.tablet}{
        padding:10px 10px 10px 10px
        font-size:4.0vw
    }
`
const NavButton = styled.button`
    color:#78C0E0;
    text-decoration:none;
    border:none;
    background-color:transparent;
    font-size:3vh;

    &:hover{
        color:white
        }
    

    @media ${device.tablet}{
    font-size:2.5vh;
    
    }
`

const List = styled.li`

background-color:#2B2D42;
border: none;
margin:auto;
margin-left:1vw;
color:#78C0E0;
border-radius:5px;
float: right;

a {
    text-align: none;
    text-decoration: none;
  }

@media ${device.tablet}{
    
    font-size:2.5vh;
    
    }
    
`

const ListWorkout = styled.li`
    
margin-bottom:20px;
display:block;
background-color:#2B2D42;
border: none;
margin:auto;

border-radius:5px;
height:50vh;
float: left;

a {
    display: block;
    color: white;
    text-align: none;
    text-decoration: none;
  }
    
`

//Navbar styling
const Ul = styled.ul`
list-style-type: none;
margin: 0;
padding: 20px 20px 20px 20px;
overflow: hidden;
background-color:#2B2D42;
margin:auto;

    
`

const ButtonDisplay = styled.div`
    position:fixed;
    left:5vw;
    top:40vh;
    justify-content: space-between;
    width:90vw;
    margin:auto;
    @media ${device.tablet}{
        
    }
`

const BorderBottom = styled.div`
    border-bottom:solid rgba(43,45,66, 0.2);
`


export{IncrementButton, 
    DecrementButton,
    List,  
    CollDiv, 
    InsDiv,
    CollapseButton,
    Title, 
    Header1, 
    Header2, 
    ListItem, 
    Paragraph,
    ParagraphSample, 
    Input, 
    Form, 
    Button, 
    BorderBottom, 
    NavButton, 
    Ul, 
    ButtonDisplay,
    ListWorkout}