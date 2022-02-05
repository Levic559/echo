import React from "react";
import styled from "styled-components";
import {header_theme, text_theme} from'../utils/variables'
import {useTheme} from '../utils/provider'
const TextCon=styled.p`
width:70%;
justify-content:center;
align-items:center;
font-size:1rem;
text-align:center;
margin:.5rem;
color:${(props)=>props.color}
`

const Footer =()=>{
const {theme}=useTheme()

    return(
        <TextCon color={text_theme[theme].title}>© COPRRIGHT ECHO READER CLUB 2022  BCIT  MDIA3109/MD4130  </TextCon>
    )
}


export default Footer