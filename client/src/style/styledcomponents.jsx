
import styled from "styled-components"
import {device} from "./device"

const Wrapper = styled.div.attrs({
    className: "container",
})`

    justify-content:center;
    margin:auto;
    margin-bottom:40px;
    display:flex;
    flex-direction:column;
    width:100%;
    height:75%;
    border-width:1px;
    border-radius: 5px;
`
const Title = styled.h1`
    text-transform:uppercase;
    padding:20px 20px 20px 20px;
    border: solid #78C0E0;
    width: 50%;
    text-align: center;
    margin:auto;
    margin-top:6%;
    margin-bottom:10px;
    background-color:#2B2D42;
    border-radius: 5px;
    color:#78C0E0;
    font-size:4vw;
    @media ${device.tablet}{
        font-size:8vw;
    }
`
const Paragraph = styled.p`
    text-align: center;
    width:75%;
    margin:auto;
    margin-top:20px;
    font-size:1.5vw;
    @media ${device.tablet}{
        font-size:4.0vw;
    }
`
const Header1 = styled.h1`
    text-align: center;
    font-size:3vw
    margin-top:3%
    margin-bottom:3%;
    @media ${device.tablet}{
        font-size:6.0vw;
    }
`

const Header2 = styled.h2`
    text-align: center;
    margin:auto;
    margin-top:40px;
    margin-bottom:40px;
    color:#2B2D42
    border-bottom:solid rgba(43,45,66, 0.4);
    border-width:10px;
    width:50%;
    padding:10px;
    font-size:3vw;
    @media ${device.tablet}{
        font-size:6.0vw;
    }
`
const CollDiv = styled.div`

color:black;
border:outset #78C0E0;
text-align:center;
margin:10px 0px 0px 0px
font-size:1.5rem;
width:60%;
margin:auto;
margin-top:20px;
border-radius:5px;
@media ${device.tablet}{
    width:100%;
}
`
const InsDiv = styled.div`

color:black;
border:outset #78C0E0
text-align:center
margin:10px 0px 0px 0px
font-size:1.5rem;
width:60%;
margin:auto;
margin-top:20px;
border-radius:5px;
@media ${device.tablet}{
    width:100%;
}

`
const ListItem = styled.li`
    
    color:black;
    text-align:left
    margin-top:10px;
    margin-bottom:10px
    line-height:1.5;
    @media ${device.tablet}{
        font-size:4.0vw;
    }
    
    
`

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  @media ${device.tablet}{
    padding:20px 20px 20px 10px
}
  
`
const Form = styled.form`
    width:35%;
    justify-content:center;
    margin:auto;
    margin-top:40px;
    @media ${device.tablet}{
        width:80%;
    }
`
const Button = styled.button`
    background-color: #2B2D42
    &:hover{
        background-color:#4F8585
    }
    color:#78C0E0;
    border:outset #78C0E0;
    border-radius:5px;
    float:right;
    padding: 5px 20px 5px 20px;
    margin: auto;
    @media ${device.tablet}{
        padding: 5px 10px 5px 10px;
    }
`

const IncrementButton = styled.button`
    background-color: #2B2D42
    display:inline-block;
    &:hover{
        background-color:#4F8585
    }
    color:#78C0E0;
    border:outset #78C0E0;
    border-radius:5px;
    padding:20px 20px 20px 20px
    float:right;
    font-size:1.5vw
    @media ${device.tablet}{
        padding:10px 10px 10px 10px
        font-size:4vw
    }
`

const DecrementButton = styled.button`
    background-color: #2B2D42
    display:inline-block;
    &:hover{
        background-color:#4F8585
    }
    color:#78C0E0;
    border:outset #78C0E0;
    border-radius:5px;
    padding:20px 20px 20px 20px
    float:left;
    font-size:1.5vw
    @media ${device.tablet}{
        padding:10px 10px 10px 10px
        font-size:4.0vw
    }
`
const NavButton = styled.button`
background-color: #2B2D42
&:hover{
    background-color:#4F8585
}
color:#78C0E0;
border:none;
float:right;
font-size:1.75vw

@media ${device.tablet}{
    font-size:4vw;
}
`

const List = styled.li`
    
margin-bottom:20px;
display:block;
background-color:#2B2D42;
border: none;
margin:auto;
margin-left:1%;

border-radius:5px;
height:50%;
float: right;

a {
    display: block;
    color: white;
    text-align: none;
    text-decoration: none;
  }
    
`

const ListWorkout = styled.li`
    
margin-bottom:20px;
display:block;
background-color:#2B2D42;
border: none;
margin:auto;

border-radius:5px;
height:50%;
float: left;

a {
    display: block;
    color: white;
    text-align: none;
    text-decoration: none;
  }
    
`
const Ul = styled.ul`
list-style-type: none;
margin: 0;
padding: 20px 20px 20px 20px;
overflow: hidden;
background-color:#2B2D42;
width:75%
margin:auto;
    
`

const ButtonDisplay = styled.div`
    justify-content: space-between;
    width:40%;
    margin:auto;
    @media ${device.tablet}{
        width:100%;
    }
`

const BorderBottom = styled.div`
    border-bottom:solid rgba(43,45,66, 0.2);
`
const WorkoutDiv = styled.div`
    width:100%;
`
const AppDiv = styled.div`
    width:100%;
    height:100%;
    border: solid black;
    background-color:red;
`
export{IncrementButton, 
    DecrementButton,
    AppDiv,
    List, 
    WorkoutDiv, 
    CollDiv, 
    InsDiv, 
    Wrapper, 
    Title, 
    Header1, 
    Header2, 
    ListItem, 
    Paragraph, 
    Input, 
    Form, 
    Button, 
    BorderBottom, 
    NavButton, 
    Ul, 
    ButtonDisplay,
    ListWorkout}