
import styled from "styled-components"

const Wrapper = styled.div.attrs({
    className: "container",
})`
    padding:0 40px 40px 40px;
    justify-content:center;
    margin:auto;
    margin-bottom:40px;
    display:flex;
    flex-direction:column;
    width:70%;
    height:75%;
    border-width:1px;
    border-radius: 5px;
`
const Title = styled.h1`
    text-transform:uppercase;
    margin-top: 20px;
    padding:40px 40px 40px 40px;
    border: solid #78C0E0;
    width: 75%;
    text-align: center
    margin:auto;
    margin-top:20px;
    margin-bottom:40px;
    background-color:#2B2D42;
    border-radius: 5px;
    color:#78C0E0;
    font-size:4rem;
    
`
const Paragraph = styled.p`
    text-align: center;
    width:60%;
    margin:auto;
    margin-top:20px;
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
    border-bottom:solid rgba(43,45,66, 0.2);
    border-width:10px;
    width:50%;
    
`
const CollDiv = styled.div`

color:black;
border:outset #78C0E0;
text-align:center
margin:10px 0px 0px 0px
font-size:1.5rem;
width:50%;
margin:auto;
margin-top:20px;
border-radius:5px;
`
const InsDiv = styled.div`

color:black;
border:outset #78C0E0
text-align:center
margin:10px 0px 0px 0px
font-size:1.5rem;
width:50%;
margin:auto;
margin-top:20px;
border-radius:5px;


`
const ListItem = styled.li`
    color:black;
    font-size: 0.85rem;
    text-align:left
    margin-top:10px;
    margin-bottom:10px
    
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
position:relative;
top:25px;
margin-right: 5px;
`
const Nav = styled.nav`
    margin-bottom:20px;
    background-color:#2B2D42;
    border: solid #78C0E0;
    width:75%;
    margin:auto;
    margin-bottom:20px;
    margin-top:20px;
    border-radius:5px;
    height:50%;
    
`

const ButtonDisplay = styled.div`
    flex-direction: row;
    justify-content: space-between;
    width:100%;
    margin-left:20px;
`

const BorderBottom = styled.div`
    border-bottom:solid rgba(43,45,66, 0.2);
`

export{CollDiv, InsDiv, Wrapper, Title, Header1, Header2, ListItem, Paragraph, Input, Form, Button, BorderBottom, NavButton, Nav, ButtonDisplay}