import styled from 'styled-components';
import {useTheme} from '../utils/provider'
import {comp_theme, text_theme} from'../utils/variables'
import Button from '@mui/material/Button';

const Container =styled.div`
height:5rem;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center
`
const BtnCont=styled.button`
width:10rem;
font-size:.8rem;
padding:.75rem;
border-radius:.75rem;
background-color:${(props)=>props.switchBgc};
border: 0px;
margin-bottom:1rem;
&:hover {
    background-color: lightgrey;
  };
  &:hover {
    color: white;
  };
  &:focus{
    background-color: #9a9392;
  }
  &:focus{
    color: #f3f6f4;
  }
`
const SwitchLabel=styled.div`
color:${props=>props.color};
font-size:1.5rem;
margin-right:1rem;
font-family: 'Baumans', sans-serif;
`

const Switch=({
    label="Dark mode",
    btn='On',
    onSwitchClick=()=>{}
 })=>{
    const {theme} = useTheme();
    // console.log(theme)
    return <Container>
        <SwitchLabel color={text_theme[theme].label}> {label} </SwitchLabel>
       <Button onClick={onSwitchClick}  style={{background:comp_theme[theme].label2 ,color:text_theme[theme].label}}> {btn} </Button>
       
</Container>
}

export default Switch;