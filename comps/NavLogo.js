import Lottie from "lottie-react";
import sound from "../utils/sound.json";
import {header_theme, text_theme} from'../utils/variables'
import {useTheme} from '../utils/provider'
import React, { useState, useEffect } from 'react';



const NavLogo = ({
  loop="true"
}) => {
  const {theme} = useTheme();

  

return <div className="navLogo">
      <p className="navTextCon" style={{color:text_theme[theme].title}}> Echo </p> 
     <Lottie className="navLogoAni" loop={loop}  animationData={sound} style={{color:text_theme[theme].label}}/>

  </div>
}

export default NavLogo;