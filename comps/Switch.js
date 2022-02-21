import styled from 'styled-components';
import {useTheme} from '../utils/provider'
import {comp_theme} from'../utils/variables'
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
const SwitchLabel=styled.p`
color:${props=>props.color};
font-size:1.5rem;
margin:1rem
`

const Switch=({
    label="Dark mode",
    btn='On',
    onSwitchClick=()=>{}
 })=>{
    const {theme} = useTheme();
    // console.log(theme)
    return <Container>
        <SwitchLabel color={comp_theme[theme].label}> {label} </SwitchLabel>
       <Button onClick={onSwitchClick} > {btn} </Button>
       
</Container>
}

export default Switch;