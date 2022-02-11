import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import {header_theme, text_theme} from'../utils/variables'
import {useTheme} from '../utils/provider'
import { Router } from "next/router";
import { useRouter } from "next/router";



const Nav =({
    text='Setting',
})=>{

    const {theme} = useTheme();
    const router=useRouter()
    return(
        <div className="navBar" BGC={header_theme[theme].label}>
          {/* <Icon/> */}
          <div color={text_theme[theme].label} onClick={()=>router.push('/books')}>{text}</div>
          {/* <Icon HomeDis="none" GearDis="block"/> */}
          </div>
    )
}


export default Nav