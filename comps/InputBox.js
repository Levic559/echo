import { Input } from 'semantic-ui-react'
import React from "react";
import {header_theme, text_theme} from'../utils/variables'
import {useTheme} from '../utils/provider'



const InputBox = ({
    text = 'Account :',


}) => {
    const {theme} = useTheme();

    return <div className='inputCon'>
            
                <p style={{color:text_theme[theme].title}}> {text}</p>
                <Input className='input' />
        </div>
  
}



export default InputBox