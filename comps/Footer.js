import React from "react";
import styled from "styled-components";
import {header_theme, text_theme} from'../utils/variables'
import {useTheme} from '../utils/provider'


const Footer =()=>{
const {theme}=useTheme()

    return(
        <p className="footer" color={text_theme[theme].title}>© COPRRIGHT ECHO READER CLUB 2022  BCIT  MDIA3109/MD4130  </p>
    )
}


export default Footer