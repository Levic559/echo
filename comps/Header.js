import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import {header_theme, text_theme} from'../utils/variables'
import {useTheme} from '../utils/provider'
import { Router } from "next/router";
import { useRouter } from "next/router";

const HeaderCon = styled.div`
width:100%;
height:5rem;
background-color:${(props)=>props.BGC};
border-radius:1rem 1rem 0 0;
display:flex;
justify-content:center;
align-items:center;
`

const TextCon=styled.p`
width:75%;
justify-content:center;
align-items:center;
font-size:2rem;
text-align:center;
margin:.5rem;
color:${(props)=>props.color}
`

const Header =({
    title='Book',
})=>{

    const {theme} = useTheme();
    const router=useRouter()
    return(
        <HeaderCon BGC={header_theme[theme].label}>
          <Icon/>
          <TextCon color={text_theme[theme].label} onClick={()=>router.push('/books')}>{title}</TextCon>
          <Icon HomeDis="none" GearDis="block"/>
          </HeaderCon>
    )
}


export default Header