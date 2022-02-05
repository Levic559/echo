import Lottie from "lottie-react";
import openBook from "../utils/book.json";
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import {header_theme, text_theme} from'../utils/variables'
import {useTheme} from '../utils/provider'
import React, { useState, useEffect } from 'react';

const LogoCon=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:25rem;
height:45rem;

`
const TextCon=styled.p`
font-family: 'Archivo Black', sans-serif;
font-size:6rem;
position: absolute;
z-index:2;
margin-top:30rem;
color:${(props)=>props.color}
`

const Logo = () => {
  const {theme} = useTheme();

  

return <LogoCon>
     
      <TextCon color={text_theme[theme].title}> Echo </TextCon> 
  </LogoCon>
}

export default Logo;