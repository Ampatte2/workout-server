
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
    padding:40px 40px 40px 40px;
    border: solid #78C0E0;
    width: 50%;
    text-align: center;
    margin:auto;
    margin-top:5%;
    margin-bottom:10px;
    background-color:#2B2D42;
    border-radius: 5px;
    color:#78C0E0;
    font-size:4vw;
    @media ${device.tablet}{
        font-size:10vw;
    }
`
const Paragraph = styled.p`
    text-align: center;
    width:100%;
    margin:auto;
    margin-top:20px;
    font-size:2vw;
    @media ${device.tablet}{
        font-size:4.0vw;
    }
`
const Header1 = styled.h1`
    text-align: center;
    
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
    padding:20px;
    font-size:4vw;
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
width:80%;
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
width:80%;
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
`
const Form = styled.form`
    width:50%;
    justify-content:center;
    margin:auto;
    margin-top:40px;
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
`
const NavButton = styled.button`
background-color: #2B2D42
&:hover{
    background-color:#4F8585
}
color:#78C0E0;
border:none
transform:translateY(200%)
`

const List = styled.div`
    float:right;
    

    
    
`
const Nav = styled.nav`
    margin-bottom:20px;
    background-color:#2B2D42;
    border: solid #78C0E0;
    width:100%;
    margin:auto;
    margin-bottom:20px;
    margin-top:20px;
    border-radius:5px;
    height:50%;
    transform:translateX(-0.40%)
    
`

const ButtonDisplay = styled.div`
    flex-direction: row;
    justify-content: center;
    width:100%;
    
    
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
`
export{AppDiv,List, WorkoutDiv, CollDiv, InsDiv, Wrapper, Title, Header1, Header2, ListItem, Paragraph, Input, Form, Button, BorderBottom, NavButton, Nav, ButtonDisplay}